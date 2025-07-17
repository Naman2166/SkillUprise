import React from 'react';
import { assets } from '../../assets/assets';

const EHlinux = () => {
  return (
    <div className="mt-10 w-full px-4 sm:px-6 md:px-10">
      <div className="w-full py-6">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-3 md:gap-x-3">

          {/* Image Section */}
          <div className="w-full md:w-[50%] flex justify-center">
            <img src={assets.EHLinux} className="w-full max-w-lg xl:max-w-xl h-auto rounded-md shadow-lg" alt="Linux Training" />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[50%] text-start flex flex-col gap-y-2 sm:gap-y-3 text-black text-center md:text-left">

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
              Master Hackers Machine <br className="hidden sm:block" /> From Scratch To Advanced Levels
            </p>

            <p className="text-gray-800 text-sm text-start sm:text-base">
              Work with 100+ hacking tools, techniques and practical labs
            </p>

            <div className="flex flex-col gap-y-2 mt-3 font-medium text-gray-900 text-sm sm:text-base">
              {[
                'Live instructor led training',
                'Access to hacking Lab',
                'Premium tools and softwares',
                'CTF events',
                'Bug bounty programs',
              ].map((item, i) => (
                <p key={i} className='text-start px-1 sm:px-0'>
                  <span className="text-white text-xs font-semibold bg-green-700 px-1 py-0.5 rounded-sm mr-2">✓</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EHlinux;
