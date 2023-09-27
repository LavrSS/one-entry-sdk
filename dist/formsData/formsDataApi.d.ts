import OneEntry from '../base/oneEntry';
import { IFormsPost, IFormsData } from './formsDataInterfaces';
/**
 * Controllers for working with form data
 */
export default class FormsDataApi extends OneEntry implements IFormsData {
    constructor(url: string);
    /**
     * Get all forms data.
     *
     * @returns Returns array for all objects of type CreateFormDataDto
     */
    getFormsData(): Promise<any>;
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
    postFormsData(data: Array<IFormsPost>): Promise<any>;
    /**
     * Get one object of form data by marker.
     *
     * @param {string} [marker] - Marker of the form data
     *
     * @returns Returns array of object FormDataEntity
     */
    getFormsDataByMarker(marker: string): Promise<any>;
}
