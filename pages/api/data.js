// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      "categories": [
        {
          "category_name": "motores",
          "sub_categories": [
            {
              "sub_category_name": "motores de garaje",
              "products": [
                {
                  "product_name": "cyborg panther",
                  "sku": "1500",
                  "ref": "PTHR1500",
                },
                {
                  "product_name": "scorpion",
                  "sku": "900",
                  "ref": "SC900",
                },
                {
                  "product_name": "raptor",
                  "sku": "1200",
                  "ref": "RP1200",
                },
                {
                  "product_name": "fox",
                  "sku": "1000 pro",
                  "ref": "FX1000PRO",
                }
              ]
            },
            {
              "sub_category_name": "motores para puertas corredizas",
              "products": [
                {
                  "product_name": "pitbull",
                  "sku": "400",
                  "ref": "PB400",
                },
                {
                  "product_name": "bulldozer",
                  "sku": "824",
                  "ref": "BD824",
                },
                {
                  "product_name": "bulldozer",
                  "sku": "850",
                  "ref": "BD850",
                },
                {
                  "product_name": "BULLDOG",
                  "sku": "1100",
                  "ref": "BD1100",
                },
                {
                  "product_name": "dogo",
                  "sku": "1224",
                  "ref": "DG1224",
                },
                {
                  "product_name": "bulldog",
                  "sku": "1522",
                  "ref": "BD1522",
                }
              ]
            },
            {
              "sub_category_name": "motores para puertas abatibles",
              "products": [
                {
                  "product_name": "fenix",
                  "sku": "600",
                  "ref": "FENIX600",
                },
                {
                  "product_name": "caimano",
                  "sku": "7000",
                  "ref": "CM7000",
                },
                {
                  "product_name": "caimano",
                  "sku": "2500",
                  "ref": "CM2500",
                },
                {
                  "product_name": "eagle",
                  "sku": "500",
                  "ref": "EG500",
                },
                {
                  "product_name": "eagle",
                  "sku": "250",
                  "ref": "EG250",
                }
              ]
            },
            {
              "sub_category_name": "motores para cortinas enrollables",
              "products": [
                {
                  "product_name": "armadillo",
                  "sku": "170",
                  "ref": "AR170",
                },
                {
                  "product_name": "armadillo",
                  "sku": "200",
                  "ref": "AR200",
                },
                {
                  "product_name": "armadillo",
                  "sku": "380",
                  "ref": "AR380",
                },
                {
                  "product_name": "hulk",
                  "sku": "550dc",
                  "ref": "HULK550DC",
                },
                {
                  "product_name": "hulk",
                  "sku": "450",
                  "ref": "HULK450",
                }
              ]
            }
          ]
        },
        {
          "category_name": "puertas",
          "sub_categories": [
            {
              "sub_category_name": "puertas residenciales",
              "products": [
                {
                  "product_name": "puertas",
                  "sku": "residenciales",
                  "ref": "KP200C-KP975R",
                }
              ]
            },
            {
              "sub_category_name": "puertas industriales",
              "products": [
                {
                  "product_name": "puertas",
                  "sku": "detroit",
                  "ref": "USOINDUSTRIAL",
                }
              ]
            }
          ]
        },
        {
          "category_name": "cabezales",
          "sub_categories": [
            {
              "sub_category_name": "puertas automaticas",
              "products": [
                {
                  "product_name": "viper",
                  "sku": "350",
                  "ref": "VIPER350",
                },
                {
                  "product_name": "viper",
                  "sku": "200",
                  "ref": "VIPER200",
                },
                {
                  "product_name": "viper",
                  "sku": "100",
                  "ref": "VIPER100",
                },
                {
                  "product_name": "avalon",
                  "sku": "4200",
                  "ref": "AV4200",
                }
              ]
            }
          ]
        },
        {
          "category_name": "talanqueras",
          "sub_categories": [
            {
              "sub_category_name": "barreras electrónicas",
              "products": [
                {
                  "product_name": "axis",
                  "sku": "311r - 330l",
                  "ref": "311R-330L",
                },
                {
                  "product_name": "axis",
                  "sku": "450 t",
                  "ref": "A450T",
                },
                {
                  "product_name": "axis",
                  "sku": "423r - 430l - 625r - 620l",
                  "ref": "423R-430L-625R-620L",
                }
              ]
            }
          ]
        },
        {
          "category_name": "herrajes y partes",
          "sub_categories": [
            {
              "sub_category_name": null,
              "products": [
                {
                  "product_name": "auackh",
                  "sku": "55k",
                  "ref": "AUACKH55K",
                },
                {
                  "product_name": "auackh",
                  "sku": "61k",
                  "ref": "AUACKH61K",
                },
                {
                  "product_name": "auackh",
                  "sku": "70k",
                  "ref": "AUACKH70K",
                },
                {
                  "product_name": "auackh",
                  "sku": "83k",
                  "ref": "AUACKH83K",
                },
                {
                  "product_name": "auackh",
                  "sku": "100k",
                  "ref": "AUACKH5100K",
                }
              ]
            }
          ]
        },
        {
          "category_name": "accesorios",
          "sub_categories": [
            {
              "sub_category_name": null,
              "products": [
                {
                  "product_name": "owl",
                  "sku": "608",
                  "ref": "OWL608",
                },
                {
                  "product_name": "ap",
                  "sku": "40",
                  "ref": "AP40",
                },
                {
                  "product_name": "os100",
                  "sku": "250w",
                  "ref": "OS100250W",
                },
                {
                  "product_name": "ac",
                  "sku": "24ne",
                  "ref": "AC24NE",
                },
                {
                  "product_name": "access cam",
                  "sku": "p4",
                  "ref": "ACAMP4",
                },
                {
                  "product_name": "omni",
                  "sku": "pulse",
                  "ref": "OP3090W",
                },
                {
                  "product_name": "al",
                  "sku": "p4",
                  "ref": "ALP4",
                },
                {
                  "product_name": "ac",
                  "sku": "265",
                  "ref": "AC265",
                },
                {
                  "product_name": "rs95",
                  "sku": "25k",
                  "ref": "RS9525K",
                }
              ]
            }
          ]
        }
      ]
    }
  )
}
