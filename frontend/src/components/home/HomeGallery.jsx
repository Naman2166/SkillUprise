import React from 'react'
import { assets } from '../../assets/assets'

const HomeGallery = () => {
  return (
    <div className="mt-12 w-full py-14 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col gap-4">


        <div className='flex flex-col md:flex-row justify-between gap-4 px-3'>
          {/* Heading */}
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold [word-spacing:2px] sm:[word-spacing:4px] text-black text-center sm:text-left px-2 sm:px-3 leading-snug">
            Latest Gallery Of <br />
            <span className='text-blue-400'> Our Team In Action! </span>
          </h2>

          {/* Filter Buttons */}
          <div className='flex justify-center items-end gap-2 sm:gap-3 font-medium text-sm sm:text-base'>
            <button className='border border-gray-600 text-gray-600 rounded-4xl px-3 sm:px-4 py-1 sm:py-1.5 hover:text-gray-700 hover:border-2 hover:border-gray-700 hover:font-semibold transition'>
              All Images
            </button>
            <button className='border border-gray-600 text-gray-600 rounded-4xl px-3 sm:px-4 py-1 sm:py-1.5 hover:text-gray-700 hover:border-2 hover:border-gray-700 hover:font-semibold transition'>
              Teaching
            </button>
            <button className='border border-gray-600 text-gray-600 rounded-4xl px-3 sm:px-4 py-1 sm:py-1.5 hover:text-gray-700 hover:border-2 hover:border-gray-700 hover:font-semibold transition'>
              Team
            </button>
            <button className='border border-gray-600 text-gray-600 rounded-4xl px-3 sm:px-4 py-1 sm:py-1.5 hover:text-gray-700 hover:border-2 hover:border-gray-700 hover:font-semibold transition'>
              Office
            </button>
          </div>
        </div>


        <hr className='mx-4 my-1.5 border border-gray-300' />

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-3 px-3 sm:px-6">
          {[assets.Gallery1, assets.Gallery2, assets.Gallery3, assets.Gallery4, assets.Gallery5, assets.Gallery6,
          assets.Gallery7, assets.Gallery8, assets.Gallery9,].map((src, idx) => (
            <div key={idx} className="w-full h-full overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default HomeGallery