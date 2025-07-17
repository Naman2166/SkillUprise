import React from 'react'
import { assets } from '../../assets/assets'
import { FaStar } from 'react-icons/fa';

const EHratings = () => {
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
    <div className="mt-[4.5rem] w-full flex flex-col justify-center items-center gap-y-10 px-4 sm:px-6 lg:px-10">

    {/* Heading */}
    <div className="flex flex-col justify-center items-center gap-2 text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
        Rated 4.8 by 20k+ Students
      </div>
      <p className="font-medium text-gray-900 text-sm sm:text-base">
        Loved by Students & Respected by Professionals
      </p>
    </div>
  
    {/* Grid */}
    <div className="flex flex-col gap-y-4 w-full max-w-7xl">
  
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3'>
      {/* Image Section */}
      {[assets.HR2, assets.HR3, assets.HR4].map((src, i) => (
        <img
          key={`img-${i}`}
          src={src}
          className="w-full h-auto border border-gray-300 rounded-md"
          alt={`Review Visual ${i + 1}`}
        />
      ))}
      </div>
  

      {/* Review Cards */}

{/* Mobile view: horizontal scroll */}
<div className="sm:hidden w-full overflow-x-auto px-2 py-4">
  <div className="flex flex-nowrap gap-4">
    {Cards.map((item, idx) => (
      <div
        key={idx}
        className="min-w-[18rem] max-w-[20rem] h-auto text-sm bg-gray-100 flex-shrink-0 flex flex-col gap-4 overflow-hidden rounded-md shadow-sm shadow-gray-400 px-4 py-4"
      >
        {/* Upper Part */}
        <div className="flex flex-row gap-4 items-start">
          <img
            src={item.image}
            alt="Reviewer"
            className="w-14 h-14 object-cover rounded-full transition-transform duration-300 hover:scale-105"
          />
          <div className="flex flex-col gap-y-0.5">
            <p className="text-base font-semibold">{item.Name}</p>
            <p className="text-sm text-gray-700">{item.college}</p>
            <p className="text-sm text-gray-600">{item.about}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" size={16} />
              ))}
              <p className="text-xs ml-1 text-gray-600">(5)</p>
            </div>
          </div>
        </div>

        <hr className="border border-gray-200" />

        {/* Lower part */}
        <div>
          <p className="text-sm text-gray-800">{item.para}</p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Desktop & Tablet view: grid layout */}
<div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-3">
  {Cards.map((item, idx) => (
    <div
      key={idx}
      className="w-full h-auto text-sm bg-gray-100 flex flex-col gap-4 overflow-hidden rounded-md shadow-sm shadow-gray-400 px-4 py-4"
    >
      {/* Upper Part */}
      <div className="flex flex-row gap-4 items-start">
        <img
          src={item.image}
          alt="Reviewer"
          className="w-14 h-14 object-cover rounded-full transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col gap-y-0.5">
          <p className="text-base font-semibold">{item.Name}</p>
          <p className="text-sm text-gray-700">{item.college}</p>
          <p className="text-sm text-gray-600">{item.about}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" size={16} />
            ))}
            <p className="text-xs ml-1 text-gray-600">(5)</p>
          </div>
        </div>
      </div>

      <hr className="border border-gray-200" />

      {/* Lower part */}
      <div>
        <p className="text-sm text-gray-800">{item.para}</p>
      </div>
    </div>
  ))}
</div>

      

      {/* Certificates - Mobile: Horizontal scroll */}
<div className="sm:hidden w-full overflow-x-auto px-2 py-4">
  <div className="flex flex-nowrap gap-4">
    {[assets.EHcertificate1, assets.EHcertificate2, assets.EHcertificate3].map((src, i) => (
      <img
        key={`cert-mobile-${i}`}
        src={src}
        className="min-w-[18rem] max-w-[20rem] h-auto rounded-lg border border-gray-300 flex-shrink-0"
        alt={`Certificate ${i + 1}`}
      />
    ))}
  </div>
</div>

{/* Certificates - Tablet/Desktop: Grid layout */}
<div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-3">
  {[assets.EHcertificate1, assets.EHcertificate2, assets.EHcertificate3].map((src, i) => (
    <img
      key={`cert-grid-${i}`}
      src={src}
      className="w-full h-auto rounded-lg border border-gray-300"
      alt={`Certificate ${i + 1}`}
    />
  ))}
</div>

  
    </div>
  </div>
  
  )
}

export default EHratings