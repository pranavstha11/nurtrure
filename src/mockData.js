//1. There are 3 days' worth of data points here:
//   Today: 
//       You will leave today empty so users can insert any new data.
//   Yesterday and the day before: 
//       They are read only data given to you so your webapp can demonstrate the ability to cycle through history.
//
//2. Be aware that common food doen't have "nix_item_id", only branded food has it.
//  Common data requires a initial call to get a list and further details requires an extra call.
//  In order to get the details, depending on the food is branded or not, the API endpoints are different.
//  You will gather these different fileds from Nutritionix API to contruct our data points.
//
//3. Understanding the food calorie calculation
//  Take "chicken salad" for example:
//      "serving_qty": 0.5,
//      "serving_unit": "cup",
//      "serving_weight_grams": 112.1,
//      "nf_calories": 253.99,
//      "serving_size" : 1,
//  That translates into:
//      Two serves of Chicken Salad 0.5 cup, which is 1 cup. Rounding to integer is 224 grams and 508 calories.

export const MOCK_DATA = {
   first_name: 'Ujan',
   last_name: 'Shakya',
   height_cm: 163,
   weight_kg: 57,
   daily_goal: 2000,
   data_points: [
       {
           //today's date
           date: '', 
           //empty, let user do the input
           intake_list: [] 
       },
       {
           //yesterday's date
           date: '', 
           intake_list: [
               {
                   //branded food has nix_item_id, common food doesn't
                   "nix_item_id": "55c9298af0432259369100c4", 
                   "food_name": "Italian sausage",
                   "serving_unit": "link",
                   //weight of "serving_qty"
                   "serving_weight_grams": 75, 
                   //per unit of "nf_calories", see how Nutritionix website demo works
                   "serving_qty": 1, 
                   //that is per "serving_qty", see how Nutritionix website demo works
                   "nf_calories": 258, 
                   //that is how much user ate
                   "serving_size" : 2, 
                   "meal_type": "breakfast",
                   "thumb": "https://d1r9wva3zcpswd.cloudfront.net/55c92acdf04322593691010c.jpeg"
               },
               {
                   "food_name": "salmon salad",
                   "serving_unit": "cup",
                   "serving_weight_grams": 407.01,
                   "serving_qty": 1,
                   "nf_calories": 389.27,
                   "serving_size" : 1.5, 
                   "meal_type": "lunch",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"
               },
               {
                   "food_name": "boneless skinless chicken breasts",
                   "serving_qty": 1,
                   "serving_unit": "breast",
                   "serving_weight_grams": 120,
                   "nf_calories": 198,
                   "serving_size" : 2,
                   "meal_type": "dinner",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/7820_thumb.jpg"

               },
               {
                   "food_name": "slice cheese",
                   "serving_qty": 1,
                   "serving_unit": "slice",
                   "serving_weight_grams": 28,
                   "nf_calories": 113.12,
                   "serving_size" : 2,
                   "meal_type": "snack",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"
               },
               {
                   "food_name": "orange",
                   "serving_qty": 1,
                   "serving_unit": "fruit (2-7/8\" dia)",
                   "serving_weight_grams": 140,
                   "nf_calories": 68.6,
                   "serving_size" : 2,
                   "meal_type": "snack",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"
               },
           ]
       },
       {
           //2 days ago
           date: '', 
           intake_list: [
               {
                   "food_name": "fried eggs",
                   "serving_qty": 1,
                   "serving_unit": "large",
                   "serving_weight_grams": 46,
                   "nf_calories": 90.16,
                   "serving_size" : 2,
                   "meal_type": "breakfast",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/1741_thumb.jpg"
               },
               {
                   "food_name": "chicken salad",
                   "serving_qty": 0.5,
                   "serving_unit": "cup",
                   "serving_weight_grams": 112.1,
                   "nf_calories": 253.99,
                   "serving_size" : 1,
                   "meal_type": "lunch",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"
               },
               {
                   "nix_item_id": "598c0695306b814040ff908b",
                   "food_name": "Boneless Skinless Chicken Breasts",
                   "serving_unit": "oz",
                   "serving_qty": 4,
                   "nf_calories": 110,
                   "serving_size" : 1,
                   "meal_type": "dinner",
                   "thumb": "https://d1r9wva3zcpswd.cloudfront.net/5c04d53ff01a65ec7b2089dd.jpeg"

               },
               {
                   "food_name": "slice cheese",
                   "serving_qty": 1,
                   "serving_unit": "slice",
                   "serving_weight_grams": 28,
                   "nf_calories": 113.12,
                   "serving_size" : 2,
                   "meal_type": "snack",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"
               },
               {
                   "food_name": "orange",
                   "serving_qty": 1,
                   "serving_unit": "fruit (2-7/8\" dia)",
                   "serving_weight_grams": 140,
                   "nf_calories": 68.6,
                   "serving_size" : 2,
                   "meal_type": "snack",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"
               }
           ]
       }
   ],
    data_pregnent:[
        {
            date: '',
            pregnent_list: [
                {
                    "food_name": "Cereals",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 28,
                    "nf_calories": 105.28,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/113_thumb.jpg"
                },
                {
                    "food_name": "Whole Grain Breads",
                    "serving_qty": 6,
                    "serving_unit": "slice",
                    "serving_weight_grams": 192,
                    "nf_calories": 483.84,
                    "serving_size" : 6,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/1862_highres.jpg"
                },
                {
                    "food_name": "Nonfat Milk",
                    "serving_qty": 3,
                    "serving_unit": "cups",
                    "serving_weight_grams": 735,
                    "nf_calories": 249.9,
                    "serving_size" : 3,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/810_thumb.jpg"

                },
                {
                    "food_name": "Fruits",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 162.4,
                    "nf_calories": 96.62,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/1773_thumb.jpg"
                },
                {
                    "food_name": "Beans",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 254,
                    "nf_calories": 238.76,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/229_highres.jpg"
                },
                {
                    "food_name": "Vegetable",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 140.05,
                    "nf_calories": 43.3,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/685_thumb.jpg"
                },
                {
                    "food_name": "Chicken",
                    "serving_qty": 3,
                    "serving_unit": "oz",
                    "serving_weight_grams": 85,
                    "nf_calories": 187,
                    "serving_size" : 3,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/9_highres.jpg"
                },
                {
                    "food_name": "Dark Orange Vegetable",
                    "serving_qty": 1,
                    "serving_unit": "serving",
                    "serving_weight_grams": 154,
                    "nf_calories": 75.46,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"
                },
                {
                    "food_name": "Water",
                    "serving_qty": 8,
                    "serving_unit": "glasses",
                    "serving_weight_grams": 1893.84,
                    "nf_calories": 0,
                    "serving_size" : 8,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/4483_thumb.jpg"
                }

            ]
        }
    ],

    data_weight_gain:[
        {
            date: '',
            weight_list_gain: [
                {
                    "food_name": "Milk",
                    "serving_qty": 2,
                    "serving_unit": "glasses",
                    "serving_weight_grams": 489.96,
                    "nf_calories": 249.88,
                    "serving_size" : 2,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/313_thumb.jpg"
                },
                {
                    "food_name": "Rice",
                    "serving_qty": 3,
                    "serving_unit": "cup",
                    "serving_weight_grams": 474,
                    "nf_calories": 616.2,
                    "serving_size" : 3,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/784_thumb.jpg"
                },
                {
                    "food_name": "Egg",
                    "serving_qty": 5,
                    "serving_unit": "large",
                    "serving_weight_grams": 250,
                    "nf_calories": 357.5,
                    "serving_size" : 5,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/775_thumb.jpg"

                },
                {
                    "food_name": "Peanut Butter",
                    "serving_qty": 2,
                    "serving_unit": "tbsp",
                    "serving_weight_grams": 32,
                    "nf_calories": 188.16,
                    "serving_size" : 2,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/199_thumb.jpg"
                },
                {
                    "food_name": "Beans",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 254,
                    "nf_calories": 238.76,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/229_highres.jpg"
                },
                {
                    "food_name": "Almonds",
                    "serving_qty": 1,
                    "serving_unit": "ounce",
                    "serving_weight_grams": 28.35,
                    "nf_calories": 169.53,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/140_thumb.jpg"
                },
                {
                    "food_name": "Chicken",
                    "serving_qty": 3,
                    "serving_unit": "oz",
                    "serving_weight_grams": 85,
                    "nf_calories": 187,
                    "serving_size" : 3,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/9_highres.jpg"
                },
                {
                    "food_name": "Greek Yogurt",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 226,
                    "nf_calories": 133.74,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/63_thumb.jpg"
                },
                {
                    "food_name": "Strawberries",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 173.5,
                    "nf_calories": 55.52,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/831_thumb.jpg"
                },
                {
                    "food_name": "Chicken Breast",
                    "serving_qty": 4,
                    "serving_unit": "ounces",
                    "serving_weight_grams": 113.4,
                    "nf_calories": 187.11,
                    "serving_size" : 4,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/7820_thumb.jpg"
                },
                {
                    "food_name": "Quinoa",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 185,
                    "nf_calories": 222,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/762_thumb.jpg"
                },
                {
                    "food_name": "Sugar Snap peas",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 160,
                    "nf_calories": 67.2,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/9114_thumb.jpg"
                }

            ]
        }
    ],
    data_weight_loss:[
        {
            date: '',
            weight_list_loss: [
                {
                    "food_name": "Oatmeal",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 234,
                    "nf_calories": 166.14,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/87_thumb.jpg"
                },
                {
                    "food_name": "Peas",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 160,
                    "nf_calories": 134.4,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/728_thumb.jpg"
                },
                {
                    "food_name": "Avocados",
                    "serving_qty": 1,
                    "serving_unit": "unit",
                    "serving_weight_grams": 201,
                    "nf_calories": 300,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/391_thumb.jpg"

                },
                {
                    "food_name": "Cruciferous Vegetables",
                    "serving_qty": 0.5,
                    "serving_unit": "cup",
                    "serving_weight_grams": 91,
                    "nf_calories": 59.15,
                    "serving_size" : 0.5,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/318_thumb.jpg"
                },
                {
                    "food_name": "Berries",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 141.75,
                    "nf_calories": 64.72,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/1788_thumb.jpg"
                },
                {
                    "food_name": "Lentils",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 198,
                    "nf_calories": 150,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/230_thumb.jpg"
                }

            ]
        }
    ],
    data_avoid:[
        {
            date: '',
            avoid_list: [
                {
                    "food_name": "Blue Cheeses",
                    "serving_qty": 1,
                    "serving_unit": "oz",
                    "serving_weight_grams": 28.35,
                    "nf_calories": 100.03,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/422_thumb.jpg"
                },
                {
                    "food_name": "Raw Egg",
                    "serving_qty": 1,
                    "serving_unit": "large",
                    "serving_weight_grams": 50,
                    "nf_calories": 71.5,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/775_thumb.jpg"
                },
                {
                    "food_name": "Raw Meat",
                    "serving_qty": 4,
                    "serving_unit": "oz",
                    "serving_weight_grams": 133.4,
                    "nf_calories": 238.83,
                    "serving_size" : 4,
                    "meal_type": "",
                    "thumb": "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png"

                },
                {
                    "food_name": "Liver",
                    "serving_qty": 1,
                    "serving_unit": "liver",
                    "serving_weight_grams": 44,
                    "nf_calories": 73.48,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/2759_thumb.jpg"
                },
                {
                    "food_name": "Tuna",
                    "serving_qty": 3,
                    "serving_unit": "oz",
                    "serving_weight_grams": 85,
                    "nf_calories": 110.5,
                    "serving_size" : 3,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/229_highres.jpg"
                },
                {
                    "food_name": "Sushi",
                    "serving_qty": 1,
                    "serving_unit": "roll",
                    "serving_weight_grams": 211.07,
                    "nf_calories": 348,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/1719_thumb.jpg"
                },
                {
                    "food_name": "Alcohol",
                    "serving_qty": 1,
                    "serving_unit": "fl oz",
                    "serving_weight_grams": 42,
                    "nf_calories": 97.02,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png"
                }

            ]
        }
    ],
    data_avoid_weight:[
        {
            date: '',
            avoid_list_weight: [
                {
                    "food_name": "French Fries",
                    "serving_qty": 1,
                    "serving_unit": "medium",
                    "serving_weight_grams": 117,
                    "nf_calories": 365.04,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/564_thumb.jpg"
                },
                {
                    "food_name": "Potato Chips",
                    "serving_qty": 1,
                    "serving_unit": "oz",
                    "serving_weight_grams": 28,
                    "nf_calories": 148.96,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/120_thumb.jpg"
                },
                {
                    "food_name": "White Bread",
                    "serving_qty": 1,
                    "serving_unit": "1.3 oz",
                    "serving_weight_grams": 36.8,
                    "nf_calories": 97.89,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/227_thumb.jpg"

                },
                {
                    "food_name": "Candy bars",
                    "serving_qty": 1,
                    "serving_unit": "2 oz",
                    "serving_weight_grams": 57,
                    "nf_calories": 279.89,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/8945_thumb.jpg"
                },
                {
                    "food_name": "Fruit Juices",
                    "serving_qty": 8,
                    "serving_unit": "fl oz",
                    "serving_weight_grams": 237,
                    "nf_calories": 217.98,
                    "serving_size" : 8,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/1161_thumb.jpg"
                },
                {
                    "food_name": "Cakes",
                    "serving_qty": 1,
                    "serving_unit": "piece",
                    "serving_weight_grams": 57,
                    "nf_calories": 261.97,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/320_thumb.jpg"
                },
                {
                    "food_name": "Bear",
                    "serving_qty": 1,
                    "serving_unit": "can or bottle",
                    "serving_weight_grams": 356,
                    "nf_calories": 153.08,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/412_thumb.jpg"
                },
                {
                    "food_name": "Ice Cream",
                    "serving_qty": 1,
                    "serving_unit": "cup",
                    "serving_weight_grams": 132,
                    "nf_calories": 273.24,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/39_thumb.jpg"
                },
                {
                    "food_name": "Pizza",
                    "serving_qty": 1,
                    "serving_unit": "slice",
                    "serving_weight_grams": 107,
                    "nf_calories": 284,
                    "serving_size" : 1,
                    "meal_type": "",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/1060_thumb.jpg"
                }

            ]
        }
    ]
}