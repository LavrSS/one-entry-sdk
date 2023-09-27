# OneEntry SDK

OneEntry Headless CMS SDK is an SDK that provides an easy way to interact with the OneEntry Headless CMS API.

# Installation

To install the OneEntry Headless CMS SDK in your project, run the following command:

>
> ```npm install oneentry```
> 

# Usage

To use the OneEntry Headless CMS SDK in your project, import the defineOneEntry function:
```
import { defineOneEntry } from 'oneentry';

const {
Product,
Page,
ProductStatus,
Templates,
TemplatesPreview,
Markers,
AttributeSet,
Admins,
GeneralTypes,
Locales,
Menus,
Modules
} = defineOneEntry('your-url');
```
>
>Or
>
```
const api = defineOneEntry('your-url')
```
# Classes and Methods

The OneEntry Headless CMS SDK contains two classes: ProductApi and PageApi.

## AdminsApi

```
const { Admins } = defineOneEntry('your-url');
```

### getAdminsInfo

```
const value = await Admins.getAdminsInfo()
```


> This method retrieves all user objects of type admin from the API. It returns a Promise that resolves to an array of AdminEntity objects.

Example return:
```
[
  {
    "id": 1764,
    "updatedDate": "2023-09-23T12:06:18.345Z",
    "version": 10,
    "identifier": "catalog",
    "attributesSets": {
      "string_id19": "",
      "string_id18": ""
    },
    "attributeSetId": 0,
    "login": "meteor",
    "email": "meteor@mydomen.ru",
    "restorePasswordCode": "",
    "position": {
      "id": 12,
      "objectId": 1,
      "objectType": "module",
      "position": "0|hzzzzz:"
    },
    "positionId": "0|hzzzzz:",
    "permissions": {
      "menu.create": true
    },
    "selectedLanguage": "ru_RU",
    "selectedContentLanguage": "ru_RU",
    "selectedUITheme": "DARK"
  }
]
```

## AttributeSetApi

```
const { AttributeSet } = defineOneEntry('your-url');
```

### getAttributeSetById

```
const value = await AttributeSet.getAttributeSetById(1)
```

> This method retrieves a single attribute set object based on its identifier (id) from the API. It returns a Promise that resolves to the attribute set object.

Example return:
```
{
  "id": 1764,
  "updatedDate": "2023-09-23T12:19:44.803Z",
  "version": 10,
  "identifier": "catalog",
  "typeId": 1,
  "localizeInfos": {
    "ru_RU": {
      "title": "Набор для страниц"
    }
  },
  "schema": {
    "attribute1": {
      "id": 1,
      "type": "string",
      "isPrice": false,
      "original": true,
      "identifier": "stroka",
      "localizeInfos": {
        "ru_RU": {
          "title": "Строка"
        }
      }
    }
  },
  "position": {
    "id": 12,
    "objectId": 1,
    "objectType": "attribute-set",
    "position": "0|hzzzzz:"
  },
  "positionId": "0|hzzzzz:",
  "isVisible": true
}
```

### getAttributeSetByMarker

```
const value = await AttributeSet.getAttributeSetByMarker('marker')
```

> This method retrieves a single attribute set object based on its marker (marker) from the API. It returns a Promise that resolves to the attribute set object.

Example return:
```
{
  "id": 1764,
  "updatedDate": "2023-09-23T12:21:39.906Z",
  "version": 10,
  "identifier": "catalog",
  "typeId": 1,
  "localizeInfos": {
    "ru_RU": {
      "title": "Набор для страниц"
    }
  },
  "schema": {
    "attribute1": {
      "id": 1,
      "type": "string",
      "isPrice": false,
      "original": true,
      "identifier": "stroka",
      "localizeInfos": {
        "ru_RU": {
          "title": "Строка"
        }
      }
    }
  },
  "position": {
    "id": 12,
    "objectId": 1,
    "objectType": "attribute-set",
    "position": "0|hzzzzz:"
  },
  "positionId": "0|hzzzzz:",
  "isVisible": true
}
```

## FormApi

const { Forms } = defineOneEntry('your-url');

### getAllForms

```
const value = await Forms.getAllForms()
```

> This method retrieves all form objects from the API. It returns a Promise that resolves to an array of FormEntity objects.

