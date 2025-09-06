import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:null,
        videoTrailers:null,
        tvShows:null
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies =  action.payload;
        },
        addVideoTrailers:(state,action) =>{
            state.videoTrailers = action.payload;
        },
        addTvShows:(state,action) =>{
            state.tvShows = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addVideoTrailers, addTvShows} = movieSlice.actions;
export default movieSlice.reducer;