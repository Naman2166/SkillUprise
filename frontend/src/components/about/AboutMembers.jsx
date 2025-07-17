import React from 'react'
import { assets } from '../../assets/assets'

const AboutMembers = () => {

  const Cards = [
    { name: "Vasu", post: "Software Developer", image: assets.AM1 },
    { name: "Leela Prashad", post: "Video Editor", image: assets.AM2 },
    { name: "Karishma", post: "Trainer", image: assets.AM3 },
    { name: "Guresh", post: "Software Developer", image: assets.AM4 },
    { name: "Masthanaiah", post: "Software Developer", image: assets.AM5 },
    { name: "Vinay", post: "Software Developer", image: assets.AM6 },
    { name: "Shrinu", post: "Software Developer", image: assets.AM7 },
    { name: "Harish", post: "Software Developer", image: assets.AM8 },
  ]

  return (
    <div className="mt-10 sm:mt-16 w-full py-14 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col gap-5 sm:gap-10">

        {/* Heading */}
        <div className='flex flex-row items-center justify-center'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black text-center px-3 leading-snug">
            Our Awesome Team Members <br />
            <span className='text-blue-600 text-xl sm:text-2xl lg:text-3xl'>The People Behind Skills Uprise</span>
          </h2>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-6 xl:px-28">
          {Cards.map((item, idx) => (
            <div
              key={idx}
              className="relative w-auto h-40 sm:h-72 lg:h-64  overflow-hidden bg-cover bg-center rounded-lg shadow-md "
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className='w-full absolute bottom-0 py-1 sm:py-2 flex flex-col items-center justify-center bg-black/80'>
                <p className='text-white text-[0.8rem] sm:text-md font-semibold'>{item.name}</p>
                <p className='text-blue-500 font-bold text-[0.65rem] sm:text-sm'>{item.post}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className='flex justify-center items-center'>
          <button className='bg-blue-500 px-10 sm:px-16 py-2 rounded-md font-medium text-white cursor-pointer hover:bg-blue-600 transition'>
            View All
          </button>
        </div>

      </div>
    </div>
  )
}

export default AboutMembers
