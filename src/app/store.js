import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from '../features/auth/authSlice'
// import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authReducer
    },
    devTools:true,
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})