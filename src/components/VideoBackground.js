import {  useSelector } from 'react-redux'
import useMoviesTrailer from '../hooks/useMoviesTrailer'


const VideoBackground = ({id}) => {
    const key = useSelector((store)=>store?.movies?.videoTrailers?.key);
    useMoviesTrailer(id);

  return (
    <div className=''>
         <iframe 
            className='w-screen aspect-video'
            src={
            "https://www.youtube.com/embed/" + key +
            "?autoplay=1&mute=1&loop=1&playlist=" + key + "&controls=0&modestbranding=1&showinfo=0"
            }
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
        />
    </div>
  )
}

export default VideoBackground