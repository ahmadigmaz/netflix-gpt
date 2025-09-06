import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../Utils/movieSlice";

const usePopular = () =>{
    const dispatch = useDispatch();

    const getPupularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const json = await data.json();
        dispatch(addPopular(json.results))
    }
    useEffect(()=>{
        getPupularMovies();
    },[])
}

export default usePopular;