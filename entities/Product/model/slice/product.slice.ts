import {ProductSlice} from "@/entities/Product/model/types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: ProductSlice = {
    products: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
})