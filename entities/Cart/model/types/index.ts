import {Product, SIZE} from "@/shared";

export type CartItemPosition = {
    product: Product
    size?: SIZE
    quantity: number
}

export type CartSlice = {
    products: CartItemPosition[]
    total: number
}

export type QuantityProduct = {
    productId:number
    quantity: number
}

export type RemoveProduct = {
    productId:number
}

export type AddProduct = {
    product: Product
    size: SIZE
}