import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "@/shared";
import {AddProduct, CartSlice, QuantityProduct, RemoveProduct} from "@/entities/Cart/model/types";

const initialState: CartSlice = {
    products: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartProduct(state, action: PayloadAction<Product>) {
            state.products.push({
                product: action.payload,
                quantity: 1,
            })

            state.total += action.payload.priceInCents / 100
        },
        addToCartProductAndSize(state, action: PayloadAction<AddProduct>) {
            const {product, size} = action.payload

            state.products.push({
                product,
                size,
                quantity: 1,
            })

            state.total += product.priceInCents / 100
        },
        quantityCatItem(state, action: PayloadAction<QuantityProduct>) {
            const found = state.products.find(p => p.product.id === action.payload.productId)

            if (found) {
                found.quantity = action.payload.quantity;
            }
        },
        removeFromCart(state, action: PayloadAction<RemoveProduct>) {
            state.products = state.products.filter(p => p.product.id != action.payload.productId)
        },
        clearCart(state){
            state.products = []
            state.total = 0
        }
    },
})

export const {addToCartProduct, addToCartProductAndSize, clearCart, removeFromCart, quantityCatItem} = cartSlice.actions
export default cartSlice.reducer