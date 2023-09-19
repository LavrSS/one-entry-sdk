import OneEntry from "../base/oneEntry";
import { IMenus } from "./menusInterfaces";
/**
 * Controllers for working with menu objects
 */
export default class MenusApi extends OneEntry implements IMenus {
    constructor(url: string);
    /**
     * Get pages includes in menu by marker.
     *
     * @param {string} [marker] - Menu marker
     *
     * @returns Returns a single menu object as a ContentMenuDto object with included pages
     */
    getMenusByMarker(marker: string): Promise<any>;
}
