import OneEntry from "../base/oneEntry";
import { IAttributeSet } from "./attributeSetInterfaces";
/**
 * Controllers for working with attribute sets
 */
export default class AttributeSetApi extends OneEntry implements IAttributeSet {
    constructor(url: string);
    /**
     * Get one attributes set object.
     *
     * @param {number} [id] - Identifier of the attributes set object
     *
     * @returns Returns one attributes set object
     */
    getAttributeSetById(id: number): Promise<any>;
    /**
     * Get one attributes set object by marker.
     *
     * @param {string} [marker] - Marker of the attributes set object
     *
     * @returns Returns one attributes set object
     */
    getAttributeSetByMarker(marker: string): Promise<any>;
}
