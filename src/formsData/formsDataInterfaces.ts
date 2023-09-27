interface IFormsData {
    getFormsData():Promise<any>
    postFormsData(data:Array<IFormsPost>):Promise<any>
    getFormsDataByMarker(marker:string):Promise<any>
}

interface IFormData {
    marker?:string
    value?:string
    langCode?:string
}

interface IFormsPost {
    formIdentifier:string
    formData:IFormData
}

export {
    IFormsPost,
    IFormsData
}