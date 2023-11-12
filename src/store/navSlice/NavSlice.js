import { createSlice } from "@reduxjs/toolkit"

const NavSlice = createSlice({
    name:"navSlice",
    initialState: {
        isNavOpen:false
    },
    reducers: {
        // actions 
        NAVHANDLE: (state) => {
            state.isNavOpen = !state.isNavOpen
        },
    },
})

export const { NAVHANDLE } = NavSlice.actions;
export default NavSlice.reducer;