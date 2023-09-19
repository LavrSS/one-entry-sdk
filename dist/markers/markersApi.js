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
 * Controllers for working with markers objects
 */
class TemplatesPreviewApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._url += '/api/content/markers';
    }
    /**
     * Get one marker object by marker.
     *
     * @param {string} [marker] - Text identifier (marker) of the marker object
     *
     * @returns
     * Returns one MarkerEntity marker object
     */
    getMarker(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/marker/${marker}`);
            return result;
        });
    }
    /**
     * Get all marker objects.
     *
     * @param {number} [limit] - Parameter for limiting the selection of records, by default - 30
     *
     * @param {number} [offset] - Parameter for offset of records selection, default - 0
     *
     * @returns Returns an object ItemsWithTotal, where items is an array of MarkerEntity objects, total - the total number of markers found
     */
    getMarkers(limit = 30, offset = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`?limit=${limit}&offset=${offset}`);
            return result;
        });
    }
    /**
     * Get one marker object.
     *
     * @param {number} [id] - Identifier of marker object
     *
     * @returns Returns one marker object MarkerEntity
     */
    getMarkersById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${id}`);
            return result;
        });
    }
}
exports.default = TemplatesPreviewApi;
//# sourceMappingURL=markersApi.js.map