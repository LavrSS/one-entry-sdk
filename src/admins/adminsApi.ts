import OneEntry from "../base/oneEntry";
import {IAdmins} from "./adminsInterfaces";

/**
 * Controllers for working with users - admins
 */
export default class AdminsApi extends OneEntry implements IAdmins{
    constructor(url: string) {
        super(url)
        this._url += '/api/content/admins'
    }

    /**
     * Get all user objects - admins.
     *
     * @returns Returns all AdminEntity user objects
     */
    public async getAdminsInfo():Promise<any> {
        const result = await this._fetchGet('')
        return result
    }

}