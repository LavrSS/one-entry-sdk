import OneEntry from "../base/oneEntry";
import { IForms } from "./formsInterfaces";
/**
 * Controllers for forms objects
 */
export default class FormsApi extends OneEntry implements IForms {
    constructor(url: string);
    /**
     * Get all forms.
     *
     * @returns Returns array for all objects of type FormEntity
     */
    getAllForms(): Promise<any>;
    /**
     * Get one form by form id.
     *
     * @returns Returns object of type FormEntity
     */
    getFormById(id: number): Promise<any>;
    /**
     * Get one form by form marker.
     *
     * @returns Returns object of type FormEntity
     */
    getFormByMarker(marker: string): Promise<any>;
}
