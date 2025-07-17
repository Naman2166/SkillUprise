import React from 'react';
import { assets } from '../../assets/assets';

const FeaturesHeader = () => {
  return (
    <div
      className="w-full h-auto flex flex-col items-center justify-center gap-6 bg-cover bg-center py-12 px-4 sm:px-6 md:px-10 lg:px-16 -mb-12 text-center"
      style={{ backgroundImage: `url(${assets.featuresBg})` }}
    >
      {/* Text Section */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 py-4 md:py-10 max-w-3xl">
        <p className="text-[0.8rem] sm:text-xl md:text-xl text-white leading-snug sm:leading-tight">
          Expertised Trainers & Beginner Friendly Trainings
        </p>

        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-snug">
          Making Learning a Loving Experience
        </h2>

        {/* Browse Button */}
        <button className="mt-4 text-sm sm:text-base bg-yellow-500 rounded-lg px-5 py-2.5 font-semibold text-black hover:bg-yellow-400 transition-all duration-200">
          Browse Courses
        </button>
      </div>
    </div>
  );
};

export default FeaturesHeader;