Example return: 
```
{
  "id": 1764,
  "updatedDate": "2023-09-27T20:07:14.793Z",
  "version": 10,
  "identifier": "catalog",
  "attributesSets": {
    "string_id19": "",
    "string_id18": ""
  },
  "attributeSetId": 0,
  "processingType": "email",
  "localizeInfos": {
    "ru_RU": {
      "title": "Моя форма",
      "titleForSite": "",
      "successMessage": "",
      "unsuccessMessage": "",
      "urlAddress": "",
      "database": "0",
      "script": "0"
    }
  },
  "processingData": {},
  "formPages": [
    {
      "id": 1764,
      "pageId": 1764,
      "formId": 164,
      "positionId": null,
      "position": {
        "id": 12,
        "objectId": 1,
        "objectType": "page",
        "position": "0|hzzzzz:"
      }
    }
  ]
}
```

### getFormById

```
const value = await Forms.getFormById(1)
```

> This method retrieves a single form object based on its identifier (id) from the API. It returns a Promise that resolves to a FormEntity object.

Example return:
```
{
  "id": 1764,
  "updatedDate": "2023-09-27T20:10:37.321Z",
  "version": 10,
  "identifier": "catalog",
  "attributesSets": {
    "string_id19": "",
    "string_id18": ""
  },
  "attributeSetId": 0,
  "processingType": "email",
  "localizeInfos": {
    "ru_RU": {
      "title": "Моя форма",
      "titleForSite": "",
      "successMessage": "",
      "unsuccessMessage": "",
      "urlAddress": "",
      "database": "0",
      "script": "0"
    }
  },
  "processingData": {},
  "formPages": [
    {
      "id": 1764,
      "pageId": 1764,
      "formId": 164,
      "positionId": null,
      "position": {
        "id": 12,
        "objectId": 1,
        "objectType": "page",
        "position": "0|hzzzzz:"
      }
    }
  ]
}
```

### getFormByMarker

```
const value = await Forms.getFormByMarker('My form')
```

> This method retrieves a single form object based on its textual identifier (marker) from the API. It returns a Promise that resolves to a FormEntity object.

Example return:

```
{
  "id": 1764,
  "updatedDate": "2023-09-27T20:14:05.333Z",
  "version": 10,
  "identifier": "catalog",
  "attributesSets": {
    "string_id19": "",
    "string_id18": ""
  },
  "attributeSetId": 0,
  "processingType": "email",
  "localizeInfos": {
    "ru_RU": {
      "title": "Моя форма",
      "titleForSite": "",
      "successMessage": "",
      "unsuccessMessage": "",
      "urlAddress": "",
      "database": "0",
      "script": "0"
    }
  },
  "processingData": {},
  "formPages": [
    {
      "id": 1764,
      "pageId": 1764,
      "formId": 164,
      "positionId": null,
      "position": {
        "id": 12,
        "objectId": 1,
        "objectType": "page",
        "position": "0|hzzzzz:"
      }
    }
  ]
}
```

## FormsDataApi

const { FormsData } = defineOneEntry('your-url');

### postFormsData

```
const value = await FormsData.postFormsData()
```

> This method retrieves all form data objects from the API. It returns a Promise that resolves to an array of objects of type CreateFormDataDto.

Example return:

```
{
  "id": 1764,
  "formIdentifier": "my-form",
  "time": "2023-02-12 10:56",
  "formData": [
    {
      "marker": "naimenovanie_1",
      "value": "Наименование",
      "langCode": "ru_RU"
    }
  ]
}
```

### getFormsData

```
const value = await FormsData.getFormsData()
```

> This method creates form data objects by sending a request to the API. It accepts an array of objects of type IFormsPost as the request body to provide the necessary form data. It returns a Promise that resolves to the created CreateFormDataDto objects.

Example return:

```
[
  {
    "id": 1764,
    "formIdentifier": "my-form",
    "time": "2023-02-12 10:56",
    "formData": [
      {
        "marker": "naimenovanie_1",
        "value": "Наименование",
        "langCode": "ru_RU"
      }
    ]
  }
]
```

### getFormsDataByMarker

```
const value = await FormsData.getFormsDataByMarker('my-marker')
```

> This method retrieves a specific form data object by its marker from the API. It accepts a marker parameter as the marker of the form data. It returns a Promise that resolves to an array of objects of type FormDataEntity.

Example return:

```
[
  {
    "id": 1764,
    "formIdentifier": "my-form",
    "time": "2023-02-12 10:56",
    "formData": [
      {
        "marker": "naimenovanie_1",
        "value": "Наименование",
        "langCode": "ru_RU"
      }
    ]
  }
]
```

## GeneralTypesApi

const { GeneralTypes } = defineOneEntry('your-url');

### getAllTypes

```
const value = await GeneralTypes.getAllTypes()
```

> This method retrieves all objects of type GeneralTypeEntity from the API. It returns a Promise that resolves to an array of GeneralTypeEntity objects.

Example return:
```
[
  {
    "id": 1,
    "type": "forNewsPage"
  }
]
```
## LocalesApi

