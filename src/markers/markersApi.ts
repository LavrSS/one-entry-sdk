import OneEntry from '../base/oneEntry'
import {IMarkersApi} from "./markersInterfaces";

/**
 * Controllers for working with markers objects
 */
export default class TemplatesPreviewApi extends OneEntry implements IMarkersApi {
    constructor(url: string) {
        super(url)
        this._url += '/api/content/markers'
    }

    /**
     * Get one marker object by marker.
     *
     * @param {string} [marker] - Text identifier (marker) of the marker object
     *
     * @returns
     * Returns one MarkerEntity marker object
     */
    public async getMarker(marker:string):Promise<any> {
        const result = await this._fetchGet(`/marker/${marker}`)
        return result
    }

    /**
     * Get all marker objects.
     *
     * @param {number} [limit] - Parameter for limiting the selection of records, by default - 30
     *
     * @param {number} [offset] - Parameter for offset of records selection, default - 0
     *
     * @returns Returns an object ItemsWithTotal, where items is an array of MarkerEntity objects, total - the total number of markers found
     */
    public async getMarkers(limit:number = 30, offset:number = 0):Promise<any> {
        const result = await this._fetchGet(`?limit=${limit}&offset=${offset}`)
        return result
    }

    /**
     * Get one marker object.
     *
     * @param {number} [id] - Identifier of marker object
     *
     * @returns Returns one marker object MarkerEntity
     */
    public async getMarkersById(id:number):Promise<any> {
        const result = await this._fetchGet(`/${id}`)
        return result
    }
}