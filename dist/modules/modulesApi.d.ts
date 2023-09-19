import OneEntry from "../base/oneEntry";
import { IModules } from "./modulesInterfaces";
/**
 * Controllers for working with application modules
 */
export default class ModulesApi extends OneEntry implements IModules {
    constructor(url: string);
    /**
     * Get all modules.
     *
     * @returns Returns BaseModuleDto objects or an empty array [] if there is no data
     */
    getAllModules(): Promise<any>;
}
