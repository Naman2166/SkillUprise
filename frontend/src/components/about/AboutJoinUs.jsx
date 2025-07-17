import React from 'react';
import { assets } from '../../assets/assets';

const AboutJoinUs = () => {
  return (
    <div
      className='mt-14 w-full h-auto flex flex-col gap-5 bg-cover bg-center py-10 px-6 md:px-10 lg:px-16'
      style={{ backgroundImage: `url(${assets.AboutJoinUsBg})` }}
    >
      <div className='flex flex-col items-center text-center gap-y-6 py-3 md:py-10'>
        
        {/* Heading */}
        <p className='text-white text-3xl sm:text-4xl md:text-5xl font-bold'>
          Come, Join Us
        </p>

        {/* Subheading */}
        <p className='text-blue-600 text-xl sm:text-2xl md:text-3xl font-semibold leading-snug'>
          Let's Revolutionise People's Careers Together
        </p>

        {/* Description */}
        <p className='text-white text-sm sm:text-base md:text-lg w-full sm:w-4/5 md:w-3/4 lg:w-1/2'>
          Currently there are 100+ openings on multiple positions. Apply now to onboard with our team and be a
          part of our mission to help individuals have better career opportunities.
        </p>

        {/* Button */}
        <button className='text-black bg-yellow-500 hover:bg-yellow-600 text-sm font-medium px-5 py-2 rounded-md cursor-pointer transition'>
          Browse Opportunities
        </button>
      </div>
    </div>
  );
};

export default AboutJoinUs;
