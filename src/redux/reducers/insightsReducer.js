import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    skuColumns: ["Sku", "Impressions", "Clicks", "Spend", "Sales", "Orders"],
    customClass: "",
    data: [
        {
            name: "Black T Shirt",
            total: [
                384527,
                2635,
                3930,
                8740,
                1079,
            ],
            platform: [
                {
                    name: "Amazon",
                    periodData:[1,2,3,4,5,6,7],
                    data: [
                        108829,
                        1576,
                        463,
                        989,
                        55
                    ],
                    campaigns: [
                        {
                            name: "amazon-black-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "amazon-black-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                },
                {
                    name: "Google",
                    data: [
                        18829,
                        1176,
                        263,
                        929,
                        15
                    ],
                    campaigns: [
                        {
                            name: "google-black-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "google-black-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Red T Shirt",
            total: [
                301727,
                1115,
                5290,
                2740,
                879
            ],
            platform: [
                {
                    name: "Amazon",
                    data: [
                        218829,
                        1276,
                        269,
                        289,
                        13
                    ],
                    campaigns: [
                        {
                            name: "amazon-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "amazon-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                },
                {
                    name: "Google",
                    data: [
                        882921,
                        1216,
                        221,
                        2219,
                        21
                    ],
                    campaigns: [
                        {
                            name: "google-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "google-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Pink T Shirt",
            total: [
                399727,
                2115,
                5190,
                9740,
                179
            ],
            platform: [
                {
                    name: "Amazon",
                    data: [
                        399727,
                2115,
                5190,
                9740,
                11
                    ],
                    campaigns: [
                        {
                            name: "amazon-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "amazon-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                },
                {
                    name: "Google",
                    data: [
                        9727,
                        15,
                        519,
                        19740,
                        21
                    ],
                    campaigns: [
                        {
                            name: "google-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "google-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Purple T Shirt",
            total: [
                199727,
                115,
                190,
                740,
                279
            ],
            platform: [
                {
                    name: "Amazon",
                    data: [
                        199727,
                115,
                190,
                740,
                279
                    ],
                    campaigns: [
                        {
                            name: "amazon-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "amazon-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                },
                {
                    name: "Google",
                    data: [
                        727,
                415,
                143,
                720,
                149
                    ],
                    campaigns: [
                        {
                            name: "google-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "google-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Blue T Shirt",
            total: [12345, 67890, 24680, 13579, 999999],
            platform: [
                {
                    name: "Amazon",
                    data: [
                        108829,
                        1576,
                        463,
                        989,
                        55
                    ],
                    campaigns: [
                        {
                            name: "amazon-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "amazon-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                },
                {
                    name: "Google",
                    data: [
                        31371,
                        55,
                        34,
                        345,
                       59
                    ],
                    campaigns: [
                        {
                            name: "google-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "google-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Maroon T Shirt",
            total:[267401, 492365, 77757, 922995, 431793],
            platform: [
                {
                    name: "Amazon",
                    data: [
                        "108,829",
                        "1,576",
                        "463",
                        "989",
                        "55"
                    ],
                    campaigns: [
                        {
                            name: "amazon-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "amazon-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                },
                {
                    name: "Google",
                    data: [
                        "31,371",
                        "55",
                        "$34",
                        "$345",
                        "59"
                    ],
                    campaigns: [
                        {
                            name: "google-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "google-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Gray T Shirt",
            total:[123456, 789012, 345678, 901234, 567890],
            platform: [
                {
                    name: "Amazon",
                    data: [
                        "108,829",
                        "1,576",
                        "463",
                        "989",
                        "55"
                    ],
                    campaigns: [
                        {
                            name: "amazon-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "amazon-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                },
                {
                    name: "Google",
                    data: [
                        "31,371",
                        "55",
                        "$34",
                        "$345",
                        "59"
                    ],
                    campaigns: [
                        {
                            name: "google-red-t-shirt-campaign-1",
                            data: [
                                "10,229",
                                "576",
                                "63",
                                "99",
                                "55"
                            ]
                        },
                        {
                            name: "google-red-t-shirt-campaign-2",
                            data: [
                                "8,421",
                                "806",
                                "163",
                                "940",
                                "15"
                            ]
                        }
                    ]
                }
            ]
        },
    ],

}

export const insightsData = createReducer(initialState, {

})