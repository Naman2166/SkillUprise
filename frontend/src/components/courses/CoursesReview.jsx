import React from 'react'
import { assets } from '../../assets/assets'
import { FaStar } from 'react-icons/fa';

const CoursesReview = () => {

  const Cards = [
    {
      Name: "Viraj Mehta",
      college: "Sampada College, Maharashtra",
      about: "4th Year - IT",
      image: assets.Review1,
      para: `I have learnt great things with Skills Uprise.
      Apart from the innovative teachings methods of
      manoj sir, The most interesting part is that
      groups will be created with different college
      students that helps us meet new people and
      share our ideas with them and we can learn with
      our team with everyones support and i got much
      more interest to learn with such a friendly
      environment that helped me learn many things
      from my team mates too.` ,

    },
    {
      Name: "Swetha Kommula",
      college: "IIIT srikakulam, Andhra Pradesh",
      about: "4th Year - CSE",
      image: assets.Review2,
      para: `Honestly, this is best training program ever. I
      have joined so many paid internships & trainings
      but i gained nothing except certificates. But
      Skills Uprise really taught so much with industry
      standard levels, manoj sir played absolute
      trainer role & i like the way he teach, the way he
      took examples,and training everything is perfect
      & i appreciate it. And i really wanted to do an
      intern in your company to learn more practical
      stuff. Manoj sir you are amazing and perfect
      trainer.`,
    },
    {
      Name: "Anirudh Dhibba",
      college: "Vignan Engineering College,Vizag",
      about: "4th Year - CSE",
      image: assets.Review3,
      para: `It's really a good learning experience to learn
      with a faculty who have a good knowledge
      knowing how and what to explain in a perfect
      manner. Im really happy and satisfied regarding
      the training program Providing all the recording
      sessions for people to help them looking back
      into the concepts providing realtime application
      problem and helping us to sort out is really the
      best thing I have learnt as a Starter it helped me
      a lot to learn.`,
    },
  ]



  return (
    <div className='mt-24 w-full flex flex-col justify-center items-center gap-y-6 sm:gap-y-10  px-4 sm:px-8 lg:px-16'>

      {/* Heading */}
      <div className='text-center'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-green-700'>
          Rated 4.8 by 20k+ Students
        </h2>
      </div>

      {/* Cards Section */}
      <div className='w-full'>
        {/* Mobile Scroll View */}
        <div className="flex sm:hidden gap-4 overflow-x-auto pb-1 px-1 hide-scrollbar">
          {Cards.map((item, idx) => (
            <div key={idx} className="min-w-[80%] max-w-[80%] bg-gray-100 flex-shrink-0 rounded-md shadow px-2.5 py-4 text-sm">
              <div className='flex gap-4 mb-2'>
                <img src={item.image} alt="student" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className='font-semibold'>{item.Name}</p>
                  <p className='text-sm text-gray-600'>{item.college}</p>
                  <p className='text-sm text-gray-600'>{item.about}</p>
                  <div className='flex items-center mt-1'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={14} />
                    ))}
                    <span className='text-xs ml-1'>(5)</span>
                  </div>
                </div>
              </div>
              <hr className='border-gray-300 mb-2' />
              <p className='text-gray-800'>{item.para}</p>
            </div>
          ))}
        </div>

        {/* Grid View for sm and up */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {Cards.map((item, idx) => (
            <div key={idx} className="bg-gray-100 rounded-md shadow px-4 py-5 text-sm">
              <div className='flex gap-4 mb-2'>
                <img src={item.image} alt="student" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className='font-semibold'>{item.Name}</p>
                  <p className='text-sm text-gray-600'>{item.college}</p>
                  <p className='text-sm text-gray-600'>{item.about}</p>
                  <div className='flex items-center mt-1'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={14} />
                    ))}
                    <span className='text-xs ml-1'>(5)</span>
                  </div>
                </div>
              </div>
              <hr className='border-gray-300 mb-2' />
              <p className='text-gray-800'>{item.para}</p>
            </div>
          ))}
        </div>
      </div>

      {/*  Button */}
      <div className='text-sm sm:text-md bg-blue-500 px-6 py-2 rounded-full text-white font-medium cursor-pointer text-center hover:bg-blue-600 transition'>
        1000s of reviews by happy students →
      </div>
    </div>
  )
}

export default CoursesReview