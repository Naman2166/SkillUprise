import React from 'react'
import { assets } from '../../assets/assets'
import { FaSearch } from 'react-icons/fa'

const ResourcesHeader = () => {
  return (
    <div
      className='w-full h-auto flex flex-col gap-5 bg-cover bg-center py-10 px-4 sm:px-6 md:px-10 lg:px-16'
      style={{ backgroundImage: `url(${assets.ResourceBg})` }}
    >
      <div className='flex flex-col items-center gap-4 py-6 md:py-10'>

        {/* Heading */}
        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-100 font-medium leading-tight text-center'>
          Ace your next job interview
        </p>

        {/* Search Bar */}
        <div className='w-4/5 sm:w-4/5 md:w-2/3 lg:w-1/2'>
          <div className='flex items-center bg-white rounded-lg shadow-md overflow-hidden'>
            <input
              type='text'
              placeholder='Search courses, internships...'
              className='w-full px-4 sm:px-5 py-3 text-sm text-gray-700 placeholder-gray-600 outline-none'
            />
            <button className='bg-yellow-400 px-4 sm:px-5 py-3 text-sm font-medium text-black hover:bg-yellow-500 transition'>
              <FaSearch className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ResourcesHeader
