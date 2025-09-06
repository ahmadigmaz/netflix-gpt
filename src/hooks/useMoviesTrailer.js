import  { useEffect } from 'react'
import { options } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addVideoTrailers } from '../Utils/movieSlice';

const useMoviesTrailer = (id) =>{
    const dispatch = useDispatch();

    const fetchTrailer = async () =>{
        const data =  await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
        const json = await data.json()
        const trailers = json.results.filter((video)=>video.type=="Trailer");
        const trailer = trailers.length?trailers[0]:json.results[0];
        dispatch(addVideoTrailers(trailer)); 
    }
    useEffect(()=>{
    fetchTrailer();
    },[])
}

export default useMoviesTrailer