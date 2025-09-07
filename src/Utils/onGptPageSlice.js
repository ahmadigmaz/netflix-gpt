import { createSlice } from "@reduxjs/toolkit";

const onGptPageSlice = createSlice({
    name:"Gpt",
    initialState:false,
    reducers:{
        ToggleGptPage: (state) => !state
    }
})

export const {ToggleGptPage} = onGptPageSlice.actions
export default onGptPageSlice.reducer