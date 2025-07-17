import React from 'react'
import { assets } from '../../assets/assets'

const HomeContactUs = () => {
  return (
    <div className='w-full mt-20 flex flex-col gap-y-5 px-4 sm:px-10 md:px-20'>

      {/* heading */}
      <div className='flex flex-col justify-center items-center gap-2 text-center px-2'>
        <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>Contact Us</div>
        <div className='text-sm sm:text-base text-gray-700'>
          Write us a message or give us a missed call
        </div>
      </div>

      {/* image + form grid */}
      <div className='flex flex-col lg:flex-row gap-5 sm:gap-7'>

        {/* Left Panel */}
        <div
          className='w-full text-white p-5 sm:p-7 rounded-xl border border-gray-200 overflow-hidden'
          style={{
            backgroundImage: `url(${assets.HomeHeaderBgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <h2 className='text-lg sm:text-xl font-semibold'>Contact Information</h2>
          <p className='text-sm font-light mt-1'>
            Fill up the form and our team will reach you in 24 hours or call us for immediate support.
          </p>
          <hr className='my-3' />
          <div className='flex flex-col gap-4'>

            {/* Contact 1 */}
            <div className='flex items-start gap-3'>
              <img src={assets.Contact1} className='w-16 sm:w-20 h-auto' alt='' />
              <div className='flex flex-col'>
                <p className='text-base sm:text-lg font-medium'>Nigma Reddy</p>
                <p className='text-sm font-light'>HR Manager</p>
                <p className='text-sm font-light'>123456789</p>
              </div>
            </div>

            {/* Contact 2 */}
            <div className='flex items-start gap-3'>
              <img src={assets.Contact2} className='w-16 sm:w-20 h-auto' alt='' />
              <div className='flex flex-col'>
                <p className='text-base sm:text-lg font-medium'>Pradeep Sai</p>
                <p className='text-sm font-light'>Training Consultant</p>
                <p className='text-sm font-light'>123456789</p>
              </div>
            </div>

          </div>
        </div>


        {/* Right Panel (Form) */}
        <div className='w-full bg-gray-50 border border-gray-400 shadow shadow-gray-700 rounded-xl'>
          <form>
            <div className='flex flex-col gap-5 p-5 sm:p-7 text-sm'>

              {/* Inputs Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-2 gap-4'>
                <input
                  placeholder='First Name'
                  className='border border-gray-500 px-3 py-1 sm:py-2 rounded outline-none placeholder:text-gray-500'
                />
                <input
                  placeholder='Last Name'
                  className='border border-gray-500 px-3 py-1 sm:py-2 rounded outline-none placeholder:text-gray-500'
                />
                <input
                  placeholder='Email'
                  className='border border-gray-500 px-3 py-1 sm:py-2 rounded outline-none placeholder:text-gray-500'
                />
                <input
                  placeholder='Phone'
                  className='border border-gray-500 px-3 py-1 sm:py-2 rounded outline-none placeholder:text-gray-500'
                />
              </div>

              {/* Message */}
              <textarea
                placeholder='Message'
                className='w-full h-[5.5rem] border border-gray-500 px-3 py-2.5 rounded resize-none placeholder:text-gray-500'
              />

              {/* Submit Button */}
              <button className='w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-lg font-medium transition'>
                Send Message
              </button>

            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default HomeContactUs
