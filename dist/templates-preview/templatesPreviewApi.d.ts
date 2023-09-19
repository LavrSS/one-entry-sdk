import OneEntry from "../base/oneEntry";
import { ITemplatesPreview } from "./templatesPreviewInterfaces";
/**
 * Controllers for working with template objects for preview
 */
export default class PageApi extends OneEntry implements ITemplatesPreview {
    constructor(url: string);
    /**
     * Get all template objects.
     *
     * @returns Returns all TemplatePreviewsEntity template objects
     */
    getTemplatesPreview(): Promise<any>;
    /**
     * Get one template object by id.
     *
     * @param {number} [id] - Product marker
     *
     * @returns Returns a TemplatePreviewsEntity object
     */
    getTemplatesPreviewById(id: number): Promise<any>;
    /**
     * Get one template object by marker.
     *
     * @param {string} [marker] - Product marker
     *
     * @returns Returns a TemplatePreviewsEntity object
     */
    getTemplatesPreviewByMarker(marker: string): Promise<any>;
}
