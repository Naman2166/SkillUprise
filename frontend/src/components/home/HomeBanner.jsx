import React from 'react'
import { assets } from '../../assets/assets'

const HomeBanner = () => {
  return (
    <div className='mt-10 w-full px-4 sm:px-8 md:px-14'>

      <div className='w-full bg-blue-500 px-4 py-6 sm:px-6 sm:py-8'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-x-10 items-center'>

          {/* Left - Image */}
          <div className='flex justify-center md:justify-start'>
            <img
              src={assets.HomeBanner}
              className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto'
              alt=''
            />
          </div>

          {/* Right - Content */}
          <div className='flex flex-col gap-y-1.5 sm:gap-y-3 text-white text-center md:text-left'>
            <p className='text-2xl sm:text-3xl md:text-4xl font-semibold sm:mb-2'>
              For Colleges & Universities
            </p>
            <p className='font-light text-[0.82rem] sm:text-base mb-2'>
              Increase Employability & Attract More Students With Our on-demand student development programs
            </p>
            
            <div className='grid grid-cols-2 sm:grid-cols-1 items-start gap-y-1 mb-3 font-light text-start text-xs sm:text-base'>
              <p>✓ On-Demand Courses</p>
              <p>✓ CRT Trainings</p>
              <p>✓ Internship Programs</p>
              <p>✓ Workshops & Hackathons</p>
            </div>

            <div className='flex justify-center md:justify-start gap-3 flex-wrap'>
              <button className='text-black font-medium bg-yellow-400 rounded-lg px-4 py-2 text-sm sm:text-base hover:bg-yellow-300 transition'>
                Contact Us
              </button>
              <button className='font-medium border-2 border-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-white hover:text-blue-500 transition'>
                Read More
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeBanner
