import React from 'react';
import { assets } from '../../assets/assets';
import { FaStar } from 'react-icons/fa';

const EHheader = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-12 px-4 sm:px-6 md:px-10 lg:px-16"
      style={{ backgroundImage: `url(${assets.EHheaderbg})` }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-8">

        {/* -------------- Left Side: Content -------------- */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-5 text-white text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Ethical Hacking & Cyber Security Training & Internship
          </h1>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-2.5">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" size={16} />
            ))}
            <p className="text-xs sm:text-sm font-light">4.5/5 (20,000+ Ratings)</p>
          </div>

          <p className="text-sm sm:text-base">
            Learn Hacking from the best trainer who trained DSP Rank Officers, College Students, and Corporate Teams.
          </p>

          <hr className="border-gray-500" />

          <ul className="list-disc ml-4 sm:ml-6 space-y-1 text-gray-300 text-sm sm:text-base">
            <li>Certified Training & Internship</li>
            <li>100% Practical Training</li>
            <li>Real-time Projects & Internship</li>
          </ul>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-2">
            <button className="px-4 py-2 text-sm sm:text-base text-white bg-green-600 hover:bg-green-700 rounded-md transition">
              Contact Us
            </button>
            <button className="px-4 py-2 text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">
              Apply for Internship
            </button>
          </div>
        </div>

        {/* -------------- Right Side: Image -------------- */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={assets.EHheader}
            alt="Ethical Hacking Training"
            className="w-[90%] sm:w-[80%] md:w-[90%] h-auto rounded-lg shadow-lg max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EHheader;
