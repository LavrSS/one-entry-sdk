

# OneEntry SDK

OneEntry SDK is an SDK that provides an easy way to interact with the OneEntry headless CMS API.

## Installation

To install the OneEntry SDK in your project, run the following command:

>>npm install one-entry

## Usage

To use the OneEntry SDK in your project, import the defineOneEntry function:

>>import { defineOneEntry } from 'one-entry';

>const { 
>        Product,
>        Page,
>        ProductStatus,
>        Templates,
>        TemplatesPreview,
>        Markers,
>        AttributeSet,
>        Admins,
>        GeneralTypes,
>        Locales,
>        Menus,
>        Modules 
> } = defineOneEntry('your-url');
> 
> Or
> 
> const api = defineOneEntry('your-url')

## Classes and Methods

The OneEntry SDK contains two classes: ProductApi and PageApi.

### AdminsApi
const { Admins } = defineOneEntry('your-url');
#### getAdminsInfo
>>const value = await getAdminsInfo()
> 
>This method retrieves all user objects of type admin from the API. It returns a Promise that resolves to an array of AdminEntity objects.

### AttributeSetApi
const { AttributeSet } = defineOneEntry('your-url');
#### getAttributeSetById
>>const value = await getAttributeSetById(1)
>
>This method retrieves a single attribute set object based on its identifier (id) from the API. It returns a Promise that resolves to the attribute set object.
#### getAttributeSetByMarker
>>const value = await getAttributeSetByMarker('marker')
>
>This method retrieves a single attribute set object based on its marker (marker) from the API. It returns a Promise that resolves to the attribute set object.

### GeneralTypesApi
const { GeneralTypes } = defineOneEntry('your-url');
#### getAllTypes
>>const value = await getAllTypes()
>
>This method retrieves all objects of type GeneralTypeEntity from the API. It returns a Promise that resolves to an array of GeneralTypeEntity objects.

### LocalesApi
const { Locales } = defineOneEntry('your-url');
#### getLocales
>>const value = await getLocales()
>
>This method retrieves all active language localization objects from the API. It returns a Promise that resolves to an array of LocaleEntity objects.

### MarkersApi
const { Markers } = defineOneEntry('your-url');
#### getMarker
>>const value = await getMarker('marker')
>
>This method retrieves a single marker object based on its marker identifier (marker) from the API. It returns a Promise that resolves to the marker object of type MarkerEntity.
#### getMarkers
>>const value = await getMarkers({limit:20, offset:5})
>
>This method retrieves all marker objects from the API. It accepts two optional parameters limit (default 30) and offset (default 0) that allow you to limit the selection of records and offset the records selection, respectively. It returns a Promise that resolves to an object of type ItemsWithTotal, where items is an array of MarkerEntity objects and total is the total number of markers found.
#### getMarkersById
>>const value = await getMarkersById(1)
>
>This method retrieves a single marker object based on its identifier (id) from the API. It returns a Promise that resolves to the marker object of type MarkerEntity.

### MenusApi
const { Menus } = defineOneEntry('your-url');
#### getMenusByMarker
>>const value = await getMenusByMarker('marker')
>
>This method retrieves a single menu object based on its marker (marker) from the API. It returns a Promise that resolves to a single menu object as a ContentMenuDto object with included pages.

### ModulesApi
const { Modules } = defineOneEntry('your-url');
#### getAllModules
>>const value = await getAllModules()
>
>This method retrieves all modules from the API. It returns a Promise that resolves to an array of BaseModuleDto objects or an empty array [] if there is no data.

### PagesApi
const { Pages } = defineOneEntry('your-url');
#### getRootPages
>>const value = await getRootPages()
>
>This method retrieves all top-level page objects from the API. It returns a Promise that resolves to an array of ContentIndexedPageDto objects or an empty array [] if there is no data.
#### getCatalogPages
>>const value = await getCatalogPages({limit:20, offset:5})
>
>This method retrieves all page objects with product information as an array from the API. It accepts two optional parameters limit and offset for pagination. It returns a Promise that resolves to an array of ContentIndexedPageDto objects or an empty array [] if there is no data.
#### getPages
>>const value = await getPages()
>
>This method retrieves all created pages as an array from the API. It returns a Promise that resolves to an array of ContentIndexedPageDto objects or an empty array [] if there is no data.
#### getPageById
>>const value = await getPageById(1)
>
>This method retrieves a single page object based on its identifier (id) from the API. It returns a Promise that resolves to the page object, with the specific DTO depending on the type of page being returned.
#### getPageByUrl
>>const value = await getPageById('shop')
>
>This method retrieves a single page object based on its URL (url) from the API. It returns a Promise that resolves to the page object, with the specific DTO depending on the type of page being returned.
#### getChildPagesByParentUrl
>>const value = await getChildPagesByParentUrl('shop')
>
>This method retrieves child pages object with information as an array based on the parent page's URL (url). It returns a Promise that resolves to an array of ContentIndexedPageDto objects or an empty array [] if there is no data for the selected parent.
#### getConfigPageByUrl
>>const value = await getConfigPageByUrl('shop')
>
>This method retrieves the settings for a specific page based on its URL (url). It returns a Promise that resolves to a ConfigPageDto object with page display settings.
#### searchPage
>>const value = await searchPage('cup')
>
>This method performs a quick search for page objects based on a text query (name). It returns a Promise that resolves to a ContentIndexedPageDto objects or an empty array [].

