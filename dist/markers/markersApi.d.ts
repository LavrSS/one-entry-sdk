import OneEntry from '../base/oneEntry';
import { IMarkersApi } from "./markersInterfaces";
/**
 * Controllers for working with markers objects
 */
export default class TemplatesPreviewApi extends OneEntry implements IMarkersApi {
    constructor(url: string);
    /**
     * Get one marker object by marker.
     *
     * @param {string} [marker] - Text identifier (marker) of the marker object
     *
     * @returns
     * Returns one MarkerEntity marker object
     */
    getMarker(marker: string): Promise<any>;
    /**
     * Get all marker objects.
     *
     * @param {number} [limit] - Parameter for limiting the selection of records, by default - 30
     *
     * @param {number} [offset] - Parameter for offset of records selection, default - 0
     *
     * @returns Returns an object ItemsWithTotal, where items is an array of MarkerEntity objects, total - the total number of markers found
     */
    getMarkers(limit?: number, offset?: number): Promise<any>;
    /**
     * Get one marker object.
     *
     * @param {number} [id] - Identifier of marker object
     *
     * @returns Returns one marker object MarkerEntity
     */
    getMarkersById(id: number): Promise<any>;
}
