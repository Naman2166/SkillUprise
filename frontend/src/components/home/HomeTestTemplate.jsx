import React from 'react'
import { assets } from '../../assets/assets'

const HomeTestTemplate = () => {
  const cardData = [
    {
      title: 'Mock Test & Challenges',
      button: 'View Test',
      image: assets.HomeTestTemplate2,
    },
    {
      title: 'Interview Preparation',
      button: 'Start Preparation',
      image: assets.HomeTestTemplate3,
    },
    {
      title: 'Course Cheat Sheets',
      button: 'View Cheat Sheets',
      image: assets.HomeTestTemplate4,
    },
    {
      title: 'Technical Quizzes',
      button: 'View Quizzes',
      image: assets.HomeTestTemplate5,
    },
  ];

  return (
    <div className='mt-28 px-4 md:px-8'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-4 gap-y-7'>
        
        {/* Left Image */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img
            src={assets.HomeTestTemplate1}
            className='w-full max-w-[700px] rounded-xl object-cover'
            alt='Main Visual'
          />
        </div>

        {/* Right Cards */}
        <div className='grid grid-cols-2 sm:grid-cols-2 gap-4 w-full max-w-[500px] mt-0 lg:mt-0'>
          {cardData.map(({ title, button, image }, i) => (
            <div
              key={i}
              className='flex justify-start items-center rounded-md bg-cover bg-center p-4 h-[140px] sm:h-[160px] md:h-[180px]'
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className='flex flex-col gap-4 sm:gap-5'>
                <div className='text-lg sm:text-xl md:text-2xl text-white font-medium leading-snug'>
                  {title}
                </div>
                <div className='text-white text-[12px] text-center border border-white rounded-full px-4 py-1 cursor-pointer hover:font-medium transition'>
                  {button}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeTestTemplate;
