import OneEntry from "../base/oneEntry";
import { IAdmins } from "./adminsInterfaces";
/**
 * Controllers for working with users - admins
 */
export default class AdminsApi extends OneEntry implements IAdmins {
    constructor(url: string);
    /**
     * Get all user objects - admins.
     *
     * @returns Returns all AdminEntity user objects
     */
    getAdminsInfo(): Promise<any>;
}
