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
 * Controllers for working with product statuses
 */
class ProductStatusesApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._url += '/api/content/product-statuses';
    }
    /**
     * Search for all product status objects.
     *
     * @returns Returns an array of product status objects
     */
    getProductStatuses() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet('');
            return result;
        });
    }
    /**
     * Search for a product status object by identifier.
     *
     * @param {number} [id] - Status id
     *
     * @returns Returns a product status object
     */
    getProductStatusesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${id}`);
            return result;
        });
    }
    /**
     * Search for a product status object by its textual identifier (marker).
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns a product status object
     */
    getProductsByStatusMarker(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/marker/${marker}`);
            return result;
        });
    }
    /**
     * Check the existence of a textual identifier.
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns true if the textual identifier (marker) exists or false if it doesn't
     */
    validateMarker(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/marker-validation/${marker}`);
            return result;
        });
    }
}
exports.default = ProductStatusesApi;
//# sourceMappingURL=productStatusesApi.js.map