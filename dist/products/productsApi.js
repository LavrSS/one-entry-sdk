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
 * Controllers for working with product pages
 */
class ProductApi extends oneEntry_1.default {
    constructor(url) {
        super(url);
        this._defaultQuery = {
            offset: 0,
            limit: 30,
            statusMarker: null,
            conditionValue: null,
            conditionMarker: null,
            attributeMarker: null,
            sortOrder: 'DESC',
            sortKey: 'id'
        };
        this._url += '/api/content/products';
    }
    /**
     * Search for all product page objects with pagination and filtering.
     *
     * @param {IProductsQuery} [userQuery] - Optional set query parameters.
     * @param {number} [userQuery.limit] - Optional parameter for pagination, default is 0
     *
     * @param {number} [userQuery.offset] - Optional parameter for pagination, default is 30
     *
     * @param {string} [userQuery.statusMarker] - Optional identifier of the product page status
     *
     * @param {string} [userQuery.conditionValue] - Optional value that is being searched
     *
     * @param {string} [userQuery.conditionMarker] - Optional identifier of the filter condition by which values are filtered
     *
     * @param {string} [userQuery.attributeMarker] - Optional text identifier of the indexed attribute by which values are filtered
     *
     * @param {string} [userQuery.sortOrder] - Optional sorting order DESC | ASC
     *
     * @param {string} [userQuery.sortKey] - Optional field to sort by
     *
     * @returns {Promise<IProduct[]>} - List of products.
     */
    getProducts(userQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = Object.assign(Object.assign({}, this._defaultQuery), userQuery);
            const result = yield this._fetchGet('/page/url/shop?' + this._queryParamsToString(query));
            return result.items;
        });
    }
    /**
     * Search for all product page objects with pagination that do not have a category.
     *
     * @param {IProductsQuery} [userQuery] - Optional set query parameters.
     * @param {number} [userQuery.limit] - Optional parameter for pagination, default is 0
     *
     * @param {number} [userQuery.offset] - Optional parameter for pagination, default is 30
     *
     * @param {string} [userQuery.statusMarker] - Optional identifier of the product page status
     *
     * @param {string} [userQuery.conditionValue] - Optional value that is being searched
     *
     * @param {string} [userQuery.conditionMarker] - Optional identifier of the filter condition by which values are filtered
     *
     * @param {string} [userQuery.attributeMarker] - Optional text identifier of the indexed attribute by which values are filtered
     *
     * @param {string} [userQuery.sortOrder] - Optional sorting order DESC | ASC
     *
     * @param {string} [userQuery.sortKey] - Optional field to sort by
     *
     * @returns {Promise<IProduct[]>} - Returns array of items, where item - ContentIndexedProductDto objects.
     */
    getProductsEmptyPage(userQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = Object.assign(Object.assign({}, this._defaultQuery), userQuery);
            const result = yield this._fetchGet('/empty-page?' + this._queryParamsToString(query));
            return result;
        });
    }
    /**
     * Search for all product page objects with pagination for the selected category.
     *
     * @param {number} [id] - Page identifier.
     *
     * @param {IProductsQuery} [userQuery] - Optional set query parameters.
     * @param {number} [userQuery.limit] - Optional parameter for pagination, default is 0
     *
     * @param {number} [userQuery.offset] - Optional parameter for pagination, default is 30
     *
     * @param {string} [userQuery.statusMarker] - Optional identifier of the product page status
     *
     * @param {string} [userQuery.conditionValue] - Optional value that is being searched
     *
     * @param {string} [userQuery.conditionMarker] - Optional identifier of the filter condition by which values are filtered
     *
     * @param {string} [userQuery.attributeMarker] - Optional text identifier of the indexed attribute by which values are filtered
     *
     * @param {string} [userQuery.sortOrder] - Optional sorting order DESC | ASC
     *
     * @param {string} [userQuery.sortKey] - Optional field to sort by
     *
     * @returns {Promise<IProduct[]>} - Returns array of items, where item - ContentIndexedProductDto objects.
     */
    getProductsPageById(id, userQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = Object.assign(Object.assign({}, this._defaultQuery), userQuery);
            const result = yield this._fetchGet(`/page/${id}?` + this._queryParamsToString(query));
            return result.items;
        });
    }
    /**
     * Search for all product page objects with pagination for the selected category (by its URL).
     *
     * @param {string} [url] - URL of the category page.
     *
     * @param {IProductsQuery} [userQuery] - Optional set query parameters.
     * @param {number} [userQuery.limit] - Optional parameter for pagination, default is 0
     *
     * @param {number} [userQuery.offset] - Optional parameter for pagination, default is 30
     *
     * @param {string} [userQuery.statusMarker] - Optional identifier of the product page status
     *
     * @param {string} [userQuery.conditionValue] - Optional value that is being searched
     *
     * @param {string} [userQuery.conditionMarker] - Optional identifier of the filter condition by which values are filtered
     *
     * @param {string} [userQuery.attributeMarker] - Optional text identifier of the indexed attribute by which values are filtered
     *
     * @param {string} [userQuery.sortOrder] - Optional sorting order DESC | ASC
     *
     * @param {string} [userQuery.sortKey] - Optional field to sort by
     *
     * @returns {Promise<IProduct[]>} - Returns array of items, where item - ContentIndexedProductDto objects.
     */
    getProductsPageByUrl(url, userQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = Object.assign(Object.assign({}, this._defaultQuery), userQuery);
            const result = yield this._fetchGet(`/page/url/${url}?` + this._queryParamsToString(query));
            return result.items;
        });
    }
    /**
     * Find all related product page objects.
     *
     * @param {number} [id] - Product page identifier for which to find relationship.
     *
     * @param {IProductsQuery} [userQuery] - Optional set query parameters.
     * @param {number} [userQuery.limit] - Optional parameter for pagination, default is 0
     *
     * @param {number} [userQuery.offset] - Optional parameter for pagination, default is 30
     *
     * @param {string} [userQuery.sortOrder] - Optional sorting order DESC | ASC
     *
     * @param {string} [userQuery.sortKey] - Optional field to sort by
     *
     * @returns {Promise<IProduct[]>} - Returns array of items, where item - ContentIndexedProductDto objects.
     */
    getRelatedProductsById(id, userQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = Object.assign(Object.assign({}, this._defaultQuery), userQuery);
            const result = yield this._fetchGet(`/${id}/related?` + this._queryParamsToString(query));
            return result.items;
        });
    }
    /**
     * Retrieve one product object.
     *
     * @param {number} [id] - Product id.
     *
     * @returns {Promise<IProduct[]>} - Returns ContentIndexedProductDto object for the product.
     */
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._fetchGet(`/${id}`);
            return result;
        });
    }
    /**
     * Find all product page objects with pagination and multiple filtering.
     *
     * @param {array} [data] - Request body.
     * Example Value:
     * [
     *   {
     *     "attributeMarker": "price",
     *     "conditionMarker": "mth",
     *     "conditionValue": 1,
     *     "pageId": 0
     *   },
     *   {
     *     "attributeMarker": "price",
     *     "conditionMarker": "lth",
     *     "conditionValue": 3,
     *     "pageId": 0
     *   }
     * ]
     *
     *
     * @param {IProductsQuery} [userQuery] - Optional set query parameters.
     * @param {number} [userQuery.limit] - Optional parameter for pagination, default is 0
     *
     * @param {number} [userQuery.offset] - Optional parameter for pagination, default is 30
     *
     * @param {string} [userQuery.sortOrder] - Optional sorting order DESC | ASC
     *
     * @param {string} [userQuery.sortKey] - Optional field to sort by
     *
     * @returns {Promise<IProduct[]>} - Returns array of items, where item - ContentIndexedProductDto objects.
     */
    filterProduct(data, userQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = Object.assign(Object.assign({}, this._defaultQuery), userQuery);
            const result = yield this._fetchPost(`conditions-filter?` + this._queryParamsToString(query), data);
            return result;
        });
    }
    /**
     * Quick search for product page objects with limited output.
     *
     * @param {string} [name] - Text to search product page objects (search is based on the title field of the localizeInfos object with language consideration)
     *
     * @param {string} [lang] - Language code
     *
     * @returns {Promise<IProduct[]>} - Returns array of ContentIndexedProductDto object for the product.
     */
    searchProduct(name, lang = 'en_US') {
        return __awaiter(this, void 0, void 0, function* () {
            const searchProducts = yield this._fetchGet(`/quick/search?lang=${lang}&name=${name}`);
            const productsList = [];
            yield Promise.all(searchProducts.map((product) => __awaiter(this, void 0, void 0, function* () {
                yield this.getProductById(product.id).then((result) => {
                    productsList.push(result);
                });
            })));
            return productsList;
        });
    }
    /**
     * Get all attributes of one Product.
     *
     * @param {number} [id] - Product id.
     *
     * @returns {Promise<IProduct[]>} - Returns array of set attributes.
     */
    getAttributesByProductId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.getProductById(id);
            return product.attributeValues;
        });
    }
}
exports.default = ProductApi;
//# sourceMappingURL=productsApi.js.map