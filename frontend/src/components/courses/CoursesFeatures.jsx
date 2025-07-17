import React from 'react'
import { assets } from '../../assets/assets'

const CoursesFeatures = () => {

  const Cards = [
    { heading1: "Offline trainings", heading2: "To learn under our guidance", image: assets.F1 },
    { heading1: "Live online classes", heading2: "To learn from home", image: assets.F2 },
    { heading1: "Daily class recordings", heading2: "To revise concepts", image: assets.F3 },
    { heading1: "Pre-recorded videos", heading2: "Learn anytime, anywhere", image: assets.F4 },
    { heading1: "Group discussions", heading2: "To develop soft skills", image: assets.F5 },
    { heading1: "5k+ Students community", heading2: "To learn together", image: assets.F6 },
    { heading1: "Teams & group tasks", heading2: "Learn real skills for industry needs", image: assets.F7 },
    { heading1: "Live course revision", heading2: "To master skills better", image: assets.F8 },
    { heading1: "Assignments & realtime projects", heading2: "To make you industry ready", image: assets.F9 },
    { heading1: "Individual feedback", heading2: "To improvise your growth", image: assets.F10 },
    { heading1: "Placement trainings", heading2: "To easily land your dream job", image: assets.F11 },
    { heading1: "Downloadable content", heading2: "Learn anywhere, anytime", image: assets.F12 },
  ];

  return (
    <div className='mt-20 w-full flex flex-col justify-center items-center gap-y-7 px-4 sm:px-6 lg:px-16'>

      {/* Heading */}
      <div className='flex flex-col justify-center items-center gap-1 text-center'>
        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700'>Extra-Ordinary Features</div>
        <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700'>For Exceptional Results</div>
      </div>

      {/* Card Grid: 2 Columns even on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {Cards.map((item, idx) => (
          <div
            key={idx}
            className="w-full max-w-[20rem] text-[0.75rem] sm:text-sm bg-gray-200 flex flex-row gap-2 sm:gap-3 overflow-hidden rounded-lg shadow-md shadow-gray-600 px-1.5 sm:px-3 py-3 transition-all"
          >
            <img
              src={item.image}
              alt="feature"
              className="w-[2.5rem] sm:w-[3.3rem] h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <div className='flex flex-col justify-center'>
              <p className='text-[0.68rem] sm:text-base font-semibold'>{item.heading1}</p>
              <p className='text-[0.55rem] sm:text-sm'>{item.heading2}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CoursesFeatures
