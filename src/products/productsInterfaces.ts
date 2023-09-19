interface IProductApi {
    getProducts(userQuery?: IProductsQuery):Promise<IProduct[]>
    getProductsEmptyPage(userQuery?:IProductsQuery):Promise<any>
    getProductsPageById(id:number, userQuery?:IProductsQuery):Promise<any>
    getProductsPageByUrl(url:string, userQuery?:IProductsQuery):Promise<any>
    getRelatedProductsById(id:number, userQuery?:IProductsQuery):Promise<any>
    getProductById(id:number):Promise<any>
    filterProduct(data:Array<IFilterParams>, userQuery?:IProductsQuery):Promise<any>
    searchProduct(name:string, lang:string):Promise<any>
    getAttributesByProductId(id:number):Promise<any>
}
interface IProduct {
    attributeSetId:number | null
    attributeValues: object[] | null
    id:number
    isSync:number
    isVisible:boolean
    localizeInfos:object
    position:number
    price?:number
    relatedIds:number[]
    shortDescTemplateIdentifier:string | number | null
    statusId:number | null
    templateIdentifier:string | number | null

}
interface IProductsQuery {
    offset?:number
    limit?:number
    statusMarker?:string | null
    conditionValue?:string | null
    conditionMarker?:string | null
    attributeMarker?:string | null
    sortOrder?:string
    sortKey?:string
    [key:string]: string | number | null
}
interface IFilterParams {
    attributeMarker:string,
    conditionMarker:string,
    conditionValue:number,
    pageId?:number
}
export {
    IFilterParams,
    IProductsQuery,
    IProduct,
    IProductApi
}