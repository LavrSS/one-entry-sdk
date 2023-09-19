import OneEntry from '../base/oneEntry';
import { IProductStatuses } from "./productStatusesInterfaces";
/**
 * Controllers for working with product statuses
 */
export default class ProductStatusesApi extends OneEntry implements IProductStatuses {
    constructor(url: string);
    /**
     * Search for all product status objects.
     *
     * @returns Returns an array of product status objects
     */
    getProductStatuses(): Promise<any>;
    /**
     * Search for a product status object by identifier.
     *
     * @param {number} [id] - Status id
     *
     * @returns Returns a product status object
     */
    getProductStatusesById(id: number): Promise<any>;
    /**
     * Search for a product status object by its textual identifier (marker).
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns a product status object
     */
    getProductsByStatusMarker(marker: string): Promise<any>;
    /**
     * Check the existence of a textual identifier.
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns true if the textual identifier (marker) exists or false if it doesn't
     */
    validateMarker(marker: string): Promise<any>;
}
