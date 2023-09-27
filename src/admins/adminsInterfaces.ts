interface IAdmins {
    getAdminsInfo():Promise<any>
}

interface IPosition {
    id:number
    position:string
    objectId:number
    objectType:string
    isLocked:boolean
    objectCategoryId:number
}

interface IAttributesSets {
    [key:string]: string
}

interface IAdminEntity {
    id:number
    updatedDate:string
    version:number
    identifier:string
    attributesSets:IAttributesSets
    attributeSetId:number
    login:string
    email?:string
    restorePasswordCode:number
    position:IPosition
    positionId:number
    permissions:Record<string, boolean>
    selectedLanguage:string
    selectedContentLanguage:string
    selectedUITheme:string
}

export {
    IAdmins,
    IAdminEntity
}