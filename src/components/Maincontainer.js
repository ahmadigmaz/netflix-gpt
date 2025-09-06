import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';

const Maincontainer = () => {
    const movieList = useSelector((store)=>store?.movies?.nowPlayingMovies);
    if(!movieList) return;
    const mainMovie = movieList[2];
  //  console.log(mainMovie.id);
  return (
    <div>
        <VideoTitle title = {mainMovie.original_title} overview = {mainMovie.overview}/>
        <VideoBackground id = {mainMovie.id} />
    </div>
  )
}

export default Maincontainer