"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineOneEntry = void 0;
const productsApi_1 = require("./products/productsApi");
const pagesApi_1 = require("./pages/pagesApi");
const productStatusesApi_1 = require("./product-statuses/productStatusesApi");
const templatesApi_1 = require("./templates/templatesApi");
const templatesPreviewApi_1 = require("./templates-preview/templatesPreviewApi");
const markersApi_1 = require("./markers/markersApi");
const attributeSetApi_1 = require("./attribute-set/attributeSetApi");
const adminsApi_1 = require("./admins/adminsApi");
const generalTypesApi_1 = require("./general-types/generalTypesApi");
const localesApi_1 = require("./locales/localesApi");
const menusApi_1 = require("./menus/menusApi");
const modulesApi_1 = require("./modules/modulesApi");
const formsApi_1 = require("./forms/formsApi");
const formsDataApi_1 = require("./formsData/formsDataApi");
/**
 * Define API.
 * @param {string} url - URl of your project.
 * @returns {IDefineApi} - List of methods set.
 */
function defineOneEntry(url) {
    const Product = new productsApi_1.default(url);
    const Page = new pagesApi_1.default(url);
    const ProductStatus = new productStatusesApi_1.default(url);
    const Templates = new templatesApi_1.default(url);
    const TemplatesPreview = new templatesPreviewApi_1.default(url);
    const Markers = new markersApi_1.default(url);
    const AttributeSet = new attributeSetApi_1.default(url);
    const Admins = new adminsApi_1.default(url);
    const GeneralTypes = new generalTypesApi_1.default(url);
    const Locales = new localesApi_1.default(url);
    const Menus = new menusApi_1.default(url);
    const Modules = new modulesApi_1.default(url);
    const Forms = new formsApi_1.default(url);
    const FormsData = new formsDataApi_1.default(url);
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
    };
}
exports.defineOneEntry = defineOneEntry;
//# sourceMappingURL=index.js.map