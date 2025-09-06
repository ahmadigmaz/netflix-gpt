import React from 'react'
import { Play } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[20%] px-6 md:px-16 lg:px-24 absolute bg-gradient-to-r from-black w-screen aspect-video'>
      
      {/* Title */}
      <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white'>
        {title}
      </h1>

      {/* Overview */}
      <p className='py-4 sm:py-6 text-sm sm:text-base md:text-lg lg:text-xl text-white w-full md:w-3/4 lg:w-1/2'>
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button className="self-start flex items-center justify-center gap-2 bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-md hover:bg-opacity-80 transition">
          <Play className="w-4 h-4 sm:w-5 sm:h-5" /> Play
        </button>
        <button className="self-start flex items-center justify-center gap-2 bg-gray-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-md bg-opacity-60 hover:bg-opacity-40 transition">
          More Info
        </button>
      </div>
  </div>
  )
}

export default VideoTitle
