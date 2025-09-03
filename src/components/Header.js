import { NETFLIX_LOGO } from "../Utils/constants"
const Header = () => {
  return (
    <div className='absolute inset-x-0 top-0 z-50 px-48 py-4 bg-gradient-to-b from-black/80 to-transparent z-10'>
        <img src= {NETFLIX_LOGO}
         alt='netflix-logo'
         className="w-72"
        />
    </div>
  )
}

export default Header