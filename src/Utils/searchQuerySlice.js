import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
    name: "searchQuery",
    initialState: "",
    reducers:{
        addQuery:(state,action)=>{
           return action.payload
        }
    }
})
export const {addQuery} = searchQuerySlice.actions
export default searchQuerySlice.reducer