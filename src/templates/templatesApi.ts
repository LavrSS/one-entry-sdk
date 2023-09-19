import OneEntry from '../base/oneEntry'
import {ITemplatesApi} from './templatesInterfaces'

/**
 * Controllers for working with template objects
 */
export default class TemplatesPreviewApi extends OneEntry implements ITemplatesApi{
    constructor(url: string) {
        super(url)
        this._url += '/api/content/templates'
    }

    /**
     * Get all template objects of a specific type.
     *
     * @returns Returns an array of product status objects
     */
    public async getTemplates():Promise<any> {
        //TODO уточнить парметр type
        const result = await this._fetchGet('')
        return result
    }

    /**
     * Get all template objects grouped by types.
     *
     * @param {number} [id] - Status id
     *
     * @returns Returns an object GroupedTemplatesObject, which contains an array of template objects TemplateEntity
     */
    public async getAllTemplates():Promise<any> {
        const result = await this._fetchGet('/all')
        return result
    }

    /**
     * Get one template object by id.
     *
     * @param {number} [id] - Product marker
     *
     * @returns Returns a TemplateEntity object
     */
    public async getTemplateById(id:number):Promise<any> {
        const result = await this._fetchGet(`/${id}`)
        return result
    }

    /**
     * Get a single template object by marker.
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns a TemplateEntity object
     */
    public async getTemplateByMarker(marker:string):Promise<any> {
        const result = await this._fetchGet(`/marker/${marker}`)
        return result
    }
}