```
const { Locales } = defineOneEntry('your-url');
```

### getLocales

```
const value = Locales.await getLocales()
```

> This method retrieves all active language localization objects from the API. It returns a Promise that resolves to an array of LocaleEntity objects.

Example return:
```
[
  {
    "id": 1764,
    "shortCode": "ru",
    "code": "ru_RU",
    "name": "Bengali",
    "nativeName": "বাংলা",
    "isActive": false,
    "image": "🇦🇨",
    "position": "0|hzzzzz:"
  }
]
```
## MarkersApi

```
const { Markers } = defineOneEntry('your-url');
```

### getMarker

```
const value = await Markers.getMarker('marker')
```

> This method retrieves a single marker object based on its marker identifier (marker) from the API. It returns a Promise that resolves to the marker object of type MarkerEntity.

Example return:
```
{
  "id": 17,
  "updatedDate": "2023-09-23T12:30:08.153Z",
  "version": 10,
  "identifier": "catalog",
  "name": "string",
  "marker": "string",
  "localizeInfos": {
    "ru_RU": {
      "title": "Мой маркер"
    }
  }
}
```
### getMarkers

```
const value = await Markers.getMarkers({limit:20, offset:5})
```

> This method retrieves all marker objects from the API. It accepts two optional parameters limit (default 30) and offset (default 0) that allow you to limit the selection of records and offset the records selection, respectively. It returns a Promise that resolves to an object of type ItemsWithTotal, where items is an array of MarkerEntity objects and total is the total number of markers found.

Example return:
```
{
  "id": 17,
  "updatedDate": "2023-09-23T12:31:19.409Z",
  "version": 10,
  "identifier": "catalog",
  "name": "string",
  "marker": "string",
  "localizeInfos": {
    "ru_RU": {
      "title": "Мой маркер"
    }
  }
}
```
### getMarkersById

```
const value = await Markers.getMarkersById(1)
```

> This method retrieves a single marker object based on its identifier (id) from the API. It returns a Promise that resolves to the marker object of type MarkerEntity.

Example return:
```
{
  "id": 17,
  "updatedDate": "2023-09-23T12:32:47.591Z",
  "version": 10,
  "identifier": "catalog",
  "name": "string",
  "marker": "string",
  "localizeInfos": {
    "ru_RU": {
      "title": "Мой маркер"
    }
  }
}
```
## MenusApi

```
const { Menus } = defineOneEntry('your-url');
```

### getMenusByMarker

```
const value = await Menus.getMenusByMarker('marker')
```

> This method retrieves a single menu object based on its marker (marker) from the API. It returns a Promise that resolves to a single menu object as a ContentMenuDto object with included pages.

Example return:

```
{
  "id": 1764,
  "identifier": "catalog",
  "localizeInfos": {
    "ru_RU": {
      "title": "Главное меню"
    }
  },
  "pages": [
    {
      "id": 11,
      "pageUrl": "122",
      "localizeInfos": {
        "en_US": {
          "title": "12",
          "content": "",
          "menuTitle": "12"
        }
      },
      "position": 0,
      "parentId": null
    }
  ]
}
```
## ModulesApi

```
const { Modules } = defineOneEntry('your-url');
```

### getAllModules

```
const value = await Modules.getAllModules()
```

> This method retrieves all modules from the API. It returns a Promise that resolves to an array of BaseModuleDto objects or an empty array [] if there is no data.

Example return:
```
[
  {
    "identifier": "catalog",
    "isVisible": true,
    "type": null,
    "localizeInfos": {
      "ru_RU": {
        "title": "Каталог"
      }
    },
    "icon": "mdi mdi-account-key",
    "generalTypes": [
      {
        "id": 1,
        "type": "service"
      },
      {
        "id": 2,
        "type": "forCatalogPages"
      }
    ],
    "attributeSetTypes": [],
    "position": "0|hzzzzz:",
    "positionId": 12
  }
]
```
## PagesApi

```
const { Pages } = defineOneEntry('your-url');
```

### getRootPages

```
const value = await Pages.getRootPages()
```

> This method retrieves all top-level page objects from the API. It returns a Promise that resolves to an array of ContentIndexedPageDto objects or an empty array [] if there is no data.

