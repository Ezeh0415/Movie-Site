import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./navSlice/NavSlice";

// store creation 

const store = configureStore({
    reducer: {
        navSlice: NavSlice
    }
})

export default store;