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
(function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    var ROOT_URL, TIME_OUT, browser, expectPuppeteer, urls, urlSet, dict, timeoutOption;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ROOT_URL = 'https://phone.jd.com/', TIME_OUT = 30000;
                return [4 /*yield*/, puppeteer_1.launch({
                        headless: true,
                        slowMo: 20
                    })];
            case 1:
                browser = _a.sent();
                expectPuppeteer = require('expect-puppeteer');
                urls = ["https://item.jd.com/25861536830.html",
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
                    "https://item.jd.com/11678893163.html"];
                urlSet = new Set(urls);
                dict = new Map(), timeoutOption = { timeout: TIME_OUT };
                urlSet.forEach(function (url) { return __awaiter(_this, void 0, void 0, function () {
                    var page, commentSelector, title, tags;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, browser.newPage()];
                            case 1:
                                page = _a.sent();
                                return [4 /*yield*/, page.setViewport({ width: 1366, height: 7680 })];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, page.goto(url)];
                            case 3:
                                _a.sent();
                                commentSelector = 'li[data-anchor="#comment"]';
                                return [4 /*yield*/, expectPuppeteer(page).toMatchElement(commentSelector, timeoutOption)];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, expectPuppeteer(page).toClick(commentSelector, timeoutOption)];
                            case 5:
                                _a.sent();
                                return [4 /*yield*/, page.$eval('.sku-name', function (div) { return div.innerHTML; })];
                            case 6:
                                title = _a.sent();
                                title = title.trim();
                                return [4 /*yield*/, expectPuppeteer(page).toMatchElement('.percent-info', timeoutOption)];
                            case 7:
                                _a.sent();
                                return [4 /*yield*/, page.$eval('.percent-info', function (div) {
                                        var tags = div.querySelectorAll('.tag-1'), tagContents = [];
                                        Array.prototype.forEach.call(tags, function (tag) {
                                            tagContents.push(tag.innerText);
                                        });
                                        return tagContents;
                                    })];
                            case 8:
                                tags = _a.sent();
                                dict.set(title, tags);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=index.js.map