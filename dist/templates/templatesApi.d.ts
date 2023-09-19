import OneEntry from '../base/oneEntry';
import { ITemplatesApi } from './templatesInterfaces';
/**
 * Controllers for working with template objects
 */
export default class TemplatesPreviewApi extends OneEntry implements ITemplatesApi {
    constructor(url: string);
    /**
     * Get all template objects of a specific type.
     *
     * @returns Returns an array of product status objects
     */
    getTemplates(): Promise<any>;
    /**
     * Get all template objects grouped by types.
     *
     * @param {number} [id] - Status id
     *
     * @returns Returns an object GroupedTemplatesObject, which contains an array of template objects TemplateEntity
     */
    getAllTemplates(): Promise<any>;
    /**
     * Get one template object by id.
     *
     * @param {number} [id] - Product marker
     *
     * @returns Returns a TemplateEntity object
     */
    getTemplateById(id: number): Promise<any>;
    /**
     * Get a single template object by marker.
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns a TemplateEntity object
     */
    getTemplateByMarker(marker: string): Promise<any>;
}
