interface IForms {
    getAllForms():Promise<any>
    getFormById(id:number):Promise<any>
    getFormByMarker(marker:string):Promise<any>
}

export {
    IForms
}