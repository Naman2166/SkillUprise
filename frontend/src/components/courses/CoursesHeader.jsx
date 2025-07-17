import React from 'react'
import { assets } from '../../assets/assets'

const CoursesHeader = () => {
  return (
    <div
      className='w-full flex flex-col md:flex-row  gap-5 bg-cover bg-center py-10 px-6 md:px-10 lg:px-16 '
      style={{ backgroundImage: `url(${assets.CoursesHeaderBg})` }} >


      {/* -------------- Left Side  -------------- */}
      <div className='flex flex-cols justify-center items-center'>
        <img className='w-[65%] h-auto rounded-lg' src={assets.CoursesHeaderImage} alt='' />
      </div>

      

      {/* -------------- Right Side  -------------- */}
      <div className='flex flex-col gap-4 gap-y-6 py-3 md:py-10 '>

        <p className='mx-auto md:mx-0 text-3xl md:text-4xl lg:text-5xl text-green-400 font-bold leading-tight md:leading-tight lg:leading-tight '>
           Learn On-Demand Skills For Free
        </p>
        
        <div className='grid grid-cols-2  gap-y-5 text-white text-lg font-medium font-light'>
            <p> <span className='text-black text-lg font-semibold bg-white rounded-full px-1.5 mr-1'>✔</span> Pre-recorded videos</p>
            <p> <span className='text-black text-lg font-semibold bg-white rounded-full px-1.5 mr-1'>✔</span> Certificate of training</p>
            <p> <span className='text-black text-lg font-semibold bg-white rounded-full px-1.5 mr-1'>✔</span> Beginner friendly</p>
            <p> <span className='text-black text-lg font-semibold bg-white rounded-full px-1.5 mr-1'>✔</span> Practical course content</p>
            <p> <span className='text-black text-lg font-semibold bg-white rounded-full px-1.5 mr-1'>✔</span> Placement support</p>
            <p> <span className='text-black text-lg font-semibold bg-white rounded-full px-1.5 mr-1'>✔</span> Life-time access</p>
        </div>
      </div>

    </div>
  )
}

export default CoursesHeader