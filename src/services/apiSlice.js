import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://dummyjson.com/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
    
            if (token != null || undefined) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
        credentials: 'include',
        
    }),
    endpoints:(builder)=>({
        getAllProducts: builder.query({
            query:()=>"products",
        }),
    }),
})

// export const chartsDataApi = createApi({
//     reducerPath:"chartsDataApi",
//     baseQuery:fetchBaseQuery({
//         baseUrl:process.env.REACT_APP_BASE_URL,
//         prepareHeaders: (headers) => {
//             const token = localStorage.getItem("token");
    
//             if (token != null || undefined) {
//                 headers.set('Authorization', `Bearer ${token}`)
//             }
//             return headers
//         },
//         credentials: 'include',
//     }),
//     endpoints:(builder)=>({
//         getChartData:builder.query({
//             query:()=>"dummychartdata"
//         })
//     })
// })

export const {useGetAllProductsQuery} = productsApi;