### ProductsApi
const { Products } = defineOneEntry('your-url');
This module accepts a set of user parameters called userQuery.  If the parameters are not passed to the method, the default value will be applied.
>{offset: 0,
limit: 30,
statusMarker: null,
conditionValue: null,
conditionMarker: null,
attributeMarker: null,
sortOrder: 'DESC',
sortKey: 'id'} 


#### getProducts
>>const value = await getProducts()
>
>This method searches for product page objects with pagination and filtering based on the provided query parameters (userQuery). It returns a Promise that resolves to a list of products (IProduct[]).
#### getProductsEmptyPage
>>const value = await getProductsEmptyPage()
>
>This method searches for product page objects with pagination that do not have a category, based on the provided query parameters (userQuery). It returns a Promise that resolves to an array of items, where each item is a ContentIndexedProductDto object.
#### getProductsPageById
>>const value = await getProductsPageById(1)
>
>This method searches for all product page objects with pagination for the selected category based on the page identifier (id). It accepts an optional userQuery parameter to set query parameters for the search. The query parameters include limit, offset, statusMarker, conditionValue, conditionMarker, attributeMarker, sortOrder, and sortKey. It returns a Promise that resolves to an array of ContentIndexedProductDto objects.
#### getProductsPageByUrl
>>const value = await getProductsPageByUrl('cup')
>
>This method searches for all product page objects with pagination for the selected category based on the page URL (url). It accepts an optional userQuery parameter to set query parameters for the search. The query parameters include limit, offset, statusMarker, conditionValue, conditionMarker, attributeMarker, sortOrder, and sortKey. It returns a Promise that resolves to an array of ContentIndexedProductDto objects.
#### getRelatedProductsById
>>const value = await getRelatedProductsById(1)
>
>This method retrieves all related product page objects for a specific product based on its identifier (id) from the API. It accepts an optional userQuery parameter for additional query parameters such as limit, offset, sortOrder, and sortKey. It returns a Promise that resolves to an array of ContentIndexedProductDto objects.
#### getProductById
>>const value = await getProductById(1)
>
>This method retrieves a single product object based on its identifier (id) from the API. It returns a Promise that resolves to a ContentIndexedProductDto object for the product.
#### filterProduct
>>const value = await filterProduct({conditionValue:1})
>
>This method filters product page objects with pagination and multiple filtering based on the provided data request body. The data parameter should be an array of {attributeMarker:string,conditionMarker:string,conditionValue:number,pageId:number}. 
#### searchProduct
>>const value = await searchProduct('cup')
>
>This method performs a quick search for product page objects based on a text query name. The search is performed on the title field of the localizeInfos object, taking the specified lang language code into consideration. It returns a Promise that resolves to an array of ContentIndexedProductDto objects.
#### getAttributesByProductId
>>const value = await getAttributesByProductId(1)
>
>This method retrieves all attributes of a product based on its identifier (id) from the API. It returns a Promise that resolves to an array of set attributes for the product.

### ProductStatusApi
const { ProductStatus } = defineOneEntry('your-url');
#### getProductStatuses
>>const value = await getProductStatuses()
>
>This method searches for all product status objects from the API. It returns a Promise that resolves to an array of product status objects.
#### getProductStatusesById
>>const value = await getProductStatusesById(1)
>
>This method searches for a product status object based on its identifier (id) from the API. It returns a Promise that resolves to a product status object.
#### getProductsByStatusMarker
>>const value = await getProductsByStatusMarker('marker')
>
>This method searches for a product status object based on its textual identifier (marker) from the API. It returns a Promise that resolves to a product status object.
#### validateMarker
>>const value = await validateMarker('marker')
>
>This method checks the existence of a textual identifier (marker). It takes a marker parameter as input, representing the product marker to validate. It returns a Promise that resolves to true if the textual identifier (marker) exists or false if it doesn't.

### TemplatesApi
const { Templates } = defineOneEntry('your-url');
#### getTemplates
>>const value = await getTemplates()
>
>This method retrieves all template objects of a specific type from the API. It returns a Promise that resolves to an array of template objects.
#### getAllTemplates
>>const value = await getAllTemplates()
>
>This method retrieves all template objects grouped by types from the API. It returns a Promise that resolves to an object GroupedTemplatesObject, which contains an array of template objects.
#### getTemplateById
>>const value = await getTemplateById(1)
>
>This method retrieves a single template object based on its identifier (id) from the API. It returns a Promise that resolves to a template object.
#### getTemplateByMarker
>>const value = await getTemplateByMarker(1)
>
>This method retrieves a single template object based on its textual identifier (marker) from the API. It returns a Promise that resolves to a template object.

### TemplatesPreviewApi
const { TemplatesPreview } = defineOneEntry('your-url');
#### getTemplatesPreview
>>const value = await getTemplatesPreview()
>
>This method retrieves all template objects from the API. It returns a Promise that resolves to an array of TemplatePreviewsEntity template objects.
#### getTemplatesPreviewById
>>const value = await getTemplatesPreviewById(1)
>
>This method retrieves a single template object based on its identifier (id) from the API. It returns a Promise that resolves to a TemplatePreviewsEntity object.
#### getTemplatesPreviewByMarker
>>const value = await getTemplatesPreviewByMarker('marker')
>
>This method retrieves a single template object based on its textual identifier (marker) from the API. It returns a Promise that resolves to a TemplatePreviewsEntity object.





