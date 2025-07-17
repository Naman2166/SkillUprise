import React from 'react'
import { assets } from '../../assets/assets'
import { FaSearch, FaArrowRight } from "react-icons/fa";

const HomeHeader = () => {
  return (
    <div
      className='flex flex-col md:flex-row bg-cover bg-center px-4 sm:px-6 md:px-10 lg:px-20 min-h-[580px]'
      style={{ backgroundImage: `url(${assets.HomeHeaderBgImage})` }}
    >

      {/* -------------- Left Side  -------------- */}
      <div className='md:w-1/2 flex flex-col items-center sm:items-start justify-center gap-4 py-10 md:py-[7vw]'>

        <p className='mx-auto md:mx-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight text-center md:text-left'>
          Learn, Intern & Get a Job
        </p>

        <p className='text-white text-center md:text-left text-sm sm:text-base'>
          Take your career to next level through our personalised training <br className='hidden sm:inline' />
          programs.
        </p>

        {/* Search Bar */}
        <div className='w-full'>
          <div className='flex items-center bg-white rounded-lg shadow-md overflow-hidden'>
            <input
              type='text'
              placeholder='Search courses, internships...'
              className='w-full min-w-0 px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm text-gray-700 placeholder-gray-600 outline-none'
            />
            <button className='bg-yellow-400 px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium cursor-pointer text-black hover:bg-yellow-500 transition'>
              <FaSearch className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Details */}
        <div className='flex flex-col items-center sm:items-start gap-3 pl-1 sm:pl-3 mt-5 text-white text-sm font-light'>
          <img className='w-32 sm:w-40' src={assets.HomeHeaderGroupProfile} alt='users' />
          <p className='text-xs sm:text-sm'>Kick-start your career with skillsUprise!</p>
          <a
            href='/signup'
            className='flex gap-2 bg-yellow-400 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-black text-sm sm:text-md font-medium m-auto md:m-0 hover:bg-yellow-500 transition-all duration-300'
          >
            REGISTER FOR FREE <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
          </a>
        </div>
      </div>

      {/* -------------- Right Side  -------------- */}
      <div className='md:w-1/2 flex justify-center items-center mt-3 md:mt-0'>
        <img
          className='w-[90%] sm:w-4/5 md:w-full xl:w-[70%] h-auto rounded-lg'
          src={assets.HomeHeaderImage}
          alt='hero-banner'
        />
      </div>

    </div>
  )
}

export default HomeHeader;
