import OneEntry from "../base/oneEntry";
import { IGeneralTypes } from "./generalTypesInterfaces";
/**
 * Controllers for working with types
 */
export default class GeneralTypesApi extends OneEntry implements IGeneralTypes {
    constructor(url: string);
    /**
     * Get all types.
     *
     * @returns Returns all objects of type GeneralTypeEntity
     */
    getAllTypes(): Promise<any>;
}
