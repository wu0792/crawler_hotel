"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = require("puppeteer");
var Sequelize = require('sequelize');
var sequelize = require('./db/getSequenlize.js');
(function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    var HotelSummary, ROOT_URL, TIME_OUT, browser, expectPuppeteer, page, resolveContent, recordPageCount, hasNext;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                HotelSummary = sequelize.define('hotel_summary', {
                    Name: Sequelize.STRING,
                    Address: Sequelize.STRING,
                    Rank: Sequelize.STRING,
                    DetailUrl: Sequelize.STRING
                });
                return [4 /*yield*/, sequelize.sync()];
            case 1:
                _a.sent();
                ROOT_URL = 'http://hotels.ctrip.com/hotel/shenzhen30', TIME_OUT = 30000;
                return [4 /*yield*/, puppeteer_1.launch({
                        headless: true,
                        slowMo: 20
                    })];
            case 2:
                browser = _a.sent();
                expectPuppeteer = require('expect-puppeteer');
                return [4 /*yield*/, browser.newPage()];
            case 3:
                page = _a.sent();
                return [4 /*yield*/, page.setViewport({ width: 1366, height: 7680 })
                    //打开采集入口页面
                ];
            case 4:
                _a.sent();
                //打开采集入口页面
                return [4 /*yield*/, page.goto(ROOT_URL)];
            case 5:
                //打开采集入口页面
                _a.sent();
                resolveContent = function () { return __awaiter(_this, void 0, void 0, function () {
                    var selector, summaryList;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                selector = '#hotel_list .hotel_new_list';
                                return [4 /*yield*/, expectPuppeteer(page)
                                        .toMatchElement(selector, { timeout: TIME_OUT })];
                            case 1:
                                _a.sent();
                                page.on('console', function (msg) {
                                    for (var i = 0; i < msg.args().length; ++i)
                                        console.log(i + ": " + msg.args()[i]);
                                });
                                return [4 /*yield*/, page.evaluate(function () {
                                        var selector = '#hotel_list .hotel_new_list';
                                        var list = document.querySelectorAll(selector), _summaryList = [], forEach = Array.prototype.forEach, find = Array.prototype.find;
                                        console.log("list.length:" + list.length);
                                        Array.from(list).forEach(function (item, index) {
                                            var nameEl = item.querySelector('.hotel_item_name'), addressEl = item.querySelector('.hotel_item_htladdress'), rankEl = item.querySelector('span.hotel_ico').lastChild, detailEl = item.querySelector('.pic_medal .hotel_pic a');
                                            // console.log(`item.outerHTML:${item.outerHTML}`)
                                            // console.log(`item:${item},nameEl:${nameEl},addressEl:${addressEl},satrEl:${satrEl},detailEl:${detailEl}`)
                                            console.log("satrEl.getAttribute('class'):" + rankEl.getAttribute('class'));
                                            _summaryList.push({
                                                Name: nameEl.querySelector('.hotel_name').innerText,
                                                Address: addressEl.innerText,
                                                Rank: rankEl && rankEl.getAttribute('class').match(/hotel_(.+)/) ? rankEl.getAttribute('class').match(/hotel_(.+)/)[1] : '',
                                                DetailUrl: detailEl.getAttribute('href')
                                            });
                                        });
                                        return _summaryList;
                                    })];
                            case 2:
                                summaryList = _a.sent();
                                summaryList.forEach(function (summary) {
                                    HotelSummary.create({
                                        Name: summary.Name,
                                        Address: summary.Address,
                                        Rank: summary.Rank,
                                        DetailUrl: summary.DetailUrl
                                    });
                                });
                                return [2 /*return*/];
                        }
                    });
                }); };
                recordPageCount = 0;
                _a.label = 6;
            case 6:
                if (!true) return [3 /*break*/, 13];
                return [4 /*yield*/, resolveContent()];
            case 7:
                _a.sent();
                recordPageCount++;
                return [4 /*yield*/, page.evaluate(function () {
                        var btnNext = document.querySelector('#downHerf');
                        var className = btnNext.getAttribute('class');
                        if (className != 'c_down_nocurrent') {
                            return true;
                        }
                        else {
                            return false;
                        }
                    })];
            case 8:
                hasNext = _a.sent();
                if (!hasNext) return [3 /*break*/, 11];
                return [4 /*yield*/, expectPuppeteer(page).toMatchElement('#downHerf', { timeout: TIME_OUT })];
            case 9:
                _a.sent();
                return [4 /*yield*/, expectPuppeteer(page).toClick('#downHerf')];
            case 10:
                _a.sent();
                return [3 /*break*/, 12];
            case 11: return [3 /*break*/, 13];
            case 12: return [3 /*break*/, 6];
            case 13: return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=getList.js.map