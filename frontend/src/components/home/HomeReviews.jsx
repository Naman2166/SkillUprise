import React from 'react'
import { assets } from '../../assets/assets'

const HomeReviews = () => {
  return (
    <div className='mt-14 px-4 flex flex-col justify-center items-center gap-y-5'>

      {/* Heading */}
      <div className='flex flex-col justify-center items-center gap-2 text-center px-1.5'>
        <div className='text-2xl sm:text-3xl font-semibold'>
          Students Love, Trust & Respect Us
        </div>
        <div className='text-sm text-gray-700 leading-relaxed'>
          We offer the most interactive and competitive environment with team challenges,<br className='hidden sm:block' />
          competitions, and many more to make learning a loving experience
        </div>
      </div>

      {/* Review Images */}
      <div className='flex flex-row lg:flex-row justify-center items-center gap-6'>

        {/* Left Main Image */}
        <div className='w-full lg:w-[22rem]'>
          <img
            src={assets.HR1}
            className='w-full h-auto rounded-xl border border-gray-200 object-cover'
            alt='HR1'
          />
        </div>

        {/* Right 2x2 Image Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <img src={assets.HR2} className='w-full max-w-[300px] h-auto rounded-lg object-cover' alt='HR2' />
          <img src={assets.HR3} className='w-full max-w-[300px] h-auto rounded-lg object-cover' alt='HR3' />
          <img src={assets.HR4} className='w-full max-w-[300px] h-auto rounded-lg object-cover' alt='HR4' />
        </div>
      </div>
    </div>
  )
}

export default HomeReviews
