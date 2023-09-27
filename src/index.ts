import ProductApi from './products/productsApi'
import PageApi from "./pages/pagesApi";
import ProductStatusesApi from "./product-statuses/productStatusesApi";
import TemplatesApi from "./templates/templatesApi";
import TemplatesPreviewApi from "./templates-preview/templatesPreviewApi";
import MarkersApi from "./markers/markersApi";
import AttributeSetApi from "./attribute-set/attributeSetApi";
import AdminsApi from "./admins/adminsApi"
import GeneralTypesApi from "./general-types/generalTypesApi"
import LocalesApi from "./locales/localesApi"
import MenusApi from "./menus/menusApi";
import ModulesApi from "./modules/modulesApi";
import FormsApi from "./forms/formsApi";
import FormsDataApi from "./formsData/formsDataApi";

interface IDefineApi {
    Admins:  AdminsApi
    AttributeSet: AttributeSetApi
    Forms: FormsApi
    FormsData: FormsDataApi
    GeneralTypes: GeneralTypesApi
    Locales: LocalesApi
    Markers: MarkersApi
    Menus: MenusApi
    Modules: ModulesApi
    Page: PageApi
    Product: ProductApi
    ProductStatus: ProductStatusesApi
    Templates: TemplatesApi
    TemplatesPreview: TemplatesPreviewApi
}

/**
 * Define API.
 * @param {string} url - URl of your project.
 * @returns {IDefineApi} - List of methods set.
 */
export function defineOneEntry(url:string):IDefineApi {
    const Product:ProductApi = new ProductApi(url)
    const Page:PageApi = new PageApi(url)
    const ProductStatus:ProductStatusesApi = new ProductStatusesApi(url)
    const Templates: TemplatesApi = new TemplatesApi(url)
    const TemplatesPreview: TemplatesPreviewApi = new TemplatesPreviewApi(url)
    const Markers: MarkersApi = new MarkersApi(url)
    const AttributeSet: AttributeSetApi = new AttributeSetApi(url)
    const Admins: AdminsApi = new AdminsApi(url)
    const GeneralTypes: GeneralTypesApi  = new GeneralTypesApi(url)
    const Locales: LocalesApi = new LocalesApi(url)
    const Menus: MenusApi = new MenusApi(url)
    const Modules: ModulesApi = new ModulesApi(url)
    const Forms: FormsApi = new FormsApi(url)
    const FormsData: FormsDataApi = new FormsDataApi(url)

    return {
        Admins,
        AttributeSet,
        Forms,
        FormsData,
        GeneralTypes,
        Locales,
        Markers,
        Modules,
        Menus,
        Page,
        Product,
        ProductStatus,
        Templates,
        TemplatesPreview
    }
}
