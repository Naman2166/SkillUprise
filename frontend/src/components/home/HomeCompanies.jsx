import React from 'react'
import { assets } from '../../assets/assets'

const HomeCompanies = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-8 mt-8'>

      <p className='text-xl sm:text-2xl md:text-[27px] text-center text-gray-800 font-semibold mb-2'>
        Our students work at leading companies
      </p>
      <p className='text-sm sm:text-base text-center font-medium text-gray-700 mb-6'>
        Through our guaranteed internship & placement programs
      </p>

      <div className='flex flex-wrap justify-center items-center gap-x-8 gap-y-6 w-full max-w-6xl'>
        <img src={assets.amazon_img} className='h-10 sm:h-12 w-auto' alt='Amazon' />
        <img src={assets.infosys_img} className='h-10 sm:h-12 w-auto' alt='Infosys' />
        <img src={assets.byjus_img} className='h-10 sm:h-12 w-auto' alt='Byju’s' />
        <img src={assets.icici_img} className='h-10 sm:h-12 w-auto' alt='ICICI' />
        <img src={assets.cognizant_img} className='h-10 sm:h-12 w-auto' alt='Cognizant' />
        <img src={assets.wipro_img} className='h-10 sm:h-12 w-auto' alt='Wipro' />
        <img src={assets.bosch_img} className='h-10 sm:h-12 w-auto' alt='Bosch' />
        <img src={assets.brillio_img} className='h-10 sm:h-12 w-auto' alt='Brillio' />
      </div>

    </div>
  )
}

export default HomeCompanies
