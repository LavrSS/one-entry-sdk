interface IPageApi {
    getRootPages(): Promise<any>;
    getCatalogPages(limit: number, offset: number): Promise<any>;
    getPages(): Promise<any>;
    getPageById(id: number): Promise<any>;
    getPageByUrl(url: string): Promise<any>;
    getChildPagesByParentUrl(url: string): Promise<any>;
    getConfigPageByUrl(url: string): Promise<any>;
    searchPage(name: string, lang: string): Promise<any>;
}
interface IPageConfig {
    rowsPerPage: number;
    productsPerRow: number;
}
export { IPageApi, IPageConfig };
