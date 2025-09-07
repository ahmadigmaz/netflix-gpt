import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { ChevronDown, LogOut, HelpCircle, User, Users, Search } from "lucide-react";

const SearchIcon = () => {
    const user = useSelector((state) => state.user);
    const [isSearchIconOpen, setIsSearchIconOpen] = useState(false);
    const searchHandler = () =>{
    setIsSearchIconOpen(!isSearchIconOpen)
    }

  return (
    <div>
        
    {user && (
    <div className="flex items-center justify-end relative px-72">
      <div
        className={`flex items-center border border-white rounded-md overflow-hidden transition-all duration-300 ease-in-out 
        ${isSearchIconOpen ? "w-64 sm:w-72 md:w-80 lg:w-96" : "w-10"} 
        absolute right-0`}
      >
        <Search
          onClick={searchHandler}
          className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer mx-2 hover:text-gray-300 transition-colors duration-200"
        />
        {isSearchIconOpen && (
          <input
            type="text"
            placeholder="Titles, people, genres"
            autoFocus
            className="bg-black text-white placeholder-gray-400 focus:outline-none px-2 w-full"
          />
        )}
      </div>
    </div>
  )}
    </div>
  )
}

export default SearchIcon