Example return:
```
[
  {
    "id": 1764,
    "parentId": null,
    "config": {
      "rowsPerPage": 1,
      "productsPerRow": 1
    },
    "pageUrl": "string",
    "depth": 3,
    "localizeInfos": {
      "ru_RU": {
        "title": "Каталог",
        "content": "Контент для каталога",
        "menuTitle": "Каталог"
      }
    },
    "isVisible": true,
    "isEditorDisabled": false,
    "products": 0,
    "attributeSetId": 7,
    "forms": [
      null
    ],
    "blocks": [
      null
    ],
    "templateIdentifier": "my-template",
    "attributeValues": {
      "en_US": {
        "marker": {
          "value": "",
          "type": "string"
        }
      }
    },
    "position": 192,
    "type": "forNewsPage"
  }
]
```
### getCatalogPages

```
const value = await Pages.getCatalogPages({limit:20, offset:5})
```

> This method retrieves all page objects with product information as an array from the API. It accepts two optional parameters limit and offset for pagination. It returns a Promise that resolves to an array of ContentIndexedPageDto objects or an empty array [] if there is no data.

Example return:

```
[
  {
    "id": 1764,
    "parentId": null,
    "config": {
      "rowsPerPage": 1,
      "productsPerRow": 1
    },
    "pageUrl": "string",
    "depth": 3,
    "localizeInfos": {
      "ru_RU": {
        "title": "Каталог",
        "content": "Контент для каталога",
        "menuTitle": "Каталог"
      }
    },
    "isVisible": true,
    "isEditorDisabled": false,
    "products": 0,
    "attributeSetId": 7,
    "forms": [
      null
    ],
    "blocks": [
      null
    ],
    "templateIdentifier": "my-template",
    "attributeValues": {
      "en_US": {
        "marker": {
          "value": "",
          "type": "string"
        }
      }
    },
    "position": 192,
    "type": "forNewsPage"
  }
]
```
### getPages

```
const value = await Pages.getPages()
```

> This method retrieves all created pages as an array from the API. It returns a Promise that resolves to an array of ContentIndexedPageDto objects or an empty array [] if there is no data.

Example return:
```
[
  {
    "id": 1764,
    "parentId": null,
    "config": {
      "rowsPerPage": 1,
      "productsPerRow": 1
    },
    "pageUrl": "string",
    "depth": 3,
    "localizeInfos": {
      "ru_RU": {
        "title": "Каталог",
        "content": "Контент для каталога",
        "menuTitle": "Каталог"
      }
    },
    "isVisible": true,
    "isEditorDisabled": false,
    "products": 0,
    "attributeSetId": 7,
    "forms": [
      null
    ],
    "blocks": [
      null
    ],
    "templateIdentifier": "my-template",
    "attributeValues": {
      "en_US": {
        "marker": {
          "value": "",
          "type": "string"
        }
      }
    },
    "position": 192,
    "type": "forNewsPage"
  }
]
```
### getPageById

```
const value = await Pages.getPageById(1)
```

> This method retrieves a single page object based on its identifier (id) from the API. It returns a Promise that resolves to the page object, with the specific DTO depending on the type of page being returned.

```
{
  "id": 1764,
  "parentId": null,
  "pageUrl": "string",
  "depth": 3,
  "localizeInfos": {
    "ru_RU": {
      "title": "Каталог",
      "content": "Контент для каталога",
      "menuTitle": "Каталог"
    }
  },
  "isVisible": true,
  "forms": [
    null
  ],
  "blocks": [
    null
  ],
  "position": 192,
  "type": "forNewsPage",
  "templateIdentifier": "my-template",
  "attributeSetId": 7,
  "attributeValues": {
    "en_US": {
      "marker": "opisanine",
      "type": "string",
      "value": ""
    }
  },
  "products": 0
}
```
### getPageByUrl

```
const value = await Pages.getPageById('shop')
```

> This method retrieves a single page object based on its URL (url) from the API. It returns a Promise that resolves to the page object, with the specific DTO depending on the type of page being returned.

Example return:
```
{
  "id": 1764,
  "parentId": null,
  "pageUrl": "string",
  "depth": 3,
  "localizeInfos": {
    "ru_RU": {
      "title": "Каталог",
      "content": "Контент для каталога",
      "menuTitle": "Каталог"
    }
  },
  "isVisible": true,
  "forms": [
    null
  ],
  "blocks": [
    null
  ],
  "position": 192,
  "type": "forNewsPage",
  "templateIdentifier": "my-template",
  "attributeSetId": 7,
  "attributeValues": {
    "en_US": {
      "marker": "opisanine",
      "type": "string",
      "value": ""
    }
  },
  "products": 0
}
```
### getChildPagesByParentUrl

```
const value = await Pages.getChildPagesByParentUrl('shop')
```

> This method retrieves child pages object with information as an array based on the parent page's URL (url). It returns a Promise that resolves to an array of ContentIndexedPageDto objects or an empty array [] if there is no data for the selected parent.

