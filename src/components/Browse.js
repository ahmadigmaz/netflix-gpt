import { useSelector } from 'react-redux'
import Footer from './Footer'
import Header from './Header'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import GptSearchPage from './GptSearchPage'

const Browse = () => {
  const gpt = useSelector((store)=>store.gpt);

  return (
    <div>
      <Header/>
      {gpt?<GptSearchPage/>:
      <>
      <Maincontainer/>
      <Secondarycontainer/>
      <Footer/>
      </>}
    </div>
    
  )
}

export default Browse