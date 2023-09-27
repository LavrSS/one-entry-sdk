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
 * Controllers for forms objects
 */
class FormsApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._url += '/api/content/forms';
    }
    /**
     * Get all forms.
     *
     * @returns Returns array for all objects of type FormEntity
     */
    getAllForms() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet('');
            return result;
        });
    }
    /**
     * Get one form by form id.
     *
     * @returns Returns object of type FormEntity
     */
    getFormById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${id}`);
            return result;
        });
    }
    /**
     * Get one form by form marker.
     *
     * @returns Returns object of type FormEntity
     */
    getFormByMarker(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/marker/${marker}`);
            return result;
        });
    }
}
exports.default = FormsApi;
//# sourceMappingURL=formsApi.js.map