Example return:
```
[
  {
    "id": 1764,
    "parentId": null,
    "config": {
      "rowsPerPage": 1,
      "productsPerRow": 1
    },
    "pageUrl": "string",
    "depth": 3,
    "localizeInfos": {
      "ru_RU": {
        "title": "Каталог",
        "content": "Контент для каталога",
        "menuTitle": "Каталог"
      }
    },
    "isVisible": true,
    "isEditorDisabled": false,
    "products": 0,
    "attributeSetId": 7,
    "forms": [
      null
    ],
    "blocks": [
      null
    ],
    "templateIdentifier": "my-template",
    "attributeValues": {
      "en_US": {
        "marker": {
          "value": "",
          "type": "string"
        }
      }
    },
    "position": 192,
    "type": "forNewsPage"
  }
]
```
### getConfigPageByUrl

```
const value = await Pages.getConfigPageByUrl('shop')
```

> This method retrieves the settings for a specific page based on its URL (url). It returns a Promise that resolves to a ConfigPageDto object with page display settings.

Example return:
```
{
  "rowsPerPage": 10,
  "productsPerRow": 10
}
```
### searchPage

```
const value = await Pages.searchPage('cup')
```

> This method performs a quick search for page objects based on a text query (name). It returns a Promise that resolves to a ContentIndexedPageDto objects or an empty array [].

Example return:
```
[
  {
  "id": 1764,
  "localizeInfos": {
    "ru_RU": {
      "title": "Товар"
    }
  },
  "isVisible": true,
  "statusId": 1,
  "relatedIds": [
    1,
    2,
    3
  ],
  "productPages": [
    {
      "id": 8997,
      "pageId": 1176,
      "productId": 8872
    }
  ],
  "attributeSetId": 7,
  "version": 10,
  "isSync": 0,
  "price": 0,
  "templateIdentifier": "my-template",
  "shortDescTemplateIdentifier": "my-template-short",
  "attributeValues": {
    "en_US": {
      "marker": {
        "value": "",
        "type": "string"
      }
    }
  },
  "position": 1
}
]
```

## ProductsApi

```
const { Products } = defineOneEntry('your-url');
```

This module accepts a set of user parameters called userQuery. If the parameters are not passed to the method, the default value will be applied.

```
{
offset: 0,
limit: 30,
statusMarker: null,
conditionValue: null,
conditionMarker: null,
attributeMarker: null,
sortOrder: 'DESC',
sortKey: 'id'
}
```

### getProducts

```
const value = await Products.getProducts()
```

> This method searches for product page objects with pagination and filtering based on the provided query parameters (userQuery). It returns a Promise that resolves to a list of products (IProduct[]).

Example return:
```
{
  "id": 1764,
  "localizeInfos": {
    "ru_RU": {
      "title": "Товар"
    }
  },
  "isVisible": true,
  "statusId": 1,
  "relatedIds": [
    1,
    2,
    3
  ],
  "productPages": [
    {
      "id": 8997,
      "pageId": 1176,
      "productId": 8872
    }
  ],
  "attributeSetId": 7,
  "version": 10,
  "isSync": 0,
  "price": 0,
  "templateIdentifier": "my-template",
  "shortDescTemplateIdentifier": "my-template-short",
  "attributeValues": {
    "en_US": {
      "marker": {
        "value": "",
        "type": "string"
      }
    }
  },
  "position": 1
}
```
### getProductsEmptyPage

```
const value = await Products.getProductsEmptyPage()
```

> This method searches for product page objects with pagination that do not have a category, based on the provided query parameters (userQuery). It returns a Promise that resolves to an array of items, where each item is a ContentIndexedProductDto object.

Example return:

```
{
  "id": 1764,
  "localizeInfos": {
    "ru_RU": {
      "title": "Товар"
    }
  },
  "isVisible": true,
  "statusId": 1,
  "relatedIds": [
    1,
    2,
    3
  ],
  "productPages": [
    {
      "id": 8997,
      "pageId": 1176,
      "productId": 8872
    }
  ],
  "attributeSetId": 7,
  "version": 10,
  "isSync": 0,
  "price": 0,
  "templateIdentifier": "my-template",
  "shortDescTemplateIdentifier": "my-template-short",
  "attributeValues": {
    "en_US": {
      "marker": {
        "value": "",
        "type": "string"
      }
    }
  },
  "position": 1
}
```

### getProductsPageById

```
const value = await Products.getProductsPageById(1)
```

> This method searches for all product page objects with pagination for the selected category based on the page identifier (id). It accepts an optional userQuery parameter to set query parameters for the search. The query parameters include limit, offset, statusMarker, conditionValue, conditionMarker, attributeMarker, sortOrder, and sortKey. It returns a Promise that resolves to an array of ContentIndexedProductDto objects.

