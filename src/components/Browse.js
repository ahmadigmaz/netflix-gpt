import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'

const Browse = () => {
 useNowPlayingMovies()

  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
    
  )
}

export default Browse