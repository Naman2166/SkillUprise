import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='-mt-28 flex justify-center items-center min-h-screen bg-gray-100 px-4'>
      <div className='flex flex-col lg:flex-row w-full max-w-5xl border border-gray-300 shadow-lg bg-white rounded-md overflow-hidden'>

        {/* Left Image Part */}
        <div className='hidden lg:block w-full lg:w-[45%]'>
          <img
            src={assets.Login}
            alt='Login Visual'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Right Form Part */}
        <div className='w-full lg:w-[55%] px-6 py-8 sm:px-10 sm:py-10'>
          <form className='flex flex-col gap-7'>

            {/* Welcome Text */}
            <div>
              <p className='text-gray-600 text-sm sm:text-base font-medium'>Hi !</p>
              <h2 className='text-2xl sm:text-3xl font-bold'>
                Welcome to Skills Uprise
              </h2>
            </div>

            <div className='flex flex-col gap-4'>
              {/* Google login */}
              <div className='flex justify-center items-center gap-2 border border-gray-400 hover:border-gray-600 px-3 py-2.5 rounded-lg cursor-pointer transition'>
                <img src={assets.Google} className='w-6 h-auto' alt='Google Icon' />
                <p className='text-center text-sm sm:text-base'>Login with Google</p>
              </div>

              <p className='text-center text-sm text-gray-700'>or</p>

              {/* Form Inputs */}
              <div className='w-full flex flex-col gap-4 text-sm'>
                <input
                  type='email'
                  placeholder='Email'
                  className='border border-gray-400 px-3 py-2.5 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='password'
                  placeholder='Password'
                  className='border border-gray-400 px-3 py-2.5 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
            </div>

            {/* Referral & Terms */}
            <div className='flex flex-col sm:flex-row justify-between text-sm gap-3'>
              <label className='flex items-center gap-2 text-gray-800'>
                <input type='checkbox' className='w-4 h-4 cursor-pointer' />
                Remember password
              </label>
              <p className='text-blue-600 hover:underline cursor-pointer'>
                Forgot Password?
              </p>
            </div>

            {/* Submit & Signin */}
            <div className='flex flex-col gap-2'>
              <button
                type='submit'
                className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition'
              >
                Register Now
              </button>
              <p className='text-center text-gray-800 text-sm'>
                Don't have an account?{' '}
                <span
                  onClick={() => navigate('/signup')}
                  className='text-blue-600 font-medium cursor-pointer hover:text-blue-800'
                >
                  Sign Up
                </span>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
