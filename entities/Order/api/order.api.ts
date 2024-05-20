import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQueryFetch} from "@/shared/api";
import {OrderResponse, PayloadOrder} from "@/shared";
import {clearCart} from "@/entities/Cart/model/slice/cart.slice";

export const orderApi = createApi({
    reducerPath: 'order',
    refetchOnReconnect: true,
    baseQuery: baseQueryFetch,
    endpoints: (build) => ({
        createOrder: build.mutation<OrderResponse, PayloadOrder>({
            query: ({products}) => {
                return ({
                    url: '/checkout/placeOrder',
                    method: 'POST',
                    body: {
                        products
                    }
                })
            }, async onQueryStarted(args, {dispatch, queryFulfilled, requestId}): Promise<void> {
                const {data} = await queryFulfilled

                if (data && data.orderId)
                    dispatch(clearCart())
            }
        })
    })
})

export const {useCreateOrderMutation} = orderApi