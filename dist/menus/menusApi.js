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
const oneEntry_1 = require("../base/oneEntry");
/**
 * Controllers for working with menu objects
 */
class MenusApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._url += '/api/content/menus';
    }
    /**
     * Get pages includes in menu by marker.
     *
     * @param {string} [marker] - Menu marker
     *
     * @returns Returns a single menu object as a ContentMenuDto object with included pages
     */
    getMenusByMarker(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/marker/${marker}`);
            return result;
        });
    }
}
exports.default = MenusApi;
//# sourceMappingURL=menusApi.js.map