interface ITemplatesApi {
    getTemplates():Promise<any>
    getAllTemplates():Promise<any>
    getTemplateById(id:number):Promise<any>
    getTemplateByMarker(marker:string):Promise<any>
}

export {
    ITemplatesApi
}