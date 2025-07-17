import React from 'react'
import { assets } from '../../assets/assets'

const AboutHeader = () => {
    return (
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-5 bg-[#ddddfc] py-8 sm:py-12 px-6 md:px-10 lg:px-16 ' >

            {/* -------------- Left Side  -------------- */}
            <div className='flex flex-col gap-4 gap-y-6 py-3 md:py-10 '>
                
                {/* for normal screen */}
                <p className='hidden md:block mx-auto md:mx-0 text-3xl md:text-4xl lg:text-5xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight '>
                    We are people who care <br /> about <span className='text-blue-600'> Your Growth</span>
                </p>
                {/* for smaller screen */}
                <p className=' md:hidden mx-auto text-[2.2rem]  text-black font-semibold leading-tight md:leading-tight lg:leading-tight '>
                    We are people who care about <span className='text-blue-600'> Your Growth</span>
                </p>

                <p className='w-full sm:w-[52%] text-sm '>Over 20,000 students are placed in more than 30
                    companies all these breadth of gobal coverage,
                    combined with specialist.
                </p>

            </div>


            {/* -------------- Right Side  -------------- */}
            <div className='w-full flex justify-center items-center'>
                <img className='w-[45%] h-auto rounded-lg' src={assets.AboutHeader} alt='' />
            </div>


        </div>
    )
}

export default AboutHeader

