import { createSlice } from "@reduxjs/toolkit"
import products from "../../Shopping/Data/products"

const initialState={
    item:products
}

const productsSlice=createSlice({
    name:"productsSlice",
    initialState
})

export default productsSlice.reducer;