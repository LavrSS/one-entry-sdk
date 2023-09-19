import OneEntry from "../base/oneEntry";
import {ILocales} from "./localesInterfaces";

/**
 * Controllers for working with localizations (content language)
 */
export default class LocalesApi extends OneEntry implements ILocales{
    constructor(url: string) {
        super(url)
        this._url += '/api/content/locales'
    }

    /**
     * Find all active language localization objects.
     *
     * @returns Returns an array of LocaleEntity objects
     */
    public async getLocales():Promise<any> {
        const result = await this._fetchGet('/active/all')
        return result
    }

}