import OneEntry from "../base/oneEntry";
import {IPageApi, IPageConfig} from "./pagesInterfaces";

/**
 * Controllers for working with page objects, including catalog pages
 */
export default class PageApi extends OneEntry implements IPageApi{
    constructor(url: string) {
        super(url)
        this._url += '/api/content/pages'
    }

    /**
     * Get all top-level page objects.
     *
     * @returns Returns all created pages without parents as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    public async getRootPages():Promise<any> {
        const result = await this._fetchGet('/root')
        return result
    }

    /**
     * Get all page objects with product information as an array.
     *
     * @param {number} [limit] - Optional parameter for pagination, default is 30
     *
     * @param {number} [offset] - Optional parameter for pagination, default is 0
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    public async getCatalogPages(limit:number = 30, offset:number = 0):Promise<any> {
        //TODO Query parameters
        const result = await this._fetchGet('/catalog')
        return result
    }

    /**
     * Get all page objects with product information as an array.
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    public async getPages():Promise<any> {
        const result = await this._fetchGet('')
        return result
    }

    /**
     * Get page object with information about forms, blocks, menus, linked to the page.
     *
     * @param {number} [id] - Page object identifier
     *
     * @returns Returns page object (DTO depends on the type of page being returned)
     */
    public async getPageById(id:number):Promise<any> {
        const result = await this._fetchGet(`/${id}`)
        return result
    }

    /**
     * Get page object with information about forms, blocks, menus, linked to the page by URL.
     *
     * @param {string} [url] - Page URL
     *
     * @returns Returns page object (DTO depends on the type of page being returned)
     */
    public async getPageByUrl(url:string):Promise<any> {
        const result = await this._fetchGet(`/url/${url}`)
        return result
    }

    /**
     * Get child pages object with information as an array.
     *
     * @param {string} [url] - Page URL
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data) for the selected parent
     */
    public async getChildPagesByParentUrl(url:string):Promise<any> {
        const result = await this._fetchGet(`/${url}/children`)
        return result
    }

    /**
     * Get settings for the page.
     *
     * @param {string} [url] - Page URL
     *
     * @returns Returns a ConfigPageDto object with page display settings
     */
    public async getConfigPageByUrl(url:string):Promise<IPageConfig> {
        const result = await this._fetchGet(`/${url}/config`)
        return result
    }

    /**
     * Quick search for page objects with limited output.
     *
     * @param {string} [name] - Text for searching page objects (search is performed on the title field of the localizeInfos object with the language taken into account)
     *
     * @param {string} [lang] - Language code. Example : en_US
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    public async searchPage(name:string, lang:string = 'en_US'):Promise<any> {
        const result = await this._fetchGet(`/quick/search?lang=${lang}&name=${name}`)
        return result
    }

}
