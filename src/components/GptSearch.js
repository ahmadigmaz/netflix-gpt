import React, { useState } from 'react'
import { ToggleGptPage } from '../Utils/onGptPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const GptSearch = () => {
    const user = useSelector((store)=>store.user);
    const [onGptPage, setOnGptPage] = useState(false);
    const dispatch = useDispatch()
    const GptButtonHandler = () =>{
        setOnGptPage(!onGptPage);
        dispatch(ToggleGptPage(onGptPage))
    }
  return (<div>
    {user && <button 
    className="px-3 sm:px-4 py-1.5 sm:py-2  bg-red-600 text-white text-xs sm:text-sm font-medium  rounded-md  hover:bg-red-700 transition-colors duration-200 whitespace-nowrap"
    onClick={GptButtonHandler}
    >
      {onGptPage?"Go Back to Browse":"AI Suggestions"}
    </button>}
    </div>
  )
}

export default GptSearch
