import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "lucide-react";
import { addQuery } from "../Utils/searchQuerySlice";

const SearchIcon = () => {
  const user = useSelector((state) => state.user);
  const [isSearchIconOpen, setIsSearchIconOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  dispatch(addQuery(query));
  const searchHandler = () => {
    setIsSearchIconOpen(!isSearchIconOpen);
  };

  return (
    <>
      {user && (
        <div className="relative flex items-center">
          <div
            className={`flex items-center border border-white rounded-md overflow-hidden transition-all duration-300 ease-in-out
            ${isSearchIconOpen ? "w-40 sm:w-56 md:w-72 lg:w-96" : "w-10"}
            `}
          >
            <Search
              onClick={searchHandler}
              className="text-white w-5 h-5 cursor-pointer mx-2 hover:text-gray-300 transition-colors duration-200"
            />
            {isSearchIconOpen && (
              <input
                value={query}
                type="text"
                placeholder="Titles, people, genres"
                autoFocus
                className="bg-black text-white placeholder-gray-400 focus:outline-none px-2 w-full text-sm sm:text-base"
                onChange={(e) => setQuery(e.target.value)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchIcon;
