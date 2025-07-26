import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice"
import  counterReducer from "../Counter/CounterRedux";
import productReducer from "./slice/ProductSlice"

const store=configureStore({
    reduce:{
        cart:cartReducer,
        counter:counterReducer
    }
})
export default store;