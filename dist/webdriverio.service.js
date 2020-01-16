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
const webdriverio_1 = require("./webdriverio");
class NgApimockService {
    constructor(options) {
        this.globalName = (options && options.globalName)
            ? options.globalName
            : 'ngApimock';
        this.baseUrl = options.baseUrl;
    }
    before(capabilities) {
        return __awaiter(this, void 0, void 0, function* () {
            const plugin = new webdriverio_1.WebdriverIOClient(this.baseUrl);
            global[this.globalName] = plugin;
            plugin.setNgApimockCookie();
        });
    }
}
exports.default = NgApimockService;
//# sourceMappingURL=webdriverio.service.js.map