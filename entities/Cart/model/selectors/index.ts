import {RootState} from "@/app/store";
import {createSelector} from "reselect";

export const productInSelect = createSelector((state: RootState) => state.cartReducer.products,
    (state: RootState, idProduct: number) => idProduct, (products, id) => {
        return products.find(p => p.product.id === id)
    })

export const countItemsInCartSelect = createSelector((state: RootState) => state.cartReducer.products, (items) => {
    return items.length
})