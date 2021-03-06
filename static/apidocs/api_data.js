define({ "api": [
  {
    "type": "get",
    "url": "/fetcher/products/:productId/inventory/filters/:productIdType",
    "title": "Get filter values for other inventory methods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productIdType",
            "description": "<p>is product for 'Distributor' or for 'Supplier'</p>"
          }
        ]
      }
    },
    "name": "getInventoryFilters",
    "group": "Inventory",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/0022-45/inventory/filters/Supplier",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n // TODO\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "Inventory"
  },
  {
    "type": "POST",
    "url": "/fetcher/products/:productId/inventory/levels/:productIdType",
    "title": "Get inventory levels for product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productIdType",
            "description": "<p>is product for 'Distributor' or for 'Supplier'</p>"
          }
        ]
      }
    },
    "name": "getInventoryLevels",
    "group": "Inventory",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/0022-45/inventory/levels/Supplier",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"productID\": \"0022-45\",\n    \"ProductVariationInventoryArray\": {\n        \"ProductVariationInventory\": [\n            {\n                \"partID\": \"0022-45BK\",\n                \"partDescription\": \"Zoom® TSA 15\\\" Computer Backpack\",\n                \"quantityAvailable\": \"4011\",\n                \"attributeColor\": \"Black (BK)\",\n                \"customProductMessage\": \"Next PO Qty: 1404  Next PO Date: 5/23/2017 12:00:00 AM\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "Inventory"
  },
  {
    "type": "post",
    "url": "/fetcher/products/:productId/media/content/:mediaType",
    "title": "Details about media of product",
    "description": "<p>Get a media content for specific product id</p>",
    "name": "getMediaContent",
    "group": "Media",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mediaType",
            "description": "<p>The type of media to return. 'Image', 'Video', 'Audio', 'Document' is is supported now</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cultureName",
            "defaultValue": "en",
            "description": "<p>ISO 639-1 Alpha 2 code for Language</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "partId",
            "description": "<p>part id of product (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "classType",
            "description": "<p>classification of the media, 1006 - primary image, for example. see http://promostandards.org/service/view/11/</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost:8080/fetcher/products/HL-104/media/content/Image",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"MediaContentArray\": {\n        \"MediaContent\": [\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/Small/HL-104PP_B/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1001\",\n                            \"classTypeName\": \"Blank\"\n                        },\n                        {\n                            \"classTypeId\": \"601\",\n                            \"classTypeName\": \"Small\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"58\",\n                \"height\": \"58\",\n                \"dpi\": \"120\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            },\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/Medium/HL-104PP_B/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1001\",\n                            \"classTypeName\": \"Blank\"\n                        },\n                        {\n                            \"classTypeId\": \"602\",\n                            \"classTypeName\": \"Medium\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"171\",\n                \"height\": \"171\",\n                \"dpi\": \"120\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            },\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/Large/HL-104PP_B/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1001\",\n                            \"classTypeName\": \"Blank\"\n                        },\n                        {\n                            \"classTypeId\": \"603\",\n                            \"classTypeName\": \"Large\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"447\",\n                \"height\": \"447\",\n                \"dpi\": \"120\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            },\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/ExtraLarge/HL-104PP_B/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1001\",\n                            \"classTypeName\": \"Blank\"\n                        },\n                        {\n                            \"classTypeId\": \"2000\",\n                            \"classTypeName\": \"Standard\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"1080\",\n                \"height\": \"1080\",\n                \"dpi\": \"120\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            },\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/HiRes/HL-104PP_B/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1001\",\n                            \"classTypeName\": \"Blank\"\n                        },\n                        {\n                            \"classTypeId\": \"2001\",\n                            \"classTypeName\": \"High\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"1900\",\n                \"height\": \"1900\",\n                \"dpi\": \"300\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            },\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/Small/HL-104PP_D/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1002\",\n                            \"classTypeName\": \"Decorated\"\n                        },\n                        {\n                            \"classTypeId\": \"601\",\n                            \"classTypeName\": \"Small\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"58\",\n                \"height\": \"58\",\n                \"dpi\": \"120\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            },\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/Medium/HL-104PP_D/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1002\",\n                            \"classTypeName\": \"Decorated\"\n                        },\n                        {\n                            \"classTypeId\": \"602\",\n                            \"classTypeName\": \"Medium\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"171\",\n                \"height\": \"171\",\n                \"dpi\": \"120\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            },\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/Large/HL-104PP_D/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1002\",\n                            \"classTypeName\": \"Decorated\"\n                        },\n                        {\n                            \"classTypeId\": \"603\",\n                            \"classTypeName\": \"Large\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"447\",\n                \"height\": \"447\",\n                \"dpi\": \"120\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            },\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/ExtraLarge/HL-104PP_D/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1002\",\n                            \"classTypeName\": \"Decorated\"\n                        },\n                        {\n                            \"classTypeId\": \"2000\",\n                            \"classTypeName\": \"Standard\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"1080\",\n                \"height\": \"1080\",\n                \"dpi\": \"120\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            },\n            {\n                \"productId\": \"HL-104\",\n                \"partId\": \"HL-104PP\",\n                \"url\": \"http://Media.PCNA.com/ms/?/Bullet/HiRes/HL-104PP_D/\",\n                \"mediaType\": \"Image\",\n                \"ClassTypeArray\": {\n                    \"ClassType\": [\n                        {\n                            \"classTypeId\": \"1002\",\n                            \"classTypeName\": \"Decorated\"\n                        },\n                        {\n                            \"classTypeId\": \"2001\",\n                            \"classTypeName\": \"High\"\n                        }\n                    ]\n                },\n                \"fileSize\": \"0\",\n                \"width\": \"1900\",\n                \"height\": \"1900\",\n                \"dpi\": \"300\",\n                \"color\": \"Purple\",\n                \"description\": null,\n                \"singlePart\": \"true\",\n                \"changeTimeStamp\": \"2018-01-09T14:16:47.243\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "Media"
  },
  {
    "type": "get",
    "url": "/fetcher/products/media/modified-since/:date",
    "title": "List of products which media was modified since date",
    "description": "<p>Get all product and/or part ids, of media, that changed since a specified date</p>",
    "name": "getMediaProductDateModified",
    "group": "Media",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>ISO 8601 date since products media was modified</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cultureName",
            "defaultValue": "en",
            "description": "<p>ISO 639-1 Alpha 2 code for Language</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/media/modified-since/2018-01-01T09:00:00+03:00",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"MediaDateModifiedArray\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "Media"
  },
  {
    "type": "get",
    "url": "/fetcher/products/:productId/config-and-price",
    "title": "Product configuration and prices",
    "description": "<p>Get pricing and configuration of a product by id</p>",
    "name": "GetConfigurationAndPricing",
    "group": "Pricing_and_Config",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>ISO4217 CODE for currency</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fobId",
            "description": "<p>id of the FOB point</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "priceType",
            "description": "<p>type of pricing that should be returned. 'Customer', 'List', 'Net' is is supported now</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "configurationType",
            "description": "<p>type of configuration of the product to be returned. 'Blank' and 'Decorate' is is supported now</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "partId",
            "description": "<p>part id of product (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "localizationCountry",
            "defaultValue": "US",
            "description": "<p>ISO 3166-1 Alpha 2 code for Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "localizationLanguage",
            "defaultValue": "EN",
            "description": "<p>ISO 639-1 Alpha 2 code for Language</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/7850-06/config-and-price?currency=USD&priceType=Customer&configurationType=Blank&fobId=15068",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"Configuration\": {\n        \"PartArray\": {\n            \"Part\": {\n                \"partId\": \"7850-06BK\",\n                \"partDescription\": \"Slant Messenger Bag\",\n                \"partGroup\": \"1\",\n                \"partGroupRequired\": \"false\",\n                \"partGroupDescription\": \"Main Product\",\n                \"ratio\": \"1\",\n                \"defaultPart\": \"true\"\n            }\n        },\n        \"productId\": \"7850-06\",\n        \"currency\": \"USD\",\n        \"FobArray\": {\n            \"Fob\": {\n                \"fobId\": \"15068\",\n                \"fobPostalCode\": \"15068\"\n            }\n        },\n        \"priceType\": \"Customer\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "Pricing_and_Config"
  },
  {
    "type": "get",
    "url": "/fetcher/products/:productId/charges",
    "title": "Product configuration and prices",
    "description": "<p>Get list of charges and information on how to calculate charges</p>",
    "name": "getAvailableCharges",
    "group": "Pricing_and_Config",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "localizationCountry",
            "defaultValue": "US",
            "description": "<p>ISO 3166-1 Alpha 2 code for Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "localizationLanguage",
            "defaultValue": "EN",
            "description": "<p>ISO 639-1 Alpha 2 code for Language</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/7850-06/config-and-price?currency=USD&priceType=Customer&configurationType=Blank&fobId=15068",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"AvailableChargeArray\": {\n        \"AvailableCharge\": [\n            {\n                \"chargeId\": \"1\",\n                \"chargeName\": \"LESS THAN MINIMUM\",\n                \"chargeType\": \"Order\"\n            },\n            {\n                \"chargeId\": \"101\",\n                \"chargeName\": \"RUNNING LVL 2\",\n                \"chargeType\": \"Run\"\n            }\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "Pricing_and_Config"
  },
  {
    "type": "get",
    "url": "/fetcher/products/:productId/locations",
    "title": "Names of location on product",
    "description": "<p>Get names of locations for a given product id</p>",
    "name": "getAvailableLocations",
    "group": "Pricing_and_Config",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "defaultValue": "US",
            "description": "<p>ISO 3166-1 Alpha 2 code for Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "defaultValue": "EN",
            "description": "<p>ISO 639-1 Alpha 2 code for Language</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/locations/0022-45",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"AvailableLocationArray\": {\n        \"AvailableLocation\": [\n            {\n                \"locationId\": \"236\",\n                \"locationName\": \"Defined\"\n            },\n            {\n                \"locationId\": \"2043\",\n                \"locationName\": \"Centered on Lower Front Pocket\"\n            },\n            {\n                \"locationId\": \"5470\",\n                \"locationName\": \"Centered on Lower Front Pocket, wide\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "Pricing_and_Config"
  },
  {
    "type": "GET",
    "url": "/fetcher/products/:productId/colors/:locationId?decorationId=:decorationId&localizationCountry=:localizationCountry&localizationLanguage=:localizationLanguage",
    "title": "Decoration color of product",
    "description": "<p>Get describe possible decoration colors of product location</p>",
    "name": "getDecorationColors",
    "group": "Pricing_and_Config",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locationId",
            "description": "<p>location id. @see getAvailableLocations</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "decorationId",
            "description": "<p>decoration id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "localizationCountry",
            "defaultValue": "US",
            "description": "<p>ISO 3166-1 Alpha 2 code for Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "localizationLanguage",
            "defaultValue": "EN",
            "description": "<p>ISO 639-1 Alpha 2 code for Language</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/HL-104/colors/100?localizationCountry=US&localizationLanguage=en",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n// TODO\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "Pricing_and_Config"
  },
  {
    "type": "get",
    "url": "/fetcher/products/fob-points",
    "title": "Basic information about FOB points",
    "description": "<p>Get list of FOB points</p>",
    "name": "getFobPoints",
    "group": "Pricing_and_Config",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "localizationCountry",
            "defaultValue": "US",
            "description": "<p>ISO 3166-1 Alpha 2 code for Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "localizationLanguage",
            "defaultValue": "EN",
            "description": "<p>ISO 639-1 Alpha 2 code for Language</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/fob-points?productId=0022-45",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"FobPointArray\": {\n        \"FobPoint\": {\n            \"fobId\": \"15068\",\n            \"fobCity\": \"New Kensington\",\n            \"fobState\": \"PA\",\n            \"fobPostalCode\": \"15068\",\n            \"fobCountry\": \"USA\",\n            \"CurrencySupportedArray\": {\n                \"CurrencySupported\": [\n                    {\n                        \"currency\": \"CAD\"\n                    },\n                    {\n                        \"currency\": \"USD\"\n                    }\n                ]\n            },\n            \"ProductArray\": {\n                \"Product\": {\n                    \"productId\": \"0022-45\"\n                }\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "Pricing_and_Config"
  },
  {
    "type": "post",
    "url": "/fetcher/products/:productId",
    "title": "Details of product",
    "description": "<p>Get detail product data based on a specific product</p>",
    "name": "getProduct",
    "group": "ProductData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>ISO 3166-1 Alpha 2 code for Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>ISO 639-1 Alpha 2 code for Language</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "partId",
            "description": "<p>part id of product (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "colorName",
            "description": "<p>specific part color for this product</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "sizes",
            "description": "<p>Info about needed sizes of product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sizes.apparelStyle",
            "description": "<p>style of product. 'Unisex', 'Youth', 'Girls', 'Boys', 'Womens', 'WomensTall', 'Mens', 'MensTall' is supported now.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sizes.labelSize",
            "description": "<p>size of product. 'OSFA', '4XS', '3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', 'CUSTOM'' is supported now.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sizes.customSize",
            "description": "<p>label of custom size, set only if sizes.labelSize was set on 'CUSTOM'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost:8080/fetcher/products/0022-45?country=US&language=en",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"Product\": {\n      \"productId\": \"0022-45\",\n      \"productName\": \"Zoom® TSA 15\\\" Computer Backpack\",\n      \"description\": \"Includes designated laptop-only section that unfolds to lay flat on the\n      X-ray belt to increase your speed through security. Side-entry laptop compartment holds\n      up to 15\\\" laptops. Open main compartment includes a dedicated zippered nylex-lined padded\n     iPad pocket. Zippered top pocket with organization panel and earbud port access. Zippered\n     lower front pocket with deluxe organization. Two side zippered pockets and mesh pocket.\n     Unique hidden grab handle and neoprene carry handle. Padded back and adjustable padded\n     shoulder straps with media pocket. Back panel designed to slip over trolley handles.\n     Signature Zoom® lining and hardware.\",\n     \"productBrand\": \"Zoom\",\n     \"ProductCategoryArray\": {\n          \"ProductCategory\": {\n              \"category\": \"bags\",\n              \"subCategory\": \"backpacks\"\n          }\n      },\n      \"ProductPartArray\": {\n          \"ProductPart\": {\n              \"partId\": \"0022-45BK\",\n              \"ColorArray\": {\n                  \"Color\": {\n                      \"colorName\": \"Black (BK)\",\n                      \"hex\": \"000000\"\n                  }\n              },\n              \"primaryMaterial\": \"Dot Dobby and 600d Polycanvas\",\n              \"Dimension\": {\n                  \"dimensionUom\": \"IN\",\n                  \"depth\": \"7.00\",\n                  \"height\": \"18.00\",\n                  \"width\": \"13.50\",\n                  \"weightUom\": \"LB\",\n                  \"weight\": \"1.87\"\n              },\n              \"isRushService\": \"true\",\n              \"ProductPackagingArray\": {\n                  \"ProductPackage\": {\n                      \"default\": \"false\",\n                      \"packageType\": \"Gift Box\",\n                      \"description\": \"Bulk\",\n                      \"quantity\": \"12\",\n                      \"dimensionUom\": \"IN\",\n                      \"depth\": \"15.35\",\n                      \"height\": \"24.02\",\n                      \"width\": \"18.90\",\n                      \"weightUom\": \"LB\",\n                      \"weight\": \"26.18\"\n                  }\n              },\n              \"ShippingPackageArray\": {\n                  \"ShippingPackage\": {\n                      \"packageType\": \"Master Carton\",\n                      \"quantity\": \"12\",\n                      \"dimensionUom\": \"IN\",\n                      \"depth\": \"18.90\",\n                      \"height\": \"24.02\",\n                      \"width\": \"15.35\",\n                      \"weightUom\": \"LB\",\n                      \"weight\": \"50.00\"\n                  }\n              },\n              \"isCloseout\": \"true\"\n          }\n      },\n      \"lastChangeDate\": \"2018-01-09T14:30:39.707Z\",\n      \"creationDate\": \"1990-01-01T00:00:00Z\",\n      \"lineName\": \"LEEDS\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "ProductData"
  },
  {
    "type": "get",
    "url": "/fetcher/products/status/close-out",
    "title": "List of products which is closeout now",
    "description": "<p>Get list of product ids and optional part ids for all items which currently have an close out status</p>",
    "name": "getProductCloseOut",
    "group": "ProductData",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/status/close-out",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"ProductCloseOutArray\": {\n     \"ProductCloseOut\": [\n         {\n             \"productId\": \"0011-31\",\n             \"partId\": \"0011-31BK\"\n         },\n         {\n             \"productId\": \"0011-31\",\n             \"partId\": \"0011-31RYL\"\n         }\n     ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "ProductData"
  },
  {
    "type": "get",
    "url": "/fetcher/products/modified-since/:date",
    "title": "List of products modified since date",
    "description": "<p>Get list of product Ids and optional part ids for all items which have changed since the date.</p>",
    "name": "getProductDateModified",
    "group": "ProductData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>ISO 8601 date since products was modified</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/modified-since/2018-01-01T09:00:00+03:00",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"ProductDateModifiedArray\": {\n     \"ProductDateModified\": [\n         {\n             \"productId\": \"HL-104\",\n             \"partId\": \"HL-104BK\"\n         },\n         {\n             \"productId\": \"HL-104\",\n             \"partId\": \"HL-104BL\"\n         }\n     ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "ProductData"
  },
  {
    "type": "get",
    "url": "/fetcher/products/status/not-sellable?productId=:productId&partId=:partId",
    "title": "List of products which not available for sell",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "partId",
            "description": "<p>part id of product (sku)</p>"
          }
        ]
      }
    },
    "name": "getProductNotSellable",
    "group": "ProductData",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/status/not-sellable",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"ProductSellableArray\": {\n     \"ProductSellable\": [\n         {\n             \"productId\": \"HL-104\",\n             \"partId\": \"HL-104BK\"\n         },\n         {\n             \"productId\": \"HL-104\",\n             \"partId\": \"HL-104BL\"\n         }\n     ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "ProductData"
  },
  {
    "type": "get",
    "url": "/fetcher/products/status/sellable?productId=:productId&partId=:partId",
    "title": "List of products which available for sell",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "productId",
            "description": "<p>product id (sku)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "partId",
            "description": "<p>part id of product (sku)</p>"
          }
        ]
      }
    },
    "name": "getProductSellable",
    "group": "ProductData",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:8080/fetcher/products/status/sellable",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"ProductSellableArray\": {\n     \"ProductSellable\": [\n         {\n             \"productId\": \"HL-104\",\n             \"partId\": \"HL-104BK\"\n         },\n         {\n             \"productId\": \"HL-104\",\n             \"partId\": \"HL-104BL\"\n         }\n     ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pcna.js",
    "groupTitle": "ProductData"
  }
] });
