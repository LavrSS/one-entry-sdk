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
class OneEntry {
    constructor(url) {
        this._url = url;
    }
    _getFullPath(path) {
        return (this._url + path);
    }
    _fetchGet(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this._getFullPath(path), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = yield response.json();
            return result;
        });
    }
    _fetchPost(path, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this._getFullPath(path), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = yield response.json();
            return result;
        });
    }
    _queryParamsToString(query) {
        let result = '';
        for (let key in query) {
            if (query[key] !== null) {
                result += `${key}=${query[key]}&`;
            }
        }
        return result.slice(0, (result.length - 1));
    }
}
exports.default = OneEntry;
//# sourceMappingURL=oneEntry.js.map