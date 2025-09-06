import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated} from "../Utils/movieSlice";

const useTopRated = () =>{
    const dispatch = useDispatch();

    const getTopRatedMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const json = await data.json();
        dispatch(addTopRated(json.results))
    }
    useEffect(()=>{
        getTopRatedMovies();
    },[])
}

export default useTopRated;