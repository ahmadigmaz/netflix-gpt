import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { options } from "../Utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
  const dispatch = useDispatch()

  const NowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const movieList = await data.json();
    dispatch(addNowPlayingMovies(movieList.results))
  }
  useEffect(()=>{
    NowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;