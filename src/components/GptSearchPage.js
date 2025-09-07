import { BACKGROUND_IMAGE } from '../Utils/constants'
import GptChatInput from './GptInput'

const GptSearchPage = () => {
  return (
    <div className="relative w-full h-screen">
        <img 
            src={BACKGROUND_IMAGE}
            alt="background-img"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <GptChatInput/>
    </div>
  )
}

export default GptSearchPage