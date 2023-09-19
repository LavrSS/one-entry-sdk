import OneEntry from '../base/oneEntry'
import {IProductStatuses} from "./productStatusesInterfaces";

/**
 * Controllers for working with product statuses
 */
export default class ProductStatusesApi extends OneEntry implements IProductStatuses {
    constructor(url: string) {
        super(url)
        this._url += '/api/content/product-statuses'
    }

    /**
     * Search for all product status objects.
     *
     * @returns Returns an array of product status objects
     */
    public async getProductStatuses():Promise<any> {
        const result = await this._fetchGet('')
        return result
    }

    /**
     * Search for a product status object by identifier.
     *
     * @param {number} [id] - Status id
     *
     * @returns Returns a product status object
     */
    public async getProductStatusesById(id:number):Promise<any> {
        const result = await this._fetchGet(`/${id}`)
        return result
    }

    /**
     * Search for a product status object by its textual identifier (marker).
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns a product status object
     */
    public async getProductsByStatusMarker(marker:string):Promise<any> {
        const result = await this._fetchGet(`/marker/${marker}`)
        return result
    }

    /**
     * Check the existence of a textual identifier.
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns true if the textual identifier (marker) exists or false if it doesn't
     */
    public async validateMarker(marker:string):Promise<any> {
        const result = await this._fetchGet(`/marker-validation/${marker}`)
        return result
    }
}