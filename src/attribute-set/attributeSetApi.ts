import OneEntry from "../base/oneEntry";
import {IAttributeSet} from "./attributeSetInterfaces";

/**
 * Controllers for working with attribute sets
 */
export default class AttributeSetApi extends OneEntry implements IAttributeSet{
    constructor(url: string) {
        super(url)
        this._url += '/api/content/attributes-sets'
    }

    /**
     * Get one attributes set object.
     *
     * @param {number} [id] - Identifier of the attributes set object
     *
     * @returns Returns one attributes set object
     */
    public async getAttributeSetById(id:number):Promise<any> {
        const result = await this._fetchGet(`/${id}`)
        return result
    }

    /**
     * Get one attributes set object by marker.
     *
     * @param {string} [marker] - Marker of the attributes set object
     *
     * @returns Returns one attributes set object
     */
    public async getAttributeSetByMarker(marker:string):Promise<any> {
        const result = await this._fetchGet(`marker/${marker}`)
        return result
    }
}