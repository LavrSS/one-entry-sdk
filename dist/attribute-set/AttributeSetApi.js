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
 * Controllers for working with attribute sets
 */
class AttributeSetApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._url += '/api/content/attributes-sets';
    }
    /**
     * Get one attributes set object.
     *
     * @param {number} [id] - Identifier of the attributes set object
     *
     * @returns Returns one attributes set object
     */
    getAttributeSetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${id}`);
            return result;
        });
    }
    /**
     * Get one attributes set object by marker.
     *
     * @param {string} [marker] - Marker of the attributes set object
     *
     * @returns Returns one attributes set object
     */
    getAttributeSetByMarker(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`marker/${marker}`);
            return result;
        });
    }
}
exports.default = AttributeSetApi;
//# sourceMappingURL=attributeSetApi.js.map