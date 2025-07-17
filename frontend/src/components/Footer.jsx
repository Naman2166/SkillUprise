import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full'>

      {/* upper footer */}
      <div className='mt-20 px-0.5 sm:px-6 lg:px-12'>
        <hr className='border border-gray-300' />
        <div className='flex flex-row md:flex-row justify-center md:justify-evenly items-start gap-2 md:gap-4 p-3  sm:p-6'>

          <div className='flex items-start gap-2'>
            <img src={assets.HomeFooter1} className='h-8 sm:h-12 w-auto' alt='' />
            <div className='flex flex-col'>
              <p className='text-[0.5rem] sm:text-sm font-semibold'>Ministry of MSME</p>
              <p className='  text-[0.5rem] sm:text-sm font-light'>Govt of India Registered Company</p>
            </div>
          </div>

          <div className='flex items-start gap-2'>
            <img src={assets.HomeFooter2} className='h-8 sm:h-12 w-auto' alt='' />
            <div className='flex flex-col'>
              <p className='text-[0.5rem] sm:text-sm font-semibold'>ISO 9001-2015</p>
              <p className=' text-[0.5rem] sm:text-sm font-light'>Certified Company</p>
            </div>
          </div>

          <div className='flex items-start gap-2'>
            <img src={assets.HomeFooter3} className='h-8 sm:h-12 w-auto' alt='' />
            <div className='flex flex-col'>
              <p className='text-[0.5rem] sm:text-sm font-semibold'>Awarded as Best Service Provider in Education</p>
              <p className=' text-[0.5rem] sm:text-sm font-light'>@Global Business & Education Awards 2023</p>
            </div>
          </div>

        </div>
      </div>



      {/* lower footer */}
      <div className='bg-[#212529] text-white w-full px-4 sm:px-6 lg:px-12'>

        <div className='flex flex-col md:flex-row justify-between gap-y-3 md:gap-10 py-8 text-sm'>

          {/* Left Section */}
          <div className='flex-1'>
            <p className='text-lg sm:text-xl font-medium mb-4'>Offline Courses</p>
            <hr className='mb-4 text-gray-600' />
            <ul className='text-gray-400 flex flex-col gap-2 mb-7'>
              <li>Ethical Hacking and Cyber Security from Scratch</li>
              <li>Website Development from scratch</li>
              <li>Entrepreneurship – How to build a successful startup?</li>
              <li>Digital Marketing</li>
              <li>Android App Development</li>
            </ul>

          <div className='hidden md:block flex flex-col'>
            <p className='text-lg sm:text-xl font-medium mb-4'>Specialization Courses</p>
            <hr className='mb-4 text-gray-600' />
            <ul className='text-gray-400 flex flex-col gap-2 mb-7'>
              <li>Cyber Security Specialization</li>
              <li>Full Stack Website Development – MERN</li>
              <li>Data Science Specialization Program</li>
              <li>Website Development – MEAN Stack</li>
              <li>DevOps Beginners to Advanced</li>
            </ul>
          </div>


          </div>

          {/* Center Section */}
          <div className='flex-1'>
            <p className='text-lg sm:text-xl font-medium mb-4'>Online Courses</p>
            <hr className='mb-4 text-gray-600' />
            <ul className='text-gray-400 flex flex-col gap-2 mb-7'>
              <li>Ethical Hacking and Cyber Security from Scratch</li>
              <li>Entrepreneurship – How to build a successful startup?</li>
              <li>Digital Marketing</li>
              <li>Android App Development</li>
              <li>React JS</li>
            </ul>

            <p className='text-lg sm:text-xl font-medium mb-4'>About</p>
            <hr className='mb-4 text-gray-600' />
            <ul className='text-gray-400 flex flex-col gap-2 mb-7'>
              <li>About Company</li>
              <li>Certificate Verification</li>
              <li>Terms & Conditions</li>
              <li>Copyrights 2024 | Awetecks</li>
              <li>Aweteck Services Pvt. Ltd</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className='flex-1'>
            <div className='hidden md:block flex flex-col'>
              <p className='text-lg sm:text-xl font-medium mb-4'>Pre-recorded Courses</p>
              <hr className='mb-4 text-gray-600' />
              <ul className='text-gray-400 flex flex-col gap-2 mb-7'>
                <li>Cyber Security from Scratch</li>
                <li>Website Development from Scratch</li>
                <li>Entrepreneurship</li>
                <li>Digital Marketing</li>
                <li>Android App Development</li>
              </ul>
            </div>
            

            <p className='text-lg sm:text-xl font-medium mb-4'>Follow us on social media</p>
            <hr className='mb-4 text-gray-600' />
            <ul className='text-gray-400 flex flex-col gap-2'>
              <li>LinkedIn, Instagram, Twitter, Facebook</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer
