import React from 'react'
import { NETFLIX_LOGO } from '../Utils/constants'
import { useSelector } from 'react-redux';

const LogoNavItems = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="flex items-center">
        {/* logo always visible; flex-shrink-0 prevents it from shrinking away */}
        <img
          src={NETFLIX_LOGO}
          alt="netflix-logo"
          className="w-20 sm:w-28 md:w-32 lg:w-36 xl:w-40 object-contain flex-shrink-0"
        />

        {/* nav items hidden on small/medium, visible only on lg+ */}
        {user && (
          <ul className="hidden lg:flex lg:flex-row text-white font-medium text-sm sm:text-base ml-4 space-x-3">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">TV Shows</li>
            <li className="hover:text-gray-300 cursor-pointer">Movies</li>
            <li className="hover:text-gray-300 cursor-pointer">Games</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default LogoNavItems
