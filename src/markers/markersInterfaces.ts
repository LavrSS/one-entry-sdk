interface IMarkersApi {
    getMarker(marker:string):Promise<any>
    getMarkers(limit:number, offset:number):Promise<any>
    getMarkersById(id:number):Promise<any>
}

export {
    IMarkersApi
}