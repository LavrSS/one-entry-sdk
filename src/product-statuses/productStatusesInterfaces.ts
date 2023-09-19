interface IProductStatuses {
    getProductStatuses():Promise<any>
    getProductStatusesById(id:number):Promise<any>
    getProductsByStatusMarker(marker:string):Promise<any>
    validateMarker(marker:string):Promise<any>
}

export {
    IProductStatuses
}