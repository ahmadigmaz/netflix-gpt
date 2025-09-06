import React from 'react'
import { CARD_IMAGE_URL } from '../Utils/constants'

const MovieCard = ({movieName, movieImage}) => {
   
  return (
    <div className='m-1 p-1'>
        <img 
        src={CARD_IMAGE_URL + movieImage} 
        alt="card-image" 
        className="w-36 md:w-44 aspect-[2/3] rounded-md shadow-md object-cover transition duration-300 ease-in-out hover:scale-110 hover:z-10 cursor-pointer" 
        />
    </div>
  )
}

export default MovieCard