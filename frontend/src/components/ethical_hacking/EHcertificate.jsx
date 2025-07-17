import React from 'react'
import { assets } from '../../assets/assets'

const EHcertificate = () => {
  return (
    <div className='mt-16 w-full'>

    <div className='w-full  py-5'>
      <div className='w-full flex flex-col md:flex-row items-start justify-center px-5 md:px-0 gap-y-2 gap-x-10'>

        <div className=''>
          <img src={assets.EHcertificate} className='w-auto h-[16rem] md:h-[24rem]' alt='' />
        </div>

        <div className='flex flex-col max-sm:items-center gap-y-1 sm:gap-y-2 text-black'>
          
          <p className='text-[1.4rem] md:text-[2.1rem] font-semibold mb-2  '>
              Training & Internship Certificate
          </p>
          <p className='text-gray-800 text-sm md:text-md'>
          An X-Factor to your resume and the best way to prove your skills to land your dream <br />
          job in cyber security
          </p>
         
          <div className='flex flex-col gap-y-2 sm:gap-y-3 mt-3 font-light text-gray-900 font-medium text-[1rem] '>
            <p> <span className='text-white text-[0.8rem] font-semibold bg-green-700 pl-1 rounded-sm mr-2'> ✓ </span>  Certificate of training</p>
            <p> <span className='text-white text-[0.8rem] font-semibold bg-green-700 pl-1 rounded-sm mr-2'> ✓ </span>  Certificate of Internship</p>
            <p> <span className='text-white text-[0.8rem] font-semibold bg-green-700 pl-1 rounded-sm mr-2'> ✓ </span>  Premium tools and softwares</p>
            <p> <span className='text-white text-[0.8rem] font-semibold bg-green-700 pl-1 rounded-sm mr-2'> ✓ </span>  Best Intern Certificate (top performers)</p>
            <p> <span className='text-white text-[0.8rem] font-semibold bg-green-700 pl-1 rounded-sm mr-2'> ✓ </span>  Recommendation Letter (top performers)</p>
          </div>
           
        </div>

      </div>
    </div>

  </div>
  )
}

export default EHcertificate