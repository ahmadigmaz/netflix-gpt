import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const Secondarycontainer = () => {
    const NowPlayingMovies = useSelector((store)=>store?.movies?.nowPlayingMovies);
    const TvShows = useSelector((store)=>store?.movies?.tvShows);
    if(!NowPlayingMovies) return;
    if(!TvShows) return;

  return (
   <div className="bg-black flex flex-col">
    <div className="sm:-mt-0 md:-mt-0 lg:-mt-44 relative z-20">
        <MovieList title="Now Playing Movies" movies={NowPlayingMovies} />
        <MovieList title="TV Shows" movies={TvShows} />
        <MovieList title="Upcoming Movies" movies={NowPlayingMovies} />
        <MovieList title="Top Searches" movies={TvShows} />
    </div>
   </div>
  )
}

export default Secondarycontainer