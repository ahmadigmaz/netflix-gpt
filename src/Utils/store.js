import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import searchQueryReducer from './searchQuerySlice'
import gptReducer from './onGptPageSlice'

const store = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:movieReducer, 
            searchQuery:searchQueryReducer,
            gpt:gptReducer
        }
    }
)

export default store;