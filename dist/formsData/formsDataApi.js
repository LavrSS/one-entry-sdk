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
 * Controllers for working with form data
 */
class FormsDataApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._url += '/api/content/form-data';
    }
    /**
     * Get all forms data.
     *
     * @returns Returns array for all objects of type CreateFormDataDto
     */
    getFormsData() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet('');
            return result;
        });
    }
    /**
     * Find all product page objects with pagination and multiple filtering.
     *
     * @param {object} [data] - Request body.
     * Example Value:
     * {
     *   "formIdentifier": "my-form",
     *   "formData": [
     *     {
     *       "marker": "naimenovanie_1",
     *       "value": "Наименование",
     *       "langCode": "ru_RU"
     *     }
     *   ]
     * }
     *
     * @returns - Returns created CreateFormDataDto objects.
     */
    postFormsData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchPost('', data);
            return result;
        });
    }
    /**
     * Get one object of form data by marker.
     *
     * @param {string} [marker] - Marker of the form data
     *
     * @returns Returns array of object FormDataEntity
     */
    getFormsDataByMarker(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${marker}`);
            return result;
        });
    }
}
exports.default = FormsDataApi;
//# sourceMappingURL=formsDataApi.js.map