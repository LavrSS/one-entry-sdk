import OneEntry from "../base/oneEntry";
import {IModules} from "./modulesInterfaces";

/**
 * Controllers for working with application modules
 */
export default class ModulesApi extends OneEntry implements IModules{
    constructor(url: string) {
        super(url)
        this._url += '/api/content/modules'
    }

    /**
     * Get all modules.
     *
     * @returns Returns BaseModuleDto objects or an empty array [] if there is no data
     */
    public async getAllModules():Promise<any> {
        const result = await this._fetchGet('')
        return result
    }

}