import {IProductsQuery} from '../products/productsInterfaces'

export default abstract class OneEntry {
    protected _url:string

    constructor(url:string) {
        this._url = url
    }

    protected _getFullPath(path:string):string {
        return (this._url + path)
    }

    protected async _fetchGet(path:string):Promise<any> {
        const response = await fetch(this._getFullPath(path), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const result = await response.json()
        return result
    }

    protected async _fetchPost(path:string, data:object):Promise<any> {
        const response = await fetch(this._getFullPath(path), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return result
    }

    protected _queryParamsToString(query:IProductsQuery):string {
        let result:string = ''
        for (let key in query) {
            if (query[key] !== null) {
                result += `${key}=${query[key]}&`
            }
        }
        return result.slice(0, (result.length - 1))
    }
}