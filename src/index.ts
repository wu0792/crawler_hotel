import { launch, Page, ElementHandle } from 'puppeteer'

(async () => {
    const ROOT_URL = 'https://phone.jd.com/',
        TIME_OUT = 30000,
        browser = await launch({
            headless: true,
            slowMo: 20
        })

    const expectPuppeteer = require('expect-puppeteer')

    // let page: Page = await browser.newPage()
    // await page.setViewport({ width: 1366, height: 7680 })

    // //打开采集入口页面
    // await page.goto(ROOT_URL)

    // const selector = 'a[href^="//item.jd.com/"][href$=".html"]'
    // await page.screenshot({ path: 'C:\\temp\\jd_mobile.png' })
    // //查找a标签，链接URL格式要求：//item.jd.com/27460006308.html
    // await expectPuppeteer(page)
    //     // .toSelect('a[href^="//item.jd.com/"][href$=".html"]', '')
    //     .toMatchElement(selector)

    // let urls = await page.evaluate(() => {
    //     let list = document.querySelectorAll('a[href^="//item.jd.com/"][href$=".html"]'),
    //         urls: string[] = [],
    //         forEach = Array.prototype.forEach

    //     forEach.call(list, (item: any) => {
    //         urls.push(item.getAttribute('href'))
    //     })

    //     return urls
    // })

    let urls = ["https://item.jd.com/25861536830.html",
        "https://item.jd.com/25861536830.html",
        "https://item.jd.com/27042603326.html",
        "https://item.jd.com/27042603326.html",
        "https://item.jd.com/26881279035.html",
        "https://item.jd.com/26881279035.html",
        "https://item.jd.com/26496755485.html",
        // "https://item.jd.com/26496755485.html",
        // "https://item.jd.com/17928759697.html",
        // "https://item.jd.com/17928759697.html",
        // "https://item.jd.com/25968185110.html",
        // "https://item.jd.com/25968185110.html",
        // "https://item.jd.com/26385386452.html",
        // "https://item.jd.com/26385386452.html",
        // "https://item.jd.com/25774787882.html",
        // "https://item.jd.com/25774787882.html",
        // "https://item.jd.com/27821367235.html",
        // "https://item.jd.com/27821367235.html",
        // "https://item.jd.com/22769568633.html",
        // "https://item.jd.com/22769568633.html",
        // "https://item.jd.com/26001271783.html",
        // "https://item.jd.com/26001271783.html",
        // "https://item.jd.com/14109424467.html",
        // "https://item.jd.com/14109424467.html",
        // "https://item.jd.com/26496755485.html",
        // "https://item.jd.com/26496755485.html",
        // "https://item.jd.com/25966597474.html",
        // "https://item.jd.com/25966597474.html",
        // "https://item.jd.com/26002286579.html",
        // "https://item.jd.com/26002286579.html",
        // "https://item.jd.com/27266632611.html",
        // "https://item.jd.com/27266632611.html",
        // "https://item.jd.com/27821367235.html",
        // "https://item.jd.com/27821367235.html",
        // "https://item.jd.com/27149536936.html",
        // "https://item.jd.com/27149536936.html",
        // "https://item.jd.com/14109424462.html",
        // "https://item.jd.com/14109424462.html",
        // "https://item.jd.com/25885710337.html",
        // "https://item.jd.com/25885710337.html",
        // "https://item.jd.com/11250099460.html",
        // "https://item.jd.com/11250099460.html",
        // "https://item.jd.com/26001271783.html",
        // "https://item.jd.com/26001271783.html",
        // "https://item.jd.com/26817349590.html",
        // "https://item.jd.com/26817349590.html",
        // "https://item.jd.com/26128827092.html",
        // "https://item.jd.com/26128827092.html",
        // "https://item.jd.com/12834488619.html",
        // "https://item.jd.com/12834488619.html",
        // "https://item.jd.com/27005740010.html",
        // "https://item.jd.com/27005740010.html",
        // "https://item.jd.com/25774787882.html",
        // "https://item.jd.com/25774787882.html",
        // "https://item.jd.com/27150124341.html",
        // "https://item.jd.com/27150124341.html",
        // "https://item.jd.com/26433066864.html",
        // "https://item.jd.com/26433066864.html",
        // "https://item.jd.com/12096585685.html",
        // "https://item.jd.com/12096585685.html",
        // "https://item.jd.com/11250099460.html",
        // "https://item.jd.com/11250099460.html",
        // "https://item.jd.com/26265309532.html",
        // "https://item.jd.com/26265309532.html",
        // "https://item.jd.com/19993962230.html",
        // "https://item.jd.com/19993962230.html",
        // "https://item.jd.com/22769568633.html",
        // "https://item.jd.com/22769568633.html",
        // "https://item.jd.com/26181313947.html",
        // "https://item.jd.com/26181313947.html",
        // "https://item.jd.com/26398267160.html",
        // "https://item.jd.com/26398267160.html",
        // "https://item.jd.com/18166164132.html",
        // "https://item.jd.com/18166164132.html",
        // "https://item.jd.com/25968185110.html",
        // "https://item.jd.com/25968185110.html",
        // "https://item.jd.com/25106045276.html",
        // "https://item.jd.com/25106045276.html",
        // "https://item.jd.com/25885710337.html",
        // "https://item.jd.com/25885710337.html",
        // "https://item.jd.com/17928759697.html",
        // "https://item.jd.com/18614205206.html",
        // "https://item.jd.com/18614205206.html",
        // "https://item.jd.com/25642117158.html",
        // "https://item.jd.com/25642117158.html",
        // "https://item.jd.com/22048997991.html",
        // "https://item.jd.com/22048997991.html",
        // "https://item.jd.com/25672948619.html",
        // "https://item.jd.com/25672948619.html",
        // "https://item.jd.com/26425156686.html",
        // "https://item.jd.com/26425156686.html",
        // "https://item.jd.com/26425156688.html",
        // "https://item.jd.com/26425156688.html",
        // "https://item.jd.com/26425156687.html",
        // "https://item.jd.com/26425156687.html",
        // "https://item.jd.com/27952540630.html",
        // "https://item.jd.com/27952540630.html",
        // "https://item.jd.com/25667125294.html",
        // "https://item.jd.com/25667125294.html",
        // "https://item.jd.com/25390983397.html",
        // "https://item.jd.com/25390983397.html",
        // "https://item.jd.com/25881769344.html",
        // "https://item.jd.com/25881769344.html",
        // "https://item.jd.com/25420535166.html",
        // "https://item.jd.com/25420535166.html",
        // "https://item.jd.com/10404858656.html",
        // "https://item.jd.com/10404858656.html",
        // "https://item.jd.com/10213303571.html",
        // "https://item.jd.com/10213303571.html",
        // "https://item.jd.com/1726550760.html",
        // "https://item.jd.com/1726550760.html",
        // "https://item.jd.com/11678893163.html",
        "https://item.jd.com/11678893163.html"]

    let urlSet: Set<string> = new Set(urls)

    // let urls = ["https://item.jd.com/25861536830.html",
    //     "https://item.jd.com/27042603326.html"]

    let dict: Map<string, string[]> = new Map(),
        timeoutOption = { timeout: TIME_OUT }

    urlSet.forEach(async url => {
        let page = await browser.newPage()
        await page.setViewport({ width: 1366, height: 7680 })

        await page.goto(url)
        let commentSelector = 'li[data-anchor="#comment"]'
        await expectPuppeteer(page).toMatchElement(commentSelector, timeoutOption)
        await expectPuppeteer(page).toClick(commentSelector, timeoutOption)

        let title = await page.$eval('.sku-name', div => div.innerHTML)
        title = title.trim()

        await expectPuppeteer(page).toMatchElement('.percent-info', timeoutOption)
        let tags = await page.$eval('.percent-info', div => {
            let tags = div.querySelectorAll('.tag-1'),
                tagContents: string[] = []

            Array.prototype.forEach.call(tags, (tag: any) => {
                tagContents.push(tag.innerText)
            })

            return tagContents
        })

        dict.set(title, tags)
    })

    // debugger


})()
