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
 * Controllers for working with template objects
 */
class TemplatesPreviewApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._url += '/api/content/templates';
    }
    /**
     * Get all template objects of a specific type.
     *
     * @returns Returns an array of product status objects
     */
    getTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO уточнить парметр type
            const result = yield this._fetchGet('');
            return result;
        });
    }
    /**
     * Get all template objects grouped by types.
     *
     * @param {number} [id] - Status id
     *
     * @returns Returns an object GroupedTemplatesObject, which contains an array of template objects TemplateEntity
     */
    getAllTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet('/all');
            return result;
        });
    }
    /**
     * Get one template object by id.
     *
     * @param {number} [id] - Product marker
     *
     * @returns Returns a TemplateEntity object
     */
    getTemplateById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${id}`);
            return result;
        });
    }
    /**
     * Get a single template object by marker.
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns a TemplateEntity object
     */
    getTemplateByMarker(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/marker/${marker}`);
            return result;
        });
    }
}
exports.default = TemplatesPreviewApi;
//# sourceMappingURL=templatesApi.js.map