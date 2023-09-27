import OneEntry from '../base/oneEntry'
import {IFormsPost, IFormsData} from './formsDataInterfaces'
/**
 * Controllers for working with form data
 */
export default class FormsDataApi extends OneEntry implements IFormsData{
    constructor(url: string) {
        super(url)
        this._url += '/api/content/form-data'
    }

    /**
     * Get all forms data.
     *
     * @returns Returns array for all objects of type CreateFormDataDto
     */
    public async getFormsData():Promise<any> {
        const result = await this._fetchGet('')
        return result
    }

    /**
     * Find all product page objects with pagination and multiple filtering.
     *
     * @param {object} [data] - Request body.
     * Example Value:
     * {
     *   "formIdentifier": "my-form",
     *   "formData": [
     *     {
     *       "marker": "naimenovanie_1",
     *       "value": "Наименование",
     *       "langCode": "ru_RU"
     *     }
     *   ]
     * }
     *
     * @returns - Returns created CreateFormDataDto objects.
     */
    public async postFormsData(data:Array<IFormsPost>):Promise<any> {
        const result = await this._fetchPost('',data)
        return result
    }

    /**
     * Get one object of form data by marker.
     *
     * @param {string} [marker] - Marker of the form data
     *
     * @returns Returns array of object FormDataEntity
     */
    public async getFormsDataByMarker(marker:string):Promise<any> {
        const result = await this._fetchGet(`/${marker}`)
        return result
    }
}