Example return:
```
{
  "id": 1764,
  "localizeInfos": {
    "ru_RU": {
      "title": "Товар"
    }
  },
  "isVisible": true,
  "statusId": 1,
  "relatedIds": [
    1,
    2,
    3
  ],
  "productPages": [
    {
      "id": 8997,
      "pageId": 1176,
      "productId": 8872
    }
  ],
  "attributeSetId": 7,
  "version": 10,
  "isSync": 0,
  "price": 0,
  "templateIdentifier": "my-template",
  "shortDescTemplateIdentifier": "my-template-short",
  "attributeValues": {
    "en_US": {
      "marker": {
        "value": "",
        "type": "string"
      }
    }
  },
  "position": 1
}
```

### getProductsPageByUrl

```
const value = await Products.getProductsPageByUrl('cup')
```

> This method searches for all product page objects with pagination for the selected category based on the page URL (url). It accepts an optional userQuery parameter to set query parameters for the search. The query parameters include limit, offset, statusMarker, conditionValue, conditionMarker, attributeMarker, sortOrder, and sortKey. It returns a Promise that resolves to an array of ContentIndexedProductDto objects.

Example return:
```
{
  "id": 1764,
  "localizeInfos": {
    "ru_RU": {
      "title": "Товар"
    }
  },
  "isVisible": true,
  "statusId": 1,
  "relatedIds": [
    1,
    2,
    3
  ],
  "productPages": [
    {
      "id": 8997,
      "pageId": 1176,
      "productId": 8872
    }
  ],
  "attributeSetId": 7,
  "version": 10,
  "isSync": 0,
  "price": 0,
  "templateIdentifier": "my-template",
  "shortDescTemplateIdentifier": "my-template-short",
  "attributeValues": {
    "en_US": {
      "marker": {
        "value": "",
        "type": "string"
      }
    }
  },
  "position": 1
}
```

### getRelatedProductsById

```
const value = await Products.getRelatedProductsById(1)
```

> This method retrieves all related product page objects for a specific product based on its identifier (id) from the API. It accepts an optional userQuery parameter for additional query parameters such as limit, offset, sortOrder, and sortKey. It returns a Promise that resolves to an array of ContentIndexedProductDto objects.

Example return:
```
{
  "id": 1764,
  "localizeInfos": {
    "ru_RU": {
      "title": "Товар"
    }
  },
  "isVisible": true,
  "statusId": 1,
  "relatedIds": [
    1,
    2,
    3
  ],
  "productPages": [
    {
      "id": 8997,
      "pageId": 1176,
      "productId": 8872
    }
  ],
  "attributeSetId": 7,
  "version": 10,
  "isSync": 0,
  "price": 0,
  "templateIdentifier": "my-template",
  "shortDescTemplateIdentifier": "my-template-short",
  "attributeValues": {
    "en_US": {
      "marker": {
        "value": "",
        "type": "string"
      }
    }
  },
  "position": 1
}
```
### getProductById

```
const value = await Products.getProductById(1)
```

> This method retrieves a single product object based on its identifier (id) from the API. It returns a Promise that resolves to a ContentIndexedProductDto object for the product.

Example return:
```
{
  "id": 1764,
  "localizeInfos": {
    "ru_RU": {
      "title": "Товар"
    }
  },
  "isVisible": true,
  "statusId": 1,
  "relatedIds": [
    1,
    2,
    3
  ],
  "productPages": [
    {
      "id": 8997,
      "pageId": 1176,
      "productId": 8872
    }
  ],
  "attributeSetId": 7,
  "version": 10,
  "isSync": 0,
  "price": 0,
  "templateIdentifier": "my-template",
  "shortDescTemplateIdentifier": "my-template-short",
  "attributeValues": {
    "en_US": {
      "marker": {
        "value": "",
        "type": "string"
      }
    }
  },
  "position": 1
}
```
### filterProduct

```
const value = await Products.filterProduct({conditionValue:1})
```

Example body:
```
[
  {
    "attributeMarker": "price",
    "conditionMarker": "mth",
    "conditionValue": 1,
    "pageId": 0
  },
  {
    "attributeMarker": "price",
    "conditionMarker": "lth",
    "conditionValue": 3,
    "pageId": 0
  }
]
```

> This method filters product page objects with pagination and multiple filtering based on the provided data request body. The data parameter should be an array of {attributeMarker:string,conditionMarker:string,conditionValue:number,pageId:number}.

