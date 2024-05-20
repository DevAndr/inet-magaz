import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQueryFetch} from "@/shared/api";
import {Product, ResponsePagination} from "@/shared";

export const productApi = createApi({
    reducerPath: 'product',
    refetchOnReconnect: true,
    baseQuery: baseQueryFetch,
    endpoints: (build) => ({
        getProduct: build.mutation<ResponsePagination<Product>, { page: number }>({
            query: ({page}) => {

                return ({
                    url: '/product',
                    method: 'GET',
                    params: {page}
                })
            }
        }),
        getDetailsProduct: build.query<Product, {id: string}>({
            query: ({id}) => {

                return ({
                    method: 'GET',
                    url: `/product/${id}`
                })
            }
        })
    })
})

export const {useGetProductMutation, useGetDetailsProductQuery} = productApi