import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTvShows } from "../Utils/movieSlice";

const useTvShows = () =>{
    const dispatch = useDispatch();

    const getTvShows = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
        const json = await data.json();
        dispatch(addTvShows(json.results))
    }
    useEffect(()=>{
        getTvShows();
    },[])

}

export default useTvShows;