import React from 'react'
import { assets } from '../../assets/assets'

const EHprojects = () => {
  const Cards = [
    {
      image: assets.EH2,
      p1: "You will learn to hack laptops and systems by using advanced hacking tools and techniques",
    },
    {
      image: assets.EH3,
      p1: "You will learn to hack wifi's and wireless networks using kali linux and few automated tools",
    },
    {
      image: assets.EH4,
      p1: "You will learn to hack mobiles using kali linux and latest hacking techniques",
    },
    {
      image: assets.EH5,
      p1: "You will learn to hack real websites with the modern hacking techniques",
    },
    {
      image: assets.EH6,
      p1: "You will learn the best 100% successful way to hack your target facebook accounts",
    },
    {
      image: assets.EH7,
      p1: "You will learn the right techniques to hack into instagram accounts with best hacking tools",
    },

  ]



  return (
    <div className="mt-12 w-full flex flex-col justify-center items-center gap-y-5 sm:gap-y-10 px-2 sm:px-6 md:px-8">

  {/* ---------- Banner ---------- */}
  <div className="w-full max-w-7xl">
    <div
      className="w-full bg-cover bg-center rounded-md shadow-md py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-10"
      style={{ backgroundImage: `url(${assets.EH1})` }}
    >
      <div className="text-white flex flex-col gap-3 items-center">
        <p className="font-semibold text-[1rem] sm:text-2xl md:text-3xl leading-snug">
          Work With Real-World Hacking Projects
        </p>
        <p className="font-light text-[0.7rem] sm:text-base leading-relaxed text-center">
          Perform Penetration testing on an E-Commerce website like Amazon using Kali Linux, Burp Suite, <br className="hidden sm:block" />
          Recon-ng framework, etc to discover hidden flags and vulnerabilities.
        </p>
      </div>
    </div>
  </div>

  {/* ---------- Card Grid ---------- */}
  <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10 px-1 sm:px-4 md:px-6">
    {Cards.map((item, idx) => (
      <div
        key={idx}
        className="w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.01]"
      >
        {/* Image */}
        <div className="w-full">
          <img
            src={item.image}
            alt="card"
            className="w-full h-32 sm:h-40 object-cover"
          />
        </div>

        {/* Text */}
        <ul className="flex flex-col items-center justify-center text-center px-1 py-3 sm:px-4 sm:py-4">
          <li className="text-[0.73rem] sm:text-[0.85rem] font-light sm:font-normal">{item.p1}</li>
        </ul>
      </div>
    ))}
  </div>
</div>

  )
}

export default EHprojects