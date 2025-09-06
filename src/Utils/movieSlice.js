import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    videoTrailers: null,
    tvShows: null,
    topRated: null,
    popular: null,
    upcoming: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addVideoTrailers: (state, action) => {
      state.videoTrailers = action.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addVideoTrailers,
  addTvShows,
  addTopRated,
  addPopular,
  addUpcoming,
} = movieSlice.actions;

export default movieSlice.reducer;
