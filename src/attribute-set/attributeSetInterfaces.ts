interface IAttributeSet {
    getAttributeSetById(id:number):Promise<any>
    getAttributeSetByMarker(url:string):Promise<any>
}


export {
    IAttributeSet
}