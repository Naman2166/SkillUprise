import React from 'react'
import { assets } from '../assets/assets'

const BrowseCoursesTemplate = () => {
  const cardData = [
    {
      title: 'Online Courses',
      desc: 'Learn from the comforts of your home in a most interactive online mode',
      img: assets.CoursesTemplate1,
    },
    {
      title: 'Offline Courses',
      desc: 'Learn in a most interactive environment with expertized trainers at our office',
      img: assets.CoursesTemplate2,
    },
    {
      title: 'Specialization Courses',
      desc: '3-4 months long courses with guaranteed internship / placement opportunities.',
      img: assets.CoursesTemplate3,
    },
    {
      title: 'Pre-recorded Courses',
      desc: 'Learn anytime, anywhere by watching pre-recorded course tutorials.',
      img: assets.CoursesTemplate4,
    },
  ]

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 mt-14'>

        {cardData.map((item, i) => (
          <div
            key={i}
            className='bg-[#031545] w-[97vw] max-w-[500px] h-[170px] sm:h-[180px] md:h-[190px] rounded-lg mx-auto'
          >
            <div className='grid grid-cols-[2.5fr_1fr] h-full py-2.5'>
              <div className='flex flex-col justify-between px-4 py-4'>
                <p className='text-[18px] sm:text-[22px] md:text-[28px] text-[#09BD80] font-semibold'>
                  {item.title}
                </p>
                <p className='text-xs sm:text-sm text-gray-200 mt-1'>
                  {item.desc}
                </p>
                <p className=' w-1/2 text-center text-[11px] sm:text-[12px] md:text-[13px] font-normal text-white bg-[#0D6EFD] rounded-2xl px-3 py-1 mt-3 sm:mt-5 cursor-pointer hover:bg-blue-700 transition'>
                  Browse Courses
                </p>
              </div>
              <div className='flex items-center justify-center pr-2'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='h-[75%] sm:h-[75%] md:h-full w-auto object-contain mt-1'
                />
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default BrowseCoursesTemplate
