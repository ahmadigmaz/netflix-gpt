import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = ({title,movies}) => {
  const searchQuery = useSelector((store)=>store.searchQuery);
  const filterMovies = movies?.filter((movie)=>movie.title?.toLowerCase().includes(searchQuery.toLowerCase()));
  if(!filterMovies?.length) return null;
  return (
    <div className='flex flex-col mx-4 p-1'>
        <h1 className='text-white font-bold font-serif text-lg m-1 px-2'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            { filterMovies.map((movie)=>
            <div  key={movie.id} className="w-40 flex-shrink-0">
            <MovieCard 
            movieName = {movie.title} 
            movieImage = {movie.poster_path}/>
            </div>
            )}
        </div>
    </div>
  )
}

export default MovieList