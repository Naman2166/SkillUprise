import React from 'react'
import { assets } from '../../assets/assets'

const ResourcesGrid = () => {
  const Cards = [
    {
      image: assets.R1,
      p1: "Interview Process at Microsoft",
      p2: "Tips for interviewing at Microsoft",
      p3: "55+ Interview Questions Asked at Microsoft",
    },
    {
      image: assets.R2,
      p1: "Interview Process at Google",
      p2: "Tips for interviewing at Google",
      p3: "70+ Interview Questions Asked at Google",
    },
    {
      image: assets.R3,
      p1: "Interview Process at Google",
      p2: "Tips for interviewing at Google",
      p3: "70+ Interview Questions Asked at Google",
    },
    {
      image: assets.R4,
      p1: "Interview Process at Google",
      p2: "Tips for interviewing at Google",
      p3: "55+ Interview Questions Asked at Google",
    },
    {
      image: assets.R5,
      p1: "Interview Process at Google",
      p2: "Tips for interviewing at Google",
      p3: "70+ Interview Questions Asked at Google",
    },
    {
      image: assets.R6,
      p1: "Interview Process at TCS",
      p2: "Tips for interviewing at TCS",
      p3: "52+ Interview Questions Asked at TCS",
    },
    {
      image: assets.R7,
      p1: "Interview Process at Meta",
      p2: "Tips for interviewing at Meta",
      p3: "52+ Interview Questions Asked at Meta",
    },
    {
      image: assets.R8,
      p1: "Interview Process at Microsoft",
      p2: "Tips for interviewing at Microsoft",
      p3: "44+ Interview Questions Asked at Microsoft",
    },
    {
      image: assets.R9,
      p1: "Interview Process at Microsoft",
      p2: "Tips for interviewing at Microsoft",
      p3: "44+ Interview Questions Asked at Microsoft",
    },
    {
      image: assets.R10,
      p1: "Interview Process at Amazon",
      p2: "Tips for interviewing at Amazon",
      p3: "55+ Interview Questions Asked at Amazon",
    },
    {
      image: assets.R11,
      p1: "Interview Process at Amazon",
      p2: "Tips for interviewing at Amazon",
      p3: "55+ Interview Questions Asked at Amazon",
    },
    {
      image: assets.R12,
      p1: "Interview Process at Infosys",
      p2: "Tips for interviewing at Infosys",
      p3: "55+ Interview Questions Asked at Infosys",
    },
    {
      image: assets.R13,
      p1: "Interview Process at Google",
      p2: "Tips for interviewing at Google",
      p3: "55+ Interview Questions Asked at Google",
    },
    {
      image: assets.R14,
      p1: "Interview Process at Google",
      p2: "Tips for interviewing at Google",
      p3: "55+ Interview Questions Asked at Google",
    },
    {
      image: assets.R15,
      p1: "Interview Process at Microsoft",
      p2: "Tips for interviewing at Microsoft",
      p3: "55+ Interview Questions Asked at Microsoft",
    },
    {
      image: assets.R16,
      p1: "Interview Process at Google",
      p2: "Tips for interviewing at Google",
      p3: "55+ Interview Questions Asked at Google",
    },
    {
      image: assets.R17,
      p1: "Interview Process at Microsoft",
      p2: "Tips for interviewing at Microsoft",
      p3: "55+ Interview Questions Asked at Microsoft",
    },

  ]



  return (
    <div className='mt-[3rem] sm:mt-[5rem] w-full flex flex-col justify-center items-center gap-y-12'>

  {/* Card Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-10 px-4 sm:px-6 md:px-10">
    {Cards.map((item, idx) => (
      <div
        key={idx}
        className="w-full max-w-[20rem] sm:max-w-[26rem] h-auto text-xs bg-gray-100 flex flex-col justify-between gap-1 sm:gap-3 overflow-hidden rounded-md shadow-lg shadow-gray-400"
      >

        {/* upper part */}
        <div className='flex flex-row gap-4'>
          <img
            src={item.image}
            alt={"image"}
            className="object-cover w-full h-24 sm:h-52 transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* lower part */}
        <ul className='list-disc flex flex-col gap-y-0.5 px-3 sm:px-5 py-2 sm:py-3.5 ml-1'>
          <li className='text-[0.6rem] sm:text-sm'>{item.p1}</li>
          <li className='text-[0.6rem] sm:text-sm'>{item.p2}</li>
          <li className='text-[0.6rem] sm:text-sm'>{item.p3}</li>
        </ul>

        {/* button */}
        <div className='p-3'>
          <button className='w-full text-[1rem] bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-blue-800'>
            Read Now
          </button>
        </div>

      </div>
    ))}
  </div>

</div>

  )
}

export default ResourcesGrid