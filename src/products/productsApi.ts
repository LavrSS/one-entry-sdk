import {IProductsQuery, IFilterParams, IProduct, IProductApi} from './productsInterfaces'
import OneEntry from '../base/oneEntry'
import {defineOneEntry} from "../index";

/**
 * Controllers for working with product pages
 */
export default class ProductApi extends OneEntry implements IProductApi{
    constructor(url:string) {
        super(url)
        this._url += '/api/content/products'
    }

    private _defaultQuery:IProductsQuery = {
        offset: 0,
        limit: 30,
        statusMarker: null,
        conditionValue: null,
        conditionMarker: null,
        attributeMarker: null,
        sortOrder: 'DESC',
        sortKey: 'id'
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
    public async getProducts(userQuery?: IProductsQuery):Promise<IProduct[]> {
        const query:IProductsQuery = {...this._defaultQuery, ...userQuery}

        const result = await this._fetchGet('/page/url/shop?' + this._queryParamsToString(query))
        return result.items
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
    public async getProductsEmptyPage(userQuery?:IProductsQuery):Promise<any> {
        const query:IProductsQuery = {...this._defaultQuery, ...userQuery}

        const result = await this._fetchGet('/empty-page?' + this._queryParamsToString(query))
        return result
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
    public async getProductsPageById(id:number, userQuery?:IProductsQuery):Promise<any> {
        const query:IProductsQuery = {...this._defaultQuery, ...userQuery}

        const result = await this._fetchGet(`/page/${id}?` + this._queryParamsToString(query))
        return result.items
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
    public async getProductsPageByUrl(url:string, userQuery?:IProductsQuery):Promise<IProduct[]> {
        const query:IProductsQuery = {...this._defaultQuery, ...userQuery}
        const result = await this._fetchGet(`/page/url/${url}?` + this._queryParamsToString(query))
        return result.items
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
    public async getRelatedProductsById(id:number, userQuery?:IProductsQuery):Promise<any> {
        const query:IProductsQuery = {...this._defaultQuery, ...userQuery}

        const result = await this._fetchGet(`/${id}/related?` + this._queryParamsToString(query))
        return result.items
    }

    /**
     * Retrieve one product object.
     *
     * @param {number} [id] - Product id.
     *
     * @returns {Promise<IProduct[]>} - Returns ContentIndexedProductDto object for the product.
     */
    public async getProductById(id:number):Promise<IProduct> {
        const result = await this._fetchGet(`/${id}`)
        return result
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
    public async filterProduct(data:Array<IFilterParams>, userQuery?:IProductsQuery):Promise<any> {
        const query:IProductsQuery = {...this._defaultQuery, ...userQuery}

        const result = await this._fetchPost(`conditions-filter?` + this._queryParamsToString(query),data)
        return result
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
    public async searchProduct(name:string, lang:string = 'en_US'):Promise<any> {
        const searchProducts = await this._fetchGet(`/quick/search?lang=${lang}&name=${name}`)
        const productsList:IProduct[] = []
        interface ISearchProduct {
            id: number
        }
        await Promise.all(
            searchProducts.map(async (product:ISearchProduct) => {
                await this.getProductById(product.id).then((result) => {
                    productsList.push(result)
                })
            })
        )
        return productsList
    }

    /**
     * Get all attributes of one Product.
     *
     * @param {number} [id] - Product id.
     *
     * @returns {Promise<IProduct[]>} - Returns array of set attributes.
     */
    public async getAttributesByProductId(id:number):Promise<any> {
        const product = await this.getProductById(id)
        return product.attributeValues
    }

}