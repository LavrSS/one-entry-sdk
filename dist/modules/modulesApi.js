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
 * Controllers for working with application modules
 */
class ModulesApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._url += '/api/content/modules';
    }
    /**
     * Get all modules.
     *
     * @returns Returns BaseModuleDto objects or an empty array [] if there is no data
     */
    getAllModules() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet('');
            return result;
        });
    }
}
exports.default = ModulesApi;
//# sourceMappingURL=modulesApi.js.map