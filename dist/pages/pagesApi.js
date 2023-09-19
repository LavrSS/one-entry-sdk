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
 * Controllers for working with page objects, including catalog pages
 */
class PageApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._url += '/api/content/pages';
    }
    /**
     * Get all top-level page objects.
     *
     * @returns Returns all created pages without parents as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    getRootPages() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet('/root');
            return result;
        });
    }
    /**
     * Get all page objects with product information as an array.
     *
     * @param {number} [limit] - Optional parameter for pagination, default is 30
     *
     * @param {number} [offset] - Optional parameter for pagination, default is 0
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    getCatalogPages(limit = 30, offset = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO Query parameters
            const result = yield this._fetchGet('/catalog');
            return result;
        });
    }
    /**
     * Get all page objects with product information as an array.
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    getPages() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet('');
            return result;
        });
    }
    /**
     * Get page object with information about forms, blocks, menus, linked to the page.
     *
     * @param {number} [id] - Page object identifier
     *
     * @returns Returns page object (DTO depends on the type of page being returned)
     */
    getPageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${id}`);
            return result;
        });
    }
    /**
     * Get page object with information about forms, blocks, menus, linked to the page by URL.
     *
     * @param {string} [url] - Page URL
     *
     * @returns Returns page object (DTO depends on the type of page being returned)
     */
    getPageByUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/url/${url}`);
            return result;
        });
    }
    /**
     * Get child pages object with information as an array.
     *
     * @param {string} [url] - Page URL
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data) for the selected parent
     */
    getChildPagesByParentUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${url}/children`);
            return result;
        });
    }
    /**
     * Get settings for the page.
     *
     * @param {string} [url] - Page URL
     *
     * @returns Returns a ConfigPageDto object with page display settings
     */
    getConfigPageByUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${url}/config`);
            return result;
        });
    }
    /**
     * Quick search for page objects with limited output.
     *
     * @param {string} [name] - Text for searching page objects (search is performed on the title field of the localizeInfos object with the language taken into account)
     *
     * @param {string} [lang] - Language code. Example : en_US
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    searchPage(name, lang = 'en_US') {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/quick/search?lang=${lang}&name=${name}`);
            return result;
        });
    }
}
exports.default = PageApi;
//# sourceMappingURL=pagesApi.js.map