import OneEntry from "../base/oneEntry";
import {IGeneralTypes} from "./generalTypesInterfaces";

/**
 * Controllers for working with types
 */
export default class GeneralTypesApi extends OneEntry implements IGeneralTypes {
    constructor(url: string) {
        super(url)
        this._url += '/api/content/general-types'
    }

    /**
     * Get all types.
     *
     * @returns Returns all objects of type GeneralTypeEntity
     */
    public async getAllTypes():Promise<any> {
        const result = await this._fetchGet('')
        return result
    }

}