Example return:
```
{
  "id": 1764,
  "localizeInfos": {
    "ru_RU": {
      "title": "Товар"
    }
  },
  "isVisible": true,
  "statusId": 1,
  "relatedIds": [
    1,
    2,
    3
  ],
  "productPages": [
    {
      "id": 8997,
      "pageId": 1176,
      "productId": 8872
    }
  ],
  "attributeSetId": 7,
  "version": 10,
  "isSync": 0,
  "price": 0,
  "templateIdentifier": "my-template",
  "shortDescTemplateIdentifier": "my-template-short",
  "attributeValues": {
    "en_US": {
      "marker": {
        "value": "",
        "type": "string"
      }
    }
  },
  "position": 1
}
```
### searchProduct

```
const value = await Products.searchProduct('cup')
```

> This method performs a quick search for product page objects based on a text query name. The search is performed on the title field of the localizeInfos object, taking the specified lang language code into consideration. It returns a Promise that resolves to an array of ContentIndexedProductDto objects.

Example return:
```
[
  {
  "id": 1764,
  "localizeInfos": {
    "ru_RU": {
      "title": "Товар"
    }
  },
  "isVisible": true,
  "statusId": 1,
  "relatedIds": [
    1,
    2,
    3
  ],
  "productPages": [
    {
      "id": 8997,
      "pageId": 1176,
      "productId": 8872
    }
  ],
  "attributeSetId": 7,
  "version": 10,
  "isSync": 0,
  "price": 0,
  "templateIdentifier": "my-template",
  "shortDescTemplateIdentifier": "my-template-short",
  "attributeValues": {
    "en_US": {
      "marker": {
        "value": "",
        "type": "string"
      }
    }
  },
  "position": 1
}
]
```
### getAttributesByProductId

```
const value = await Products.getAttributesByProductId(1)
```

> This method retrieves all attributes of a product based on its identifier (id) from the API. It returns a Promise that resolves to an array of set attributes for the product.

Example return:
```
{
  "en_US": {
    "marker": {
      "value": "",
      "type": "string"
    }
  }
}
```
## ProductStatusApi

```
const { ProductStatus } = defineOneEntry('your-url');
```

### getProductStatuses

```
const value = await ProductStatus.getProductStatuses()
```

> This method searches for all product status objects from the API. It returns a Promise that resolves to an array of product status objects.

Example return:
```
[
  {
    "id": 1764,
    "updatedDate": "2023-09-25T13:36:05.903Z",
    "version": 10,
    "identifier": "catalog",
    "localizeInfos": {
      "ru_RU": {
        "title": "Статус 1"
      }
    }
  }
]
```
### getProductStatusesById

```
const value = await ProductStatus.getProductStatusesById(1)
```

> This method searches for a product status object based on its identifier (id) from the API. It returns a Promise that resolves to a product status object.

Example return:
```
{
  "id": 1764,
  "updatedDate": "2023-09-25T13:36:05.907Z",
  "version": 10,
  "identifier": "catalog",
  "localizeInfos": {
    "ru_RU": {
      "title": "Статус 1"
    }
  }
}
```
### getProductsByStatusMarker

```
const value = await ProductStatus.getProductsByStatusMarker('marker')
```

> This method searches for a product status object based on its textual identifier (marker) from the API. It returns a Promise that resolves to a product status object.

Example return:
```
{
  "id": 1764,
  "updatedDate": "2023-09-25T13:39:19.384Z",
  "version": 10,
  "identifier": "catalog",
  "localizeInfos": {
    "ru_RU": {
      "title": "Статус 1"
    }
  }
}
```
### validateMarker

```
const value = await ProductStatus.validateMarker('marker')
```

> This method checks the existence of a textual identifier (marker). It takes a marker parameter as input, representing the product marker to validate. It returns a Promise that resolves to true if the textual identifier (marker) exists or false if it doesn't.

Example return:
```
true
```
## TemplatesApi

```
const { Templates } = defineOneEntry('your-url');
```

### getTemplates

```
const value = await Templates.getTemplates()
```

> This method retrieves all template objects of a specific type from the API. It returns a Promise that resolves to an array of template objects.

Example return:
```
[
  {
    "id": 1764,
    "updatedDate": "2023-09-25T13:47:05.811Z",
    "version": 10,
    "identifier": "catalog",
    "attributesSets": {
      "string_id19": "",
      "string_id18": ""
    },
    "attributeSetId": 0,
    "generalType": {
      "id": 4,
      "type": "forCatalogPages"
    },
    "generalTypeId": 4,
    "localizeInfos": {
      "ru_RU": {
        "title": "Шаблон страниц"
      }
    },
    "position": {
      "id": 12,
      "objectId": 1,
      "objectType": "module",
      "position": "0|hzzzzz:"
    },
    "positionId": "0|hzzzzz:"
  }
]
```
### getAllTemplates

