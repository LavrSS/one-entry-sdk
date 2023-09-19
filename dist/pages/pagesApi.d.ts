import OneEntry from "../base/oneEntry";
import { IPageApi, IPageConfig } from "./pagesInterfaces";
/**
 * Controllers for working with page objects, including catalog pages
 */
export default class PageApi extends OneEntry implements IPageApi {
    constructor(url: string);
    /**
     * Get all top-level page objects.
     *
     * @returns Returns all created pages without parents as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    getRootPages(): Promise<any>;
    /**
     * Get all page objects with product information as an array.
     *
     * @param {number} [limit] - Optional parameter for pagination, default is 30
     *
     * @param {number} [offset] - Optional parameter for pagination, default is 0
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    getCatalogPages(limit?: number, offset?: number): Promise<any>;
    /**
     * Get all page objects with product information as an array.
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    getPages(): Promise<any>;
    /**
     * Get page object with information about forms, blocks, menus, linked to the page.
     *
     * @param {number} [id] - Page object identifier
     *
     * @returns Returns page object (DTO depends on the type of page being returned)
     */
    getPageById(id: number): Promise<any>;
    /**
     * Get page object with information about forms, blocks, menus, linked to the page by URL.
     *
     * @param {string} [url] - Page URL
     *
     * @returns Returns page object (DTO depends on the type of page being returned)
     */
    getPageByUrl(url: string): Promise<any>;
    /**
     * Get child pages object with information as an array.
     *
     * @param {string} [url] - Page URL
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data) for the selected parent
     */
    getChildPagesByParentUrl(url: string): Promise<any>;
    /**
     * Get settings for the page.
     *
     * @param {string} [url] - Page URL
     *
     * @returns Returns a ConfigPageDto object with page display settings
     */
    getConfigPageByUrl(url: string): Promise<IPageConfig>;
    /**
     * Quick search for page objects with limited output.
     *
     * @param {string} [name] - Text for searching page objects (search is performed on the title field of the localizeInfos object with the language taken into account)
     *
     * @param {string} [lang] - Language code. Example : en_US
     *
     * @returns Returns all created pages as an array of ContentIndexedPageDto objects or an empty array [] (if there is no data)
     */
    searchPage(name: string, lang?: string): Promise<any>;
}
