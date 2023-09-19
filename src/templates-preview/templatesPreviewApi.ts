import OneEntry from "../base/oneEntry";
import {ITemplatesPreview} from "./templatesPreviewInterfaces";

/**
 * Controllers for working with template objects for preview
 */
export default class PageApi extends OneEntry implements ITemplatesPreview{
    constructor(url: string) {
        super(url)
        this._url += '/api/content/template-previews'
    }

    /**
     * Get all template objects.
     *
     * @returns Returns all TemplatePreviewsEntity template objects
     */
    public async getTemplatesPreview():Promise<any> {
        const result = await this._fetchGet('')
        return result
    }

    /**
     * Get one template object by id.
     *
     * @param {number} [id] - Product marker
     *
     * @returns Returns a TemplatePreviewsEntity object
     */
    public async getTemplatesPreviewById(id:number):Promise<any> {
        const result = await this._fetchGet(`/${id}`)
        return result
    }

    /**
     * Get one template object by marker.
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns a TemplatePreviewsEntity object
     */
    public async getTemplatesPreviewByMarker(marker:string):Promise<any> {
        const result = await this._fetchGet(`/marker/${marker}`)
        return result
    }
}