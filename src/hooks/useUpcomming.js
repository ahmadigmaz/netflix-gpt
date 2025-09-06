import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../Utils/movieSlice";

const useUpcomming = () =>{
    const dispatch = useDispatch();

    const getUpcommingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const json = await data.json();
        dispatch(addUpcoming(json.results))
    }
    useEffect(()=>{
        getUpcommingMovies();
    },[])

}

export default useUpcomming;