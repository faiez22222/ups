import React, { useState, useMemo, useEffect } from "react";
import styles from "./fedexTracking.module.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import moment from "moment";
import TrackOverview from "./TrackOverview";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShipmentFacts from "./ShipmentFacts";
import TravelHistory from "./TravelHistory";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import useMediaQuery from "../../hook/useMediaQuery";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import UPSComponent from "./UPSComponent";
import TrackOverviewUps from "./TrackOverviewUps";
import ShipmentFactsUps from "./ShipmentFactsUps";
import TravelHistoryUps from "./TravelHistoryUps";
const App = () => {
 
  const orderData = [ {
    "orderId": 5782781755692,
    "trackingNumbers": [
      "1Z81WV380316886897"
    ],
    "lineItems": [
      {
        "id": 14691525984556,
        "admin_graphql_api_id": "gid://shopify/LineItem/14691525984556",
        "attributed_staffs": [],
        "current_quantity": 1,
        "fulfillable_quantity": 0,
        "fulfillment_service": "manual",
        "fulfillment_status": "fulfilled",
        "gift_card": false,
        "grams": 0,
        "name": "1-1/2\" SDS Electric Hammer Drill Set 1100W 110V - As in Pic",
        "price": "59.00",
        "price_set": {
          "shop_money": {
            "amount": "59.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "59.00",
            "currency_code": "USD"
          }
        },
        "product_exists": true,
        "product_id": 8746873323820,
        "properties": [],
        "quantity": 1,
        "requires_shipping": true,
        "sku": "31206087",
        "taxable": false,
        "title": "1-1/2\" SDS Electric Hammer Drill Set 1100W 110V",
        "total_discount": "0.00",
        "total_discount_set": {
          "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
          }
        },
        "variant_id": 47045835784492,
        "variant_inventory_management": null,
        "variant_title": "As in Pic",
        "vendor": "inQ Boutique",
        "tax_lines": [],
        "duties": [],
        "discount_allocations": [],
        "product_id_details": {
          "images": [
            {
              "id": 42864711958828,
              "alt": null,
              "position": 1,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:31-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711958828",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_1.jpg?v=1695837151",
              "variant_ids": []
            },
            {
              "id": 42864710910252,
              "alt": null,
              "position": 2,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:28-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864710910252",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_2.jpg?v=1695837148",
              "variant_ids": []
            },
            {
              "id": 42864710746412,
              "alt": null,
              "position": 3,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:27-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864710746412",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_3.jpg?v=1695837147",
              "variant_ids": []
            },
            {
              "id": 42864711008556,
              "alt": null,
              "position": 4,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:28-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711008556",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_4.jpg?v=1695837148",
              "variant_ids": []
            },
            {
              "id": 42864711369004,
              "alt": null,
              "position": 5,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:29-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711369004",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_5.jpg?v=1695837149",
              "variant_ids": []
            },
            {
              "id": 42864711467308,
              "alt": null,
              "position": 6,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:30-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711467308",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_6.jpg?v=1695837150",
              "variant_ids": []
            },
            {
              "id": 42864712024364,
              "alt": null,
              "position": 7,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:32-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864712024364",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_7.jpg?v=1695837152",
              "variant_ids": []
            },
            {
              "id": 42864710844716,
              "alt": null,
              "position": 8,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:27-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864710844716",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_8.jpg?v=1695837147",
              "variant_ids": []
            },
            {
              "id": 42864710680876,
              "alt": null,
              "position": 9,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:27-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864710680876",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_9.jpg?v=1695837147",
              "variant_ids": []
            },
            {
              "id": 42864711074092,
              "alt": null,
              "position": 10,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:28-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711074092",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_10.jpg?v=1695837148",
              "variant_ids": []
            },
            {
              "id": 42864711434540,
              "alt": null,
              "position": 11,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:30-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711434540",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_11.jpg?v=1695837150",
              "variant_ids": []
            },
            {
              "id": 42864711893292,
              "alt": null,
              "position": 12,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:31-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711893292",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_12.jpg?v=1695837151",
              "variant_ids": []
            },
            {
              "id": 42864711172396,
              "alt": null,
              "position": 13,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:29-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711172396",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_13.jpg?v=1695837149",
              "variant_ids": []
            },
            {
              "id": 42864711401772,
              "alt": null,
              "position": 14,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:30-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711401772",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_14.jpg?v=1695837150",
              "variant_ids": []
            },
            {
              "id": 42864710615340,
              "alt": null,
              "position": 15,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:26-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864710615340",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_15.jpg?v=1695837146",
              "variant_ids": []
            },
            {
              "id": 42864711270700,
              "alt": null,
              "position": 16,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:29-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711270700",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_16.jpg?v=1695837149",
              "variant_ids": []
            },
            {
              "id": 42864710811948,
              "alt": null,
              "position": 17,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:27-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864710811948",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_17.jpg?v=1695837147",
              "variant_ids": []
            },
            {
              "id": 42864711139628,
              "alt": null,
              "position": 18,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:29-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711139628",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_18.jpg?v=1695837149",
              "variant_ids": []
            },
            {
              "id": 42864711860524,
              "alt": null,
              "position": 19,
              "product_id": 8746873323820,
              "created_at": "2023-09-27T10:52:25-07:00",
              "updated_at": "2023-09-27T10:52:31-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/42864711860524",
              "width": 600,
              "height": 600,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/files/D0102HGAIIV_19.jpg?v=1695837151",
              "variant_ids": []
            }
          ]
        }
      }
    ],
    "upsResponse": {
      "trackResponse": {
        "shipment": [
          {
            "inquiryNumber": "1Z81WV380316886897",
            "package": [
              {
                "trackingNumber": "1Z81WV380316886897",
                "deliveryDate": [
                  {
                    "type": "DEL",
                    "date": "20240202"
                  }
                ],
                "deliveryTime": {
                  "type": "DEL",
                  "endTime": "120435"
                },
                "activity": [
                  {
                    "location": {
                      "address": {
                        "city": "NEWARK",
                        "stateProvince": "CA",
                        "countryCode": "US",
                        "country": "US"
                      },
                      "slic": "9451"
                    },
                    "status": {
                      "type": "D",
                      "description": "DELIVERED ",
                      "code": "FS",
                      "statusCode": "011"
                    },
                    "date": "20240202",
                    "time": "120435",
                    "gmtDate": "20240202",
                    "gmtOffset": "-08:00",
                    "gmtTime": "20:04:35"
                  },
                  {
                    "location": {
                      "address": {
                        "city": "Fremont",
                        "stateProvince": "CA",
                        "countryCode": "US",
                        "country": "US"
                      },
                      "slic": "9451"
                    },
                    "status": {
                      "type": "I",
                      "description": "Out For Delivery Today",
                      "code": "OT",
                      "statusCode": "021"
                    },
                    "date": "20240202",
                    "time": "084714",
                    "gmtDate": "20240202",
                    "gmtOffset": "-08:00",
                    "gmtTime": "16:47:14"
                  },
                  {
                    "location": {
                      "address": {
                        "city": "Fremont",
                        "stateProvince": "CA",
                        "countryCode": "US",
                        "country": "US"
                      },
                      "slic": "9457"
                    },
                    "status": {
                      "type": "I",
                      "description": "Loaded on Delivery Vehicle ",
                      "code": "OF",
                      "statusCode": "072"
                    },
                    "date": "20240202",
                    "time": "071517",
                    "gmtDate": "20240202",
                    "gmtOffset": "-08:00",
                    "gmtTime": "15:15:17"
                  },
                  {
                    "location": {
                      "address": {
                        "city": "Fremont",
                        "stateProvince": "CA",
                        "countryCode": "US",
                        "country": "US"
                      },
                      "slic": "9458"
                    },
                    "status": {
                      "type": "I",
                      "description": "Processing at UPS Facility",
                      "code": "YP",
                      "statusCode": "071"
                    },
                    "date": "20240202",
                    "time": "062508",
                    "gmtDate": "20240202",
                    "gmtOffset": "-08:00",
                    "gmtTime": "14:25:08"
                  },
                  {
                    "location": {
                      "address": {
                        "city": "Fremont",
                        "stateProvince": "CA",
                        "countryCode": "US",
                        "country": "US"
                      },
                      "slic": "9539"
                    },
                    "status": {
                      "type": "I",
                      "description": "Arrived at Facility",
                      "code": "AR",
                      "statusCode": "005"
                    },
                    "date": "20240201",
                    "time": "211500",
                    "gmtDate": "20240202",
                    "gmtOffset": "-08:00",
                    "gmtTime": "05:15:00"
                  },
                  {
                    "location": {
                      "address": {
                        "city": "Lathrop",
                        "stateProvince": "CA",
                        "countryCode": "US",
                        "country": "US"
                      },
                      "slic": "9539"
                    },
                    "status": {
                      "type": "I",
                      "description": "Departed from Facility",
                      "code": "DP",
                      "statusCode": "005"
                    },
                    "date": "20240201",
                    "time": "194500",
                    "gmtDate": "20240202",
                    "gmtOffset": "-08:00",
                    "gmtTime": "03:45:00"
                  },
                  {
                    "location": {
                      "address": {
                        "city": "Lathrop",
                        "stateProvince": "CA",
                        "countryCode": "US",
                        "country": "US"
                      },
                      "slic": "977AM"
                    },
                    "status": {
                      "type": "I",
                      "description": "Arrived at Facility",
                      "code": "AR",
                      "statusCode": "005"
                    },
                    "date": "20240201",
                    "time": "092400",
                    "gmtDate": "20240201",
                    "gmtOffset": "-08:00",
                    "gmtTime": "17:24:00"
                  },
                  {
                    "location": {
                      "address": {
                        "city": "Salem",
                        "stateProvince": "OR",
                        "countryCode": "US",
                        "country": "US"
                      },
                      "slic": "977AM"
                    },
                    "status": {
                      "type": "I",
                      "description": "We have your package",
                      "code": "OC",
                      "statusCode": "005"
                    },
                    "date": "20240131",
                    "time": "173157",
                    "gmtDate": "20240201",
                    "gmtOffset": "-08:00",
                    "gmtTime": "01:31:57"
                  },
                  {
                    "location": {
                      "address": {
                        "city": "Salem",
                        "stateProvince": "OR",
                        "countryCode": "US",
                        "country": "US"
                      },
                      "slic": "977AM"
                    },
                    "status": {
                      "type": "I",
                      "description": "Departed from Facility",
                      "code": "DP",
                      "statusCode": "005"
                    },
                    "date": "20240131",
                    "time": "171500",
                    "gmtDate": "20240201",
                    "gmtOffset": "-08:00",
                    "gmtTime": "01:15:00"
                  },
                  {
                    "location": {
                      "address": {
                        "countryCode": "US",
                        "country": "US"
                      }
                    },
                    "status": {
                      "type": "M",
                      "description": "Shipper created a label, UPS has not received the package yet. ",
                      "code": "MP",
                      "statusCode": "003"
                    },
                    "date": "20240131",
                    "time": "173405",
                    "gmtDate": "20240201",
                    "gmtOffset": "-08:00",
                    "gmtTime": "01:34:05"
                  }
                ],
                "currentStatus": {
                  "description": "Delivered",
                  "code": "011"
                },
                "packageAddress": [
                  {
                    "type": "ORIGIN",
                    "address": {
                      "city": "SALEM",
                      "stateProvince": "OR",
                      "countryCode": "US",
                      "country": "US"
                    }
                  },
                  {
                    "type": "DESTINATION",
                    "address": {
                      "city": "NEWARK",
                      "stateProvince": "CA",
                      "countryCode": "US",
                      "country": "US"
                    }
                  }
                ],
                "weight": {
                  "unitOfMeasurement": "LBS",
                  "weight": "13.00"
                },
                "service": {
                  "code": "518",
                  "levelCode": "003",
                  "description": "UPS Ground"
                },
                "referenceNumber": [
                  {
                    "type": "SHIPMENT",
                    "number": "1040574710305002"
                  },
                  {
                    "type": "PACKAGE",
                    "number": "111-2855516-2566658"
                  },
                  {
                    "type": "PACKAGE",
                    "number": "QF9SDBSM4"
                  },
                  {
                    "type": "PACKAGE",
                    "number": "NA"
                  },
                  {
                    "type": "PACKAGE",
                    "number": "NA"
                  },
                  {
                    "type": "PACKAGE",
                    "number": "UPS-CALAH-D1161DY3SS  BDS5319    UP"
                  }
                ],
                "deliveryInformation": {
                  "location": "Delivery Photo",
                  "deliveryPhoto": {
                    "photoCaptureInd": "Y",
                    "photoDispositionCode": "V",
                    "isNonPostalCodeCountry": false
                  }
                },
                "dimension": {
                  "height": "15.00",
                  "length": "21.50",
                  "width": "18.00",
                  "unitOfDimension": "IN"
                },
                "packageCount": 1
              }
            ]
          }
        ]
      }
    }
  },
  {
    "orderId": 5782056010028,
    "trackingNumbers": [
      "270872375308"
    ],
    "lineItems": [
      {
        "id": 14690205925676,
        "admin_graphql_api_id": "gid://shopify/LineItem/14690205925676",
        "attributed_staffs": [],
        "current_quantity": 1,
        "fulfillable_quantity": 0,
        "fulfillment_service": "manual",
        "fulfillment_status": "fulfilled",
        "gift_card": false,
        "grams": 5602,
        "name": "13.2 Gallon D-Shape Step-On Kitchen Trash Can - Black",
        "price": "49.68",
        "price_set": {
          "shop_money": {
            "amount": "49.68",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "49.68",
            "currency_code": "USD"
          }
        },
        "product_exists": true,
        "product_id": 8802178203948,
        "properties": [],
        "quantity": 1,
        "requires_shipping": true,
        "sku": "B00419-2",
        "taxable": false,
        "title": "13.2 Gallon D-Shape Step-On Kitchen Trash Can",
        "total_discount": "0.00",
        "total_discount_set": {
          "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
          }
        },
        "variant_id": 47204362092844,
        "variant_inventory_management": null,
        "variant_title": "Black",
        "vendor": "aboutique",
        "tax_lines": [],
        "duties": [],
        "discount_allocations": [],
        "product_id_details": {
          "images": [
            {
              "id": 43031628480812,
              "alt": null,
              "position": 1,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628480812",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru.png?v=1697033983",
              "variant_ids": [
                47204362092844
              ]
            },
            {
              "id": 43031628513580,
              "alt": null,
              "position": 2,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628513580",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628546348,
              "alt": null,
              "position": 3,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628546348",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_51294db4-ae10-4478-941e-fc350a49f434.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628579116,
              "alt": null,
              "position": 4,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628579116",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_707db3e3-992a-4bf2-8580-c3a1a67ad8af.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628611884,
              "alt": null,
              "position": 5,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628611884",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_650d0988-55e1-44b8-9108-7bd20395c0b4.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628644652,
              "alt": null,
              "position": 6,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628644652",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_a966379b-dd4c-44ae-9723-45f7153389e6.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628677420,
              "alt": null,
              "position": 7,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628677420",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_1c198cde-8e49-42e5-9733-e825fcaa6635.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628710188,
              "alt": null,
              "position": 8,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628710188",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry.png?v=1697033983",
              "variant_ids": [
                47204362158380
              ]
            },
            {
              "id": 43031628742956,
              "alt": null,
              "position": 9,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628742956",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628775724,
              "alt": null,
              "position": 10,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628775724",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_b7175d9c-5271-4a99-bbe1-538a3ab0c4ea.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628808492,
              "alt": null,
              "position": 11,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628808492",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_e35ef463-840f-427e-8921-6de9f360b8c9.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628874028,
              "alt": null,
              "position": 12,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628874028",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_e7aeea86-c3fd-4a98-b6e2-65e2a3ee7053.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628939564,
              "alt": null,
              "position": 13,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628939564",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_ac880674-bcd0-4b42-b066-d52fc0619ca6.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628972332,
              "alt": null,
              "position": 14,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628972332",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_86d528e9-4572-4a8c-86ff-005d82b0c27f.jpg?v=1697033983",
              "variant_ids": []
            }
          ]
        }
      },
      {
        "id": 14690205958444,
        "admin_graphql_api_id": "gid://shopify/LineItem/14690205958444",
        "attributed_staffs": [],
        "current_quantity": 1,
        "fulfillable_quantity": 0,
        "fulfillment_service": "manual",
        "fulfillment_status": "fulfilled",
        "gift_card": false,
        "grams": 5602,
        "name": "13.2 Gallon D-Shape Step-On Kitchen Trash Can - Silver",
        "price": "49.68",
        "price_set": {
          "shop_money": {
            "amount": "49.68",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "49.68",
            "currency_code": "USD"
          }
        },
        "product_exists": true,
        "product_id": 8802178203948,
        "properties": [],
        "quantity": 1,
        "requires_shipping": true,
        "sku": "B00419-1",
        "taxable": false,
        "title": "13.2 Gallon D-Shape Step-On Kitchen Trash Can",
        "total_discount": "0.00",
        "total_discount_set": {
          "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
          }
        },
        "variant_id": 47204362158380,
        "variant_inventory_management": null,
        "variant_title": "Silver",
        "vendor": "aboutique",
        "tax_lines": [],
        "duties": [],
        "discount_allocations": [],
        "product_id_details": {
          "images": [
            {
              "id": 43031628480812,
              "alt": null,
              "position": 1,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628480812",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru.png?v=1697033983",
              "variant_ids": [
                47204362092844
              ]
            },
            {
              "id": 43031628513580,
              "alt": null,
              "position": 2,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628513580",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628546348,
              "alt": null,
              "position": 3,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628546348",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_51294db4-ae10-4478-941e-fc350a49f434.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628579116,
              "alt": null,
              "position": 4,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628579116",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_707db3e3-992a-4bf2-8580-c3a1a67ad8af.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628611884,
              "alt": null,
              "position": 5,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628611884",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_650d0988-55e1-44b8-9108-7bd20395c0b4.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628644652,
              "alt": null,
              "position": 6,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628644652",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_a966379b-dd4c-44ae-9723-45f7153389e6.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628677420,
              "alt": null,
              "position": 7,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628677420",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhru_1c198cde-8e49-42e5-9733-e825fcaa6635.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628710188,
              "alt": null,
              "position": 8,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628710188",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry.png?v=1697033983",
              "variant_ids": [
                47204362158380
              ]
            },
            {
              "id": 43031628742956,
              "alt": null,
              "position": 9,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628742956",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628775724,
              "alt": null,
              "position": 10,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628775724",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_b7175d9c-5271-4a99-bbe1-538a3ab0c4ea.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628808492,
              "alt": null,
              "position": 11,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628808492",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_e35ef463-840f-427e-8921-6de9f360b8c9.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628874028,
              "alt": null,
              "position": 12,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628874028",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_e7aeea86-c3fd-4a98-b6e2-65e2a3ee7053.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628939564,
              "alt": null,
              "position": 13,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628939564",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_ac880674-bcd0-4b42-b066-d52fc0619ca6.jpg?v=1697033983",
              "variant_ids": []
            },
            {
              "id": 43031628972332,
              "alt": null,
              "position": 14,
              "product_id": 8802178203948,
              "created_at": "2023-10-11T07:19:43-07:00",
              "updated_at": "2023-10-11T07:19:43-07:00",
              "admin_graphql_api_id": "gid://shopify/ProductImage/43031628972332",
              "width": 800,
              "height": 800,
              "src": "https://cdn.shopify.com/s/files/1/0815/2160/6956/products/d0102hgyhry_86d528e9-4572-4a8c-86ff-005d82b0c27f.jpg?v=1697033983",
              "variant_ids": []
            }
          ]
        }
      }
    ],
    "fedexResponse": {
      "transactionId": "0e2a387f-bed6-41db-ab45-a1818020ae27",
      "output": {
        "completeTrackResults": [
          {
            "trackingNumber": "270872375308",
            "trackResults": [
              {
                "trackingNumberInfo": {
                  "trackingNumber": "270872375308",
                  "trackingNumberUniqueId": "12027~270872375308~FDEG",
                  "carrierCode": "FDXG"
                },
                "additionalTrackingInfo": {
                  "nickname": "",
                  "packageIdentifiers": [
                    {
                      "type": "CUSTOMER_REFERENCE",
                      "values": [
                        "Red Cup Living LLC"
                      ],
                      "trackingNumberUniqueId": "",
                      "carrierCode": ""
                    },
                    {
                      "type": "PURCHASE_ORDER",
                      "values": [
                        "1337"
                      ],
                      "trackingNumberUniqueId": "",
                      "carrierCode": ""
                    },
                    {
                      "type": "INVOICE",
                      "values": [
                        "Website"
                      ],
                      "trackingNumberUniqueId": "",
                      "carrierCode": ""
                    }
                  ],
                  "hasAssociatedShipments": false
                },
                "shipperInformation": {
                  "contact": {},
                  "address": {
                    "city": "Phoenix",
                    "stateOrProvinceCode": "AZ",
                    "countryCode": "US",
                    "residential": false,
                    "countryName": "United States"
                  }
                },
                "recipientInformation": {
                  "contact": {},
                  "address": {
                    "city": "Gaffney",
                    "stateOrProvinceCode": "SC",
                    "countryCode": "US",
                    "residential": false,
                    "countryName": "United States"
                  }
                },
                "latestStatusDetail": {
                  "code": "DL",
                  "derivedCode": "DL",
                  "statusByLocale": "Delivered",
                  "description": "Delivered",
                  "scanLocation": {
                    "city": "Gaffney",
                    "stateOrProvinceCode": "SC",
                    "countryCode": "US",
                    "residential": false,
                    "countryName": "United States"
                  },
                  "ancillaryDetails": [
                    {
                      "reason": "014",
                      "reasonDescription": "Left at front door.Signature Service not requested.",
                      "action": "",
                      "actionDescription": ""
                    }
                  ]
                },
                "dateAndTimes": [
                  {
                    "type": "ACTUAL_DELIVERY",
                    "dateTime": "2024-02-17T12:34:26-05:00"
                  },
                  {
                    "type": "ACTUAL_PICKUP",
                    "dateTime": "2024-02-13T00:00:00-06:00"
                  },
                  {
                    "type": "SHIP",
                    "dateTime": "2024-02-13T00:00:00-06:00"
                  },
                  {
                    "type": "ACTUAL_TENDER",
                    "dateTime": "2024-02-13T00:00:00-06:00"
                  },
                  {
                    "type": "ANTICIPATED_TENDER",
                    "dateTime": "2024-02-12T00:00:00-06:00"
                  }
                ],
                "availableImages": [],
                "packageDetails": {
                  "packagingDescription": {
                    "type": "YOUR_PACKAGING",
                    "description": "Package"
                  },
                  "physicalPackagingType": "PACKAGE",
                  "sequenceNumber": "1",
                  "count": "1",
                  "weightAndDimensions": {
                    "weight": [
                      {
                        "value": "1.0",
                        "unit": "LB"
                      },
                      {
                        "value": "0.45",
                        "unit": "KG"
                      }
                    ]
                  },
                  "packageContent": []
                },
                "shipmentDetails": {
                  "possessionStatus": true
                },
                "scanEvents": [
                  {
                    "date": "2024-02-17T12:34:26-05:00",
                    "eventType": "DL",
                    "eventDescription": "Delivered",
                    "exceptionCode": "014",
                    "exceptionDescription": "Left at front door. Signature Service not requested.",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "Gaffney",
                      "stateOrProvinceCode": "SC",
                      "postalCode": "29341",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationType": "DELIVERY_LOCATION",
                    "derivedStatusCode": "DL",
                    "derivedStatus": "Delivered"
                  },
                  {
                    "date": "2024-02-17T05:36:23-05:00",
                    "eventType": "AE",
                    "eventDescription": "Shipment arriving early",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "SPARTANBURG",
                      "stateOrProvinceCode": "SC",
                      "postalCode": "29301",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0293",
                    "locationType": "VEHICLE",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-17T05:35:00-05:00",
                    "eventType": "OD",
                    "eventDescription": "On FedEx vehicle for delivery",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "SPARTANBURG",
                      "stateOrProvinceCode": "SC",
                      "postalCode": "29301",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0293",
                    "locationType": "VEHICLE",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-17T05:25:00-05:00",
                    "eventType": "AR",
                    "eventDescription": "At local FedEx facility",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "SPARTANBURG",
                      "stateOrProvinceCode": "SC",
                      "postalCode": "29301",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0293",
                    "locationType": "DESTINATION_FEDEX_FACILITY",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-17T05:20:00-05:00",
                    "eventType": "AR",
                    "eventDescription": "Arrived at FedEx location",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "SPARTANBURG",
                      "stateOrProvinceCode": "SC",
                      "postalCode": "29301",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0293",
                    "locationType": "FEDEX_FACILITY",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-16T23:33:21-05:00",
                    "eventType": "DP",
                    "eventDescription": "Departed FedEx location",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "ELLENWOOD",
                      "stateOrProvinceCode": "GA",
                      "postalCode": "30294",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0303",
                    "locationType": "FEDEX_FACILITY",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-16T06:23:00-05:00",
                    "eventType": "AR",
                    "eventDescription": "Arrived at FedEx location",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "ELLENWOOD",
                      "stateOrProvinceCode": "GA",
                      "postalCode": "30294",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0303",
                    "locationType": "FEDEX_FACILITY",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-16T06:05:00-05:00",
                    "eventType": "AR",
                    "eventDescription": "Arrived at FedEx location",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "ELLENWOOD",
                      "stateOrProvinceCode": "GA",
                      "postalCode": "30294",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0303",
                    "locationType": "FEDEX_FACILITY",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-15T23:54:53-05:00",
                    "eventType": "IT",
                    "eventDescription": "On the way",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "DOUGLASVILLE",
                      "stateOrProvinceCode": "GA",
                      "postalCode": "30135",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationType": "VEHICLE",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-15T10:51:13-06:00",
                    "eventType": "IT",
                    "eventDescription": "On the way",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "LONGVIEW",
                      "stateOrProvinceCode": "TX",
                      "postalCode": "75602",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationType": "VEHICLE",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-14T22:41:22-06:00",
                    "eventType": "IT",
                    "eventDescription": "On the way",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "BARSTOW",
                      "stateOrProvinceCode": "TX",
                      "postalCode": "79719",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationType": "VEHICLE",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-14T09:39:57-07:00",
                    "eventType": "DP",
                    "eventDescription": "Departed FedEx location",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "PHOENIX",
                      "stateOrProvinceCode": "AZ",
                      "postalCode": "85043",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0850",
                    "locationType": "FEDEX_FACILITY",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-13T22:07:27-07:00",
                    "eventType": "AO",
                    "eventDescription": "Shipment arriving On-Time",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "PHOENIX",
                      "stateOrProvinceCode": "AZ",
                      "postalCode": "85043",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0850",
                    "locationType": "FEDEX_FACILITY",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-13T22:05:00-07:00",
                    "eventType": "AR",
                    "eventDescription": "Arrived at FedEx location",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "PHOENIX",
                      "stateOrProvinceCode": "AZ",
                      "postalCode": "85043",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0850",
                    "locationType": "FEDEX_FACILITY",
                    "derivedStatusCode": "IT",
                    "derivedStatus": "In transit"
                  },
                  {
                    "date": "2024-02-13T13:41:00-07:00",
                    "eventType": "PU",
                    "eventDescription": "Picked up",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "city": "PHOENIX",
                      "stateOrProvinceCode": "AZ",
                      "postalCode": "85043",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationId": "0851",
                    "locationType": "PICKUP_LOCATION",
                    "derivedStatusCode": "PU",
                    "derivedStatus": "Picked up"
                  },
                  {
                    "date": "2024-02-12T09:20:00-07:00",
                    "eventType": "OC",
                    "eventDescription": "Shipment information sent to FedEx",
                    "exceptionCode": "",
                    "exceptionDescription": "",
                    "scanLocation": {
                      "streetLines": [
                        ""
                      ],
                      "postalCode": "85031",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    },
                    "locationType": "CUSTOMER",
                    "derivedStatusCode": "IN",
                    "derivedStatus": "Label created"
                  }
                ],
                "availableNotifications": [
                  "ON_DELIVERY"
                ],
                "deliveryDetails": {
                  "actualDeliveryAddress": {
                    "city": "Gaffney",
                    "stateOrProvinceCode": "SC",
                    "countryCode": "US",
                    "residential": false,
                    "countryName": "United States"
                  },
                  "deliveryAttempts": "0",
                  "receivedByName": "Signature not required",
                  "deliveryOptionEligibilityDetails": [
                    {
                      "option": "INDIRECT_SIGNATURE_RELEASE",
                      "eligibility": "INELIGIBLE"
                    },
                    {
                      "option": "REDIRECT_TO_HOLD_AT_LOCATION",
                      "eligibility": "INELIGIBLE"
                    },
                    {
                      "option": "REROUTE",
                      "eligibility": "INELIGIBLE"
                    },
                    {
                      "option": "RESCHEDULE",
                      "eligibility": "INELIGIBLE"
                    },
                    {
                      "option": "RETURN_TO_SHIPPER",
                      "eligibility": "INELIGIBLE"
                    },
                    {
                      "option": "DISPUTE_DELIVERY",
                      "eligibility": "POSSIBLY_ELIGIBLE"
                    },
                    {
                      "option": "SUPPLEMENT_ADDRESS",
                      "eligibility": "INELIGIBLE"
                    }
                  ]
                },
                "originLocation": {
                  "locationContactAndAddress": {
                    "address": {
                      "city": "PHOENIX",
                      "stateOrProvinceCode": "AZ",
                      "countryCode": "US",
                      "residential": false,
                      "countryName": "United States"
                    }
                  }
                },
                "lastUpdatedDestinationAddress": {
                  "city": "GAFFNEY",
                  "stateOrProvinceCode": "SC",
                  "countryCode": "US",
                  "residential": false,
                  "countryName": "United States"
                },
                "serviceDetail": {
                  "type": "FEDEX_GROUND",
                  "description": "FedEx Ground",
                  "shortDescription": "FG"
                },
                "standardTransitTimeWindow": {
                  "window": {
                    "ends": "2024-02-19T00:00:00-06:00"
                  }
                },
                "estimatedDeliveryTimeWindow": {
                  "window": {}
                },
                "goodsClassificationCode": "",
                "returnDetail": {}
              }
            ]
          }
        ]
      }
    }
  }]
 
  const [activeTab, setActiveTab] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

 

 

 

  return (
    <Box>
      {orderData.map((item) => (
        <Box
          bgcolor={"#fff"}
          padding={"20px"}
          margin={"60px 0"}
          borderRadius={"10px"}
        >
          <Grid container>
            <Grid item sm={12}>
              <Typography fontFamily={"inherit"} fontSize={"2.2rem"}>
                Order Id - {item.orderId}
              </Typography>
            </Grid>
            <Grid item sm={12} margin={"20px 0"}>
              <Grid container gap={2}>
                {item.lineItems.map((product) => (
                  <Grid
                    flexDirection={"column"}
                    display={"flex"}
                    justifyContent={"center"}
                    height={"300px"}
                    padding={"20px 10px"}
                    bgcolor="#fff"
                    borderRadius={"5px"}
                    border={"1px solid #e5e5e5e5"}
                    item
                    lg={2}
                    md={3}
                    sm={4}
                    key={product.id}
                  >
                    <img
                      className={styles.productImage}
                      src={product?.product_id_details?.images[0]?.src}
                      alt={product?.product_id_details?.images[0]?.alt}
                    />
                    <Typography
                      fontFamily={"inherit"}
                      fontSize="14px"
                      textAlign={"center"}
                    >
                      {product.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Box margin={"10px 0 0 0"}>
            {item.fedexResponse? (item.fedexResponse.output.completeTrackResults.map(
              (trackingData) => (
                <Box>
                  {isSmallScreen ? (
                    <>
                      <Box>
                        <Typography
                          fontFamily={"inherit"}
                          sx={{ textTransform: "uppercase" }}
                          fontSize="12px"
                          fontWeight={700}
                          letterSpacing={"0.8px"}
                          color={"InfoText"}
                        >
                          {
                            trackingData.trackResults[0].scanEvents[0]
                              .eventDescription
                          }
                        </Typography>
                        <Typography
                          fontFamily={"inherit"}
                          fontSize="40px"
                          fontWeight={300}
                          color={"InfoText"}
                        >
                          {moment(
                            trackingData.trackResults[0].scanEvents[0].date
                          ).format("dddd")}
                        </Typography>
                        <Typography
                          fontFamily={"inherit"}
                          fontSize="20px"
                          fontWeight={300}
                          color={"InfoText"}
                        >
                          {moment(
                            trackingData.trackResults[0].scanEvents[0].date
                          ).format("l")}{" "}
                          at{" "}
                          {moment(
                            trackingData.trackResults[0].scanEvents[0].date
                          ).format("LT")}
                        </Typography>
                        <Typography
                          fontFamily={"inherit"}
                          width={"80%"}
                          fontSize="14px"
                          fontWeight={400}
                          color={"InfoText"}
                        >
                          {
                            trackingData.trackResults[0].scanEvents[0]
                              .exceptionDescription
                          }
                        </Typography>
                      </Box>

                      <Box margin={"30px 0"}>
                        <Typography
                          fontFamily={"inherit"}
                          fontSize="12px"
                          fontWeight={700}
                          letterSpacing={"0.8px"}
                          color={"InfoText"}
                        >
                          TRACKING ID
                        </Typography>
                        <Typography
                          fontFamily={"inherit"}
                          margin={"10px 0 10px 0"}
                          fontSize="18px"
                          fontWeight={300}
                          color={"InfoText"}
                        >
                          {trackingData.trackingNumber}
                        </Typography>
                      </Box>

                      <Box className={styles.accordionWrapper}>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Overview
                          </AccordionSummary>
                          <AccordionDetails>
                            <Box marginLeft={"14px"}>
                              <TrackOverview
                                activeTab={activeTab}
                                trackingData={trackingData}
                              />
                            </Box>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Shipment facts
                          </AccordionSummary>
                          <AccordionDetails>
                            <ShipmentFacts
                              packageDetails={
                                trackingData.trackResults[0].packageDetails
                              }
                              serviceDetail={
                                trackingData.trackResults[0].serviceDetail
                              }
                              standardTransitTimeWindow={
                                trackingData.trackResults[0]
                                  .standardTransitTimeWindow
                              }
                              trackingNumberInfo={
                                trackingData.trackResults[0].trackingNumberInfo
                              }
                              dateAndTimes={
                                trackingData.trackResults[0].dateAndTimes
                              }
                            />
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Travel history
                          </AccordionSummary>
                          <AccordionDetails>
                            <TravelHistory
                              scanEvents={
                                trackingData.trackResults[0].scanEvents
                              }
                              activeTab={activeTab}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Tabs
                        value={activeTab}
                        indicatorColor="secondary"
                        textColor="secondary"
                        onChange={handleTabChange}
                      >
                        <Tab
                          sx={{ fontSize: "18px", fontWeight: "300" }}
                          label="Overview"
                          value={0}
                        />
                        <Tab
                          sx={{ fontSize: "18px", fontWeight: "300" }}
                          label="Shipment facts"
                          value={1}
                        />
                        <Tab
                          sx={{ fontSize: "18px", fontWeight: "300" }}
                          label="Travel history"
                          value={2}
                        />
                      </Tabs>

                      <Box role="tabpanel" hidden={activeTab !== 0}>
                        <Grid
                          container
                          className={styles.container}
                          justifyContent={"space-between"}
                          bgcolor={"#fff"}
                          marginTop={"0px"}
                          padding={"30px 20px"}
                        >
                          <Grid item md={3} sm={12}>
                            <Typography
                              fontFamily={"inherit"}
                              sx={{ textTransform: "uppercase" }}
                              fontSize="12px"
                              fontWeight={700}
                              letterSpacing={"0.8px"}
                              color={"InfoText"}
                            >
                              {
                                trackingData.trackResults[0].scanEvents[0]
                                  .eventDescription
                              }
                            </Typography>
                            <Typography
                              fontFamily={"inherit"}
                              fontSize="40px"
                              fontWeight={300}
                              color={"InfoText"}
                            >
                              {moment(
                                trackingData.trackResults[0].scanEvents[0].date
                              ).format("dddd")}
                            </Typography>
                            <Typography
                              fontFamily={"inherit"}
                              fontSize="20px"
                              fontWeight={300}
                              color={"InfoText"}
                            >
                              {moment(
                                trackingData.trackResults[0].scanEvents[0].date
                              ).format("l")}{" "}
                              at{" "}
                              {moment(
                                trackingData.trackResults[0].scanEvents[0].date
                              ).format("LT")}
                            </Typography>
                            <Typography
                              fontFamily={"inherit"}
                              width={"80%"}
                              fontSize="14px"
                              fontWeight={400}
                              color={"InfoText"}
                            >
                              {
                                trackingData.trackResults[0].scanEvents[0]
                                  .exceptionDescription
                              }
                            </Typography>
                          </Grid>
                          <Grid item md={2} sm={12}>
                            <Typography
                              fontFamily={"inherit"}
                              fontSize="12px"
                              fontWeight={700}
                              letterSpacing={"0.8px"}
                              color={"InfoText"}
                            >
                              DELIVERY STATUS
                            </Typography>
                            <Box
                              display={"flex"}
                              gap={1}
                              marginTop={"10px"}
                              alignItems={"center"}
                            >
                              <Typography
                                fontFamily={"inherit"}
                                fontSize="18px"
                                fontWeight={300}
                                color={"InfoText"}
                              >
                                {
                                  trackingData.trackResults[0].scanEvents[0]
                                    .derivedStatus
                                }
                              </Typography>
                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                borderRadius={"50%"}
                                sx={{
                                  background:
                                    trackingData.trackResults[0].scanEvents[0]
                                      .eventType === "DL"
                                      ? "green"
                                      : "#4d148c",
                                }}
                                height={30}
                                width={30}
                              >
                                {trackingData.trackResults[0].scanEvents[0]
                                  .eventType === "DL" ? (
                                  <TaskAltOutlinedIcon
                                    sx={{ fontSize: 18, color: "#fff" }}
                                  />
                                ) : (
                                  <LocalShippingOutlinedIcon
                                    sx={{ fontSize: 18, color: "#fff" }}
                                  />
                                )}
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item md={3} sm={12}>
                            <Typography
                              fontFamily={"inherit"}
                              fontSize="12px"
                              fontWeight={700}
                              letterSpacing={"0.8px"}
                              color={"InfoText"}
                            >
                              TRACKING ID
                            </Typography>
                            <Typography
                              fontFamily={"inherit"}
                              margin={"10px 0 10px 0"}
                              fontSize="18px"
                              fontWeight={300}
                              color={"InfoText"}
                            >
                              {trackingData.trackingNumber}
                            </Typography>
                            <TrackOverview
                              activeTab={activeTab}
                              trackingData={trackingData}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <Box role="tabpanel" hidden={activeTab !== 1}>
                        <ShipmentFacts
                          packageDetails={
                            trackingData.trackResults[0].packageDetails
                          }
                          serviceDetail={
                            trackingData.trackResults[0].serviceDetail
                          }
                          standardTransitTimeWindow={
                            trackingData.trackResults[0]
                              .standardTransitTimeWindow
                          }
                          trackingNumberInfo={
                            trackingData.trackResults[0].trackingNumberInfo
                          }
                          dateAndTimes={
                            trackingData.trackResults[0].dateAndTimes
                          }
                        />
                      </Box>
                      <Box role="tabpanel" hidden={activeTab !== 2}>
                        <TravelHistory
                          scanEvents={trackingData.trackResults[0].scanEvents}
                          activeTab={activeTab}
                        />
                      </Box>
                    </>
                  )}
                </Box>
              )
            )) 
          : (
            <>
            {item.upsResponse.trackResponse.shipment.map((trackingData) => (
              <Box >
                     {isSmallScreen ? (
                    <>
                      <Box>
                        <Typography
                          fontFamily={"inherit"}
                          sx={{ textTransform: "uppercase" }}
                          fontSize="12px"
                          fontWeight={700}
                          letterSpacing={"0.8px"}
                          color={"InfoText"}
                        >
                          {
                            trackingData.package[0].currentStatus.description
                          }
                        </Typography>
                        <Typography
                          fontFamily={"inherit"}
                          fontSize="40px"
                          fontWeight={300}
                          color={"InfoText"}
                        >
                          {moment(
                            trackingData.package[0].activity[0].date
                          ).format("dddd")}
                        </Typography>
                        <Typography
                          fontFamily={"inherit"}
                          fontSize="20px"
                          fontWeight={300}
                          color={"InfoText"}
                        >
                          {moment(
                            trackingData.package[0].activity[0].date
                          ).format("l")}{" "}
                          at{" "}
                          {moment(
                            trackingData.package[0].activity[0].date
                          ).format("LT")}
                        </Typography>
                        {/* <Typography
                          fontFamily={"inherit"}
                          width={"80%"}
                          fontSize="14px"
                          fontWeight={400}
                          color={"InfoText"}
                        >
                          {
                            trackingData.trackResults[0].scanEvents[0]
                              .exceptionDescription
                          }
                        </Typography> */}
                      </Box>

                      <Box margin={"30px 0"}>
                        <Typography
                          fontFamily={"inherit"}
                          fontSize="12px"
                          fontWeight={700}
                          letterSpacing={"0.8px"}
                          color={"InfoText"}
                        >
                          TRACKING ID
                        </Typography>
                        <Typography
                          fontFamily={"inherit"}
                          margin={"10px 0 10px 0"}
                          fontSize="18px"
                          fontWeight={300}
                          color={"InfoText"}
                        >
                          {trackingData.package[0].trackingNumber}
                        </Typography>
                      </Box>

                      <Box className={styles.accordionWrapper}>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Overview
                          </AccordionSummary>
                          <AccordionDetails>
                            <Box marginLeft={"14px"}>
                              <TrackOverviewUps
                                activeTab={activeTab}
                                trackingData={trackingData}
                              />
                            </Box>
                          </AccordionDetails>
                        </Accordion>
                        {/* <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Shipment facts
                          </AccordionSummary>
                          <AccordionDetails>
                            <ShipmentFactsUps
                              packageDetails={
                                trackingData.package[0].weight
                              }
                              serviceDetail={
                                trackingData.package[0].service
                              }
                              standardTransitTimeWindow={
                                trackingData.trackResults[0]
                                  .standardTransitTimeWindow
                              }
                              trackingNumberInfo={
                                trackingData.package[0].trackingNumber
                              }
                              dateAndTimes={
                                trackingData.package[0].deliveryDate
                              }
                            />
                          </AccordionDetails>
                        </Accordion> */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Travel history
                          </AccordionSummary>
                          <AccordionDetails>
                            <TravelHistoryUps
                              scanEvents={
                                trackingData.package[0].activity
                              }
                              activeTab={activeTab}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Tabs
                        value={activeTab}
                        indicatorColor="secondary"
                        textColor="secondary"
                        onChange={handleTabChange}
                      >
                        <Tab
                          sx={{ fontSize: "18px", fontWeight: "300" }}
                          label="Overview"
                          value={0}
                        />
                        <Tab
                          sx={{ fontSize: "18px", fontWeight: "300" }}
                          label="Shipment facts"
                          value={1}
                        />
                        <Tab
                          sx={{ fontSize: "18px", fontWeight: "300" }}
                          label="Travel history"
                          value={2}
                        />
                      </Tabs>

                      <Box role="tabpanel" hidden={activeTab !== 0}>
                        <Grid
                          container
                          className={styles.container}
                          justifyContent={"space-between"}
                          bgcolor={"#fff"}
                          marginTop={"0px"}
                          padding={"30px 20px"}
                        >
                          <Grid item md={3} sm={12}>
                            <Typography
                              fontFamily={"inherit"}
                              sx={{ textTransform: "uppercase" }}
                              fontSize="12px"
                              fontWeight={700}
                              letterSpacing={"0.8px"}
                              color={"InfoText"}
                            >
                              {
                                trackingData.package[0].currentStatus.description
                              }
                            </Typography>
                            <Typography
                              fontFamily={"inherit"}
                              fontSize="40px"
                              fontWeight={300}
                              color={"InfoText"}
                            >
                              {moment(
                             trackingData.package[0].activity[0].date
                              ).format("dddd")}
                            </Typography>
                            <Typography
                              fontFamily={"inherit"}
                              fontSize="20px"
                              fontWeight={300}
                              color={"InfoText"}
                            >
                              {moment(
                                trackingData.package[0].activity[0].date
                              ).format("l")}{" "}
                              at{" "}
                              {moment(
                                trackingData.package[0].activity[0].date
                              ).format("LT")}
                            </Typography>
                            {/* <Typography
                              fontFamily={"inherit"}
                              width={"80%"}
                              fontSize="14px"
                              fontWeight={400}
                              color={"InfoText"}
                            >
                              {
                                trackingData.trackResults[0].scanEvents[0]
                                  .exceptionDescription
                              }
                            </Typography> */}
                          </Grid>
                          <Grid item md={2} sm={12}>
                            <Typography
                              fontFamily={"inherit"}
                              fontSize="12px"
                              fontWeight={700}
                              letterSpacing={"0.8px"}
                              color={"InfoText"}
                            >
                              DELIVERY STATUS
                            </Typography>
                            <Box
                              display={"flex"}
                              gap={1}
                              marginTop={"10px"}
                              alignItems={"center"}
                            >
                              <Typography
                                fontFamily={"inherit"}
                                fontSize="18px"
                                fontWeight={300}
                                color={"InfoText"}
                              >
                                {
                                  trackingData.package[0].currentStatus.description
                                }
                              </Typography>
                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                borderRadius={"50%"}
                                sx={{
                                  background:
                                    trackingData.package[0].currentStatus.code === "011"
                                      ? "green"
                                      : "#4d148c",
                                }}
                                height={30}
                                width={30}
                              >
                                {trackingData.package[0].currentStatus.code === "011" ? (
                                  <TaskAltOutlinedIcon
                                    sx={{ fontSize: 18, color: "#fff" }}
                                  />
                                ) : (
                                  <LocalShippingOutlinedIcon
                                    sx={{ fontSize: 18, color: "#fff" }}
                                  />
                                )}
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item md={3} sm={12}>
                            <Typography
                              fontFamily={"inherit"}
                              fontSize="12px"
                              fontWeight={700}
                              letterSpacing={"0.8px"}
                              color={"InfoText"}
                            >
                              TRACKING ID
                            </Typography>
                            <Typography
                              fontFamily={"inherit"}
                              margin={"10px 0 10px 0"}
                              fontSize="18px"
                              fontWeight={300}
                              color={"InfoText"}
                            >
                              {trackingData.package[0].trackingNumber}
                            </Typography>
                            <TrackOverviewUps
                              activeTab={activeTab}
                              trackingData={trackingData}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                       {/* <Box role="tabpanel" hidden={activeTab !== 1}>
                        <ShipmentFacts
                          packageDetails={
                            trackingData.trackResults[0].packageDetails
                          }
                          serviceDetail={
                            trackingData.trackResults[0].serviceDetail
                          }
                          standardTransitTimeWindow={
                            trackingData.trackResults[0]
                              .standardTransitTimeWindow
                          }
                          trackingNumberInfo={
                            trackingData.trackResults[0].trackingNumberInfo
                          }
                          dateAndTimes={
                            trackingData.trackResults[0].dateAndTimes
                          }
                        />
                      </Box> */}
                      <Box role="tabpanel" hidden={activeTab !== 2}>
                        <TravelHistoryUps
                          scanEvents={trackingData.package[0].activity}
                          activeTab={activeTab}
                        />
                      </Box> 
            
                    </>
                  )}
              </Box>
            ))}
          </>
          
          )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default App;
