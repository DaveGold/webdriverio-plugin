"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = require("sinon");
const webdriverio_1 = require("./webdriverio");
describe('WebdriverIOClient', () => {
    const BASE_URL = 'http://localhost:9000';
    let browserGetProcessedConfigThenFn;
    let browserSetCookiesFn;
    let browserUrlFn;
    let client;
    let deferredPromise;
    let rejectFn;
    let resolveFn;
    beforeAll(() => {
        browserGetProcessedConfigThenFn = sinon_1.stub();
        browserSetCookiesFn = sinon_1.stub();
        browserUrlFn = sinon_1.stub();
        deferredPromise = {};
        global['browser'] = {
            options: {
                baseUrl: BASE_URL
            },
            url: browserUrlFn,
            setCookies: browserSetCookiesFn
        };
        resolveFn = sinon_1.stub();
        rejectFn = sinon_1.stub();
        client = new webdriverio_1.WebdriverIOClient(BASE_URL);
    });
    describe('constructor', () => it('sets the baseUrl', () => expect(client.baseUrl).toBe(BASE_URL + '/ngapimock')));
    describe('openUrl', () => it('opens the url', () => __awaiter(void 0, void 0, void 0, function* () {
        yield client.openUrl('url');
        sinon_1.assert.calledWith(browserUrlFn, 'url');
    })));
    describe('setCookie', () => it('sets the cookie', () => __awaiter(void 0, void 0, void 0, function* () {
        yield client.setCookie('name', 'value');
        sinon_1.assert.calledWith(browserSetCookiesFn, { name: 'name', value: 'value' });
    })));
});
//# sourceMappingURL=webdriverio.spec.js.map