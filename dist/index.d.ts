import ProductApi from './products/productsApi';
import PageApi from "./pages/pagesApi";
import ProductStatusesApi from "./product-statuses/productStatusesApi";
import TemplatesApi from "./templates/templatesApi";
import TemplatesPreviewApi from "./templates-preview/templatesPreviewApi";
import MarkersApi from "./markers/markersApi";
import AttributeSetApi from "./attribute-set/attributeSetApi";
import AdminsApi from "./admins/adminsApi";
import GeneralTypesApi from "./general-types/generalTypesApi";
import LocalesApi from "./locales/localesApi";
import MenusApi from "./menus/menusApi";
import ModulesApi from "./modules/modulesApi";
interface IDefineApi {
    Product: ProductApi;
    Page: PageApi;
    ProductStatus: ProductStatusesApi;
    Templates: TemplatesApi;
    TemplatesPreview: TemplatesPreviewApi;
    Markers: MarkersApi;
    AttributeSet: AttributeSetApi;
    Admins: AdminsApi;
    GeneralTypes: GeneralTypesApi;
    Locales: LocalesApi;
    Menus: MenusApi;
    Modules: ModulesApi;
}
/**
 * Define API.
 * @param {string} url - URl of your project.
 * @returns {IDefineApi} - List of methods set.
 */
export declare function defineOneEntry(url: string): IDefineApi;
export {};