```
const value = await Templates.getAllTemplates()
```

> This method retrieves all template objects grouped by types from the API. It returns a Promise that resolves to an object GroupedTemplatesObject, which contains an array of template objects.

Example return:
```
string
```
### getTemplateById

```
const value = await Templates.getTemplateById(1)
```

> This method retrieves a single template object based on its identifier (id) from the API. It returns a Promise that resolves to a template object.

Example return:
```
{
  "id": 1764,
  "updatedDate": "2023-09-25T13:49:05.070Z",
  "version": 10,
  "identifier": "catalog",
  "attributesSets": {
    "string_id19": "",
    "string_id18": ""
  },
  "attributeSetId": 0,
  "generalType": {
    "id": 4,
    "type": "forCatalogPages"
  },
  "generalTypeId": 4,
  "localizeInfos": {
    "ru_RU": {
      "title": "Шаблон страниц"
    }
  },
  "position": {
    "id": 12,
    "objectId": 1,
    "objectType": "module",
    "position": "0|hzzzzz:"
  },
  "positionId": "0|hzzzzz:"
}
```
### getTemplateByMarker

```
const value = await Templates.getTemplateByMarker(1)
```

> This method retrieves a single template object based on its textual identifier (marker) from the API. It returns a Promise that resolves to a template object.

Example return:

```
{
  "id": 1764,
  "updatedDate": "2023-09-25T13:49:43.355Z",
  "version": 10,
  "identifier": "catalog",
  "attributesSets": {
    "string_id19": "",
    "string_id18": ""
  },
  "attributeSetId": 0,
  "generalType": {
    "id": 4,
    "type": "forCatalogPages"
  },
  "generalTypeId": 4,
  "localizeInfos": {
    "ru_RU": {
      "title": "Шаблон страниц"
    }
  },
  "position": {
    "id": 12,
    "objectId": 1,
    "objectType": "module",
    "position": "0|hzzzzz:"
  },
  "positionId": "0|hzzzzz:"
}
```
## TemplatesPreviewApi

```
const { TemplatesPreview } = defineOneEntry('your-url');
```

### getTemplatesPreview

```
const value = await TemplatesPreview.getTemplatesPreview()
```

> This method retrieves all template objects from the API. It returns a Promise that resolves to an array of TemplatePreviewsEntity template objects.

Example return:
```
[
  {
    "id": 1764,
    "updatedDate": "2023-09-25T13:50:39.310Z",
    "version": 10,
    "identifier": "catalog",
    "attributesSets": {
      "string_id19": "",
      "string_id18": ""
    },
    "attributeSetId": 0,
    "localizeInfos": {
      "ru_RU": {
        "title": "Шаблон страниц"
      }
    },
    "position": {
      "id": 12,
      "objectId": 1,
      "objectType": "module",
      "position": "0|hzzzzz:"
    },
    "positionId": "0|hzzzzz:"
  }
]
```
### getTemplatesPreviewById

```
const value = await TemplatesPreview.getTemplatesPreviewById(1)
```

> This method retrieves a single template object based on its identifier (id) from the API. It returns a Promise that resolves to a TemplatePreviewsEntity object.

Example return:

```
{
  "id": 1764,
  "updatedDate": "2023-09-25T13:51:18.920Z",
  "version": 10,
  "identifier": "catalog",
  "attributesSets": {
    "string_id19": "",
    "string_id18": ""
  },
  "attributeSetId": 0,
  "localizeInfos": {
    "ru_RU": {
      "title": "Шаблон страниц"
    }
  },
  "position": {
    "id": 12,
    "objectId": 1,
    "objectType": "module",
    "position": "0|hzzzzz:"
  },
  "positionId": "0|hzzzzz:"
}
```
### getTemplatesPreviewByMarker

```
const value = await TemplatesPreview.getTemplatesPreviewByMarker('marker')
```

> This method retrieves a single template object based on its textual identifier (marker) from the API. It returns a Promise that resolves to a TemplatePreviewsEntity object.

Example return:

```
{
  "id": 1764,
  "updatedDate": "2023-09-25T13:51:59.232Z",
  "version": 10,
  "identifier": "catalog",
  "attributesSets": {
    "string_id19": "",
    "string_id18": ""
  },
  "attributeSetId": 0,
  "localizeInfos": {
    "ru_RU": {
      "title": "Шаблон страниц"
    }
  },
  "position": {
    "id": 12,
    "objectId": 1,
    "objectType": "module",
    "position": "0|hzzzzz:"
  },
  "positionId": "0|hzzzzz:"
}
```