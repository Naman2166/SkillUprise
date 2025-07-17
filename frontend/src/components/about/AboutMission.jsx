import React from 'react';
import { assets } from '../../assets/assets';

const AboutMission = () => {
  return (
    <div className='mt-[5rem] w-full flex flex-col justify-center items-center gap-y-6 sm:gap-y-10 px-4 sm:px-6 md:px-12 lg:px-40'>

      {/* Header */}
      <div className='flex flex-col justify-center items-center gap-2 text-center px-2'>
        <div className='text-xl sm:text-3xl font-semibold leading-snug'>
          Awarded As <br />
          <span className='text-blue-600'>Best Educational Service Provider</span>
        </div>
        <div className='text-sm'>
          At Global Business & Education Awards 2023
        </div>
      </div>

      {/* Image & Cards Section */}
      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-5 sm:gap-10'>

        {/* Left Image */}
        <div className='w-full lg:w-2/3 px-2'>
          <img
            src={assets.AboutMission3}
            alt='Mission Visual'
            className='w-full h-auto object-contain'
          />
        </div>

        {/* Right Card Grid */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 sm:gap-6 px-2'>

          {/* Mission Card */}
          <div className='bg-green-100 rounded-xl shadow-md flex flex-col justify-between h-full'>
            <div className='py-2 bg-green-500 flex justify-center items-center rounded-t-xl'>
              <img src={assets.AboutMission1} className='w-10 h-auto' alt='Mission' />
            </div>
            <div className='flex flex-col gap-2 items-center px-1 sm:px-2 sm:px-6 py-4 sm:py-6 flex-grow'>
              <p className='text-xl sm:text-2xl font-semibold text-green-600'>Our Mission</p>
              <p className='text-[0.7rem] sm:text-sm text-gray-700 text-center'>
                To give people the power to create new possibilities by equipping them with relevant industry-ready skills and practical exposure. We deliver quality education integrated with technology to build a globally capable workforce.
              </p>
            </div>
            <div className='bg-green-500 h-6 rounded-b-xl'></div>
          </div>

          {/* Vision Card */}
          <div className='bg-orange-100 rounded-xl shadow-md flex flex-col justify-between h-full'>
            <div className='py-2 bg-orange-400 flex justify-center items-center rounded-t-xl'>
              <img src={assets.AboutMission2} className='w-10 h-auto' alt='Vision' />
            </div>
            <div className='flex flex-col gap-2 items-center px-2 sm:px-6 py-4 sm:py-6 flex-grow'>
              <p className='text-xl sm:text-2xl font-semibold text-orange-600'>Our Vision</p>
              <p className='text-[0.7rem] sm:text-sm text-gray-700 text-center'>
                To be a global leader in education by providing a platform that empowers individuals with lifelong skills, technical excellence, and innovative learning, fostering personal and professional growth.
              </p>
            </div>
            <div className='bg-orange-400 h-6 rounded-b-xl'></div>
          </div>

        </div>



      </div>

    </div>
  );
};

export default AboutMission;
