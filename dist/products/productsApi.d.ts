import { IProductsQuery, IFilterParams, IProduct, IProductApi } from './productsInterfaces';
import OneEntry from '../base/oneEntry';
/**
 * Controllers for working with product pages
 */
export default class ProductApi extends OneEntry implements IProductApi {
    constructor(url: string);
    private _defaultQuery;
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
    getProducts(userQuery?: IProductsQuery): Promise<IProduct[]>;
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
    getProductsEmptyPage(userQuery?: IProductsQuery): Promise<any>;
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
    getProductsPageById(id: number, userQuery?: IProductsQuery): Promise<any>;
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
    getProductsPageByUrl(url: string, userQuery?: IProductsQuery): Promise<IProduct[]>;
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
    getRelatedProductsById(id: number, userQuery?: IProductsQuery): Promise<any>;
    /**
     * Retrieve one product object.
     *
     * @param {number} [id] - Product id.
     *
     * @returns {Promise<IProduct[]>} - Returns ContentIndexedProductDto object for the product.
     */
    getProductById(id: number): Promise<IProduct>;
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
    filterProduct(data: Array<IFilterParams>, userQuery?: IProductsQuery): Promise<any>;
    /**
     * Quick search for product page objects with limited output.
     *
     * @param {string} [name] - Text to search product page objects (search is based on the title field of the localizeInfos object with language consideration)
     *
     * @param {string} [lang] - Language code
     *
     * @returns {Promise<IProduct[]>} - Returns array of ContentIndexedProductDto object for the product.
     */
    searchProduct(name: string, lang?: string): Promise<any>;
    /**
     * Get all attributes of one Product.
     *
     * @param {number} [id] - Product id.
     *
     * @returns {Promise<IProduct[]>} - Returns array of set attributes.
     */
    getAttributesByProductId(id: number): Promise<any>;
}
