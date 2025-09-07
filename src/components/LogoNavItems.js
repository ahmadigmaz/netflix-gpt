import React from 'react'
import { NETFLIX_LOGO } from '../Utils/constants'
import { useSelector } from 'react-redux';

const LogoNavItems = () => {
    const user = useSelector((state) => state.user);
  return (
    <div>
        <div className="flex">
        <img
            src={NETFLIX_LOGO}
            alt="netflix-logo"
            className="w-20 sm:w-28 md:w-32 lg:w-36 xl:w-40 object-contain"
        />
        {user && <ul className="flex flex-wrap md:flex-row text-white font-medium text-sm sm:text-base mt-3 mx-1">
            <li className="m-1 sm:m-2 hover:text-gray-300 cursor-pointer">Home</li>
            <li className="m-1 sm:m-2 hover:text-gray-300 cursor-pointer">TV Shows</li>
            <li className="m-1 sm:m-2 hover:text-gray-300 cursor-pointer">Movies</li>
            <li className="m-1 sm:m-2 hover:text-gray-300 cursor-pointer">Games</li>
        </ul>}
        </div>
    </div>
  )
}

export default LogoNavItems