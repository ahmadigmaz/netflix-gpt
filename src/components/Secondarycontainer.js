import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const Secondarycontainer = () => {
    const NowPlayingMovies = useSelector((store)=>store?.movies?.nowPlayingMovies);
    const TvShows = useSelector((store)=>store?.movies?.tvShows);
    const pupularMovies = useSelector((store)=>store?.movies?.popular);
    const topRatedMovies = useSelector((store)=>store?.movies?.topRated);
    const upComingMovies = useSelector((store)=>store?.movies?.upcoming);
    if(!NowPlayingMovies || !TvShows || !pupularMovies || !topRatedMovies || !upComingMovies) return;

  return (
   <div className="bg-black flex flex-col relative z-20">
    <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-0 lg:-mt-44">
        <MovieList title="Now Playing Movies" movies={NowPlayingMovies} />
        <MovieList title="TV Shows" movies={TvShows} />
        <MovieList title="Upcoming Movies" movies={upComingMovies} />
        <MovieList title="Top Rated Movies" movies={topRatedMovies} />
        <MovieList title="Top Searches" movies={pupularMovies} />
    </div>
   </div>
  )
}

export default Secondarycontainer