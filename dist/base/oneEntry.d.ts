import { IProductsQuery } from '../products/productsInterfaces';
export default abstract class OneEntry {
    protected _url: string;
    constructor(url: string);
    protected _getFullPath(path: string): string;
    protected _fetchGet(path: string): Promise<any>;
    protected _fetchPost(path: string, data: object): Promise<any>;
    protected _queryParamsToString(query: IProductsQuery): string;
}
