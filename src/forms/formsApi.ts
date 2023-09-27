import OneEntry from "../base/oneEntry";
import {IForms} from "./formsInterfaces";

/**
 * Controllers for forms objects
 */
export default class FormsApi extends OneEntry implements IForms {
    constructor(url: string) {
        super(url)
        this._url += '/api/content/forms'
    }

    /**
     * Get all forms.
     *
     * @returns Returns array for all objects of type FormEntity
     */
    public async getAllForms():Promise<any> {
        const result = await this._fetchGet('')
        return result
    }

    /**
     * Get one form by form id.
     *
     * @returns Returns object of type FormEntity
     */
    public async getFormById(id:number):Promise<any> {
        const result = await this._fetchGet(`/${id}`)
        return result
    }

    /**
     * Get one form by form marker.
     *
     * @returns Returns object of type FormEntity
     */
    public async getFormByMarker(marker:string):Promise<any> {
        const result = await this._fetchGet(`/marker/${marker}`)
        return result
    }
}