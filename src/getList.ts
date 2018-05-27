import { launch, Page, ElementHandle } from 'puppeteer'
import { IHotelSummary } from './entity/hotelSummary'
const Sequelize = require('sequelize')
const sequelize = require('./db/getSequenlize.js');

(async () => {


    const HotelSummary = sequelize.define('hotel_summary', {
        Name: Sequelize.STRING,
        Address: Sequelize.STRING,
        Rank: Sequelize.STRING,
        DetailUrl: Sequelize.STRING
    });

    await sequelize.sync()

    const ROOT_URL = 'http://hotels.ctrip.com/hotel/shenzhen30',
        TIME_OUT = 30000,
        browser = await launch({
            headless: true,
            slowMo: 20
        })

    const expectPuppeteer = require('expect-puppeteer')

    let page: Page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 7680 })

    //打开采集入口页面
    await page.goto(ROOT_URL)

    let resolveContent = async () => {
        const selector = '#hotel_list .hotel_new_list'
        await expectPuppeteer(page)
            .toMatchElement(selector, { timeout: TIME_OUT })

        page.on('console', msg => {
            for (let i = 0; i < msg.args().length; ++i)
                console.log(`${i}: ${msg.args()[i]}`);
        })

        let summaryList: IHotelSummary[] = await page.evaluate(() => {
            const selector = '#hotel_list .hotel_new_list'
            let list = document.querySelectorAll(selector),
                _summaryList: IHotelSummary[] = [],
                forEach = Array.prototype.forEach,
                find = Array.prototype.find

            console.log(`list.length:${list.length}`)

            Array.from(list).forEach((item, index) => {
                let nameEl = item.querySelector('.hotel_item_name'),
                    addressEl = item.querySelector('.hotel_item_htladdress'),
                    rankEl = item.querySelector('span.hotel_ico').lastChild as Element,
                    detailEl = item.querySelector('.pic_medal .hotel_pic a')

                // console.log(`item.outerHTML:${item.outerHTML}`)
                // console.log(`item:${item},nameEl:${nameEl},addressEl:${addressEl},satrEl:${satrEl},detailEl:${detailEl}`)
                console.log(`satrEl.getAttribute('class'):${rankEl.getAttribute('class')}`)

                _summaryList.push({
                    Name: (nameEl.querySelector('.hotel_name') as HTMLElement).innerText,
                    Address: (addressEl as HTMLElement).innerText,
                    Rank: rankEl && rankEl.getAttribute('class').match(/hotel_(.+)/) ? rankEl.getAttribute('class').match(/hotel_(.+)/)[1] : '',
                    DetailUrl: detailEl.getAttribute('href')
                })
            })

            return _summaryList
        })

        summaryList.forEach(summary => {
            HotelSummary.create({
                Name: summary.Name,
                Address: summary.Address,
                Rank: summary.Rank,
                DetailUrl: summary.DetailUrl
            })
        })
    }

    let recordPageCount = 0
    while (true) {
        await resolveContent()
        recordPageCount++

        let hasNext = await page.evaluate(() => {
            let btnNext = document.querySelector('#downHerf')
            let className = btnNext.getAttribute('class')

            if (className != 'c_down_nocurrent') {
                return true
            } else {
                return false
            }

        })

        if (hasNext) {
            await expectPuppeteer(page).toMatchElement('#downHerf', { timeout: TIME_OUT })
            await expectPuppeteer(page).toClick('#downHerf')
        } else {
            break
        }
    }


})()
