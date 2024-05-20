import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "@/entities/Cart/model/slice/cart.slice";
import {productApi} from "@/entities/Product/model/api/product.api";
import {orderApi} from "@/entities/Order/api/order.api";

const rootReducer = combineReducers({
    cartReducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat(productApi.middleware).concat(orderApi.middleware)
})

export type StoreAppType = typeof store
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch