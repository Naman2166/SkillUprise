import React from 'react'
import { assets } from '../../assets/assets'

const EHbatchTiming = () => {
  const Cards = [
    {
      BatchNo:"1",
      date:"25-07-2025",
      RegistrationEnds:"22-07-2025", 
      MorningSlot:"Almost Filled", 
      AfternoonSlot:"Few Seats Left", 
      EveningSlot:"Available" 
    },
    {
      BatchNo:"2",
      date:"25-07-2025",
      RegistrationEnds:"22-07-2025", 
      MorningSlot:"Almost Filled", 
      AfternoonSlot:"Few Seats Left", 
      EveningSlot:"Available" 
    },
    {
      BatchNo:"3",
      date:"25-07-2025",
      RegistrationEnds:"22-07-2025", 
      MorningSlot:"Almost Filled", 
      AfternoonSlot:"Few Seats Left", 
      EveningSlot:"Available" 
    },
  ]



  return (
    <div className='mt-[5rem] w-full flex flex-col justify-center items-center gap-y-9'>

  <div className='text-3xl font-semibold text-gray-800 text-center px-3'>
    Flexible Batches & Timings
  </div>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 w-full max-w-[1200px]">
    {Cards.map((item, idx) => (
      <div
        key={idx}
        className="w-full h-auto text-xs bg-gray-100 flex flex-col gap-3 overflow-hidden rounded-md shadow-lg shadow-gray-400"
      >
        {/* Upper Part */}
        <div className='h-24 flex flex-col gap-y-1.5 bg-gray-800 justify-center items-start px-3'>
          <p className='text-white font-semibold text-2xl'>Batch-{item.BatchNo}</p>
          <p className='text-white text-[0.87rem]'>Batch Starts : {item.date}</p>
        </div>

        {/* Lower Part */}
        <ul className='flex flex-col gap-y-1 px-5 py-2'>
          <li className='text-sm font-medium'>Registration Ends: <span className='font-normal ml-1'>{item.RegistrationEnds}</span></li>
          <li className='text-sm font-medium'>Morning Slot: <span className='text-red-600 ml-1'>{item.MorningSlot}</span></li>
          <li className='text-sm font-medium'>Afternoon Slot: <span className='text-blue-700 ml-1'>{item.AfternoonSlot}</span></li>
          <li className='text-sm font-medium'>Evening Slot: <span className='text-green-700 ml-1'>{item.EveningSlot}</span></li>
        </ul>

        {/* Button */}
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

export default EHbatchTiming