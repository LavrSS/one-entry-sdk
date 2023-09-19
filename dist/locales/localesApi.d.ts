import OneEntry from "../base/oneEntry";
import { ILocales } from "./localesInterfaces";
/**
 * Controllers for working with localizations (content language)
 */
export default class LocalesApi extends OneEntry implements ILocales {
    constructor(url: string);
    /**
     * Find all active language localization objects.
     *
     * @returns Returns an array of LocaleEntity objects
     */
    getLocales(): Promise<any>;
}
