import React from 'react'
import { useRef, useState, useEffect } from "react";
import { assets } from '../../assets/assets'

const AboutStories = () => {
  
  const Cards = [
    {
      name: "Pradeep Sai",
      about: "You can commit mistakes. But don't forgot to learn lessons out of it.",
      image: assets.AS1,
      review : assets.Review1,
      para: `Your mistakes are valued before being summoned for
commiting if.Team leaders will take up the responsibility,
they care and they teach you how to do it the right way. It
is like we are human's, we commit mistakes. But
remember ! repeating the same mistake will always lead
to unpredietable consequences.Our teams have mastered strategic approaches to
work short for better outcomes.` ,

    },
    {
      name: "Minhaz",
      about: "Be workoholic ! Also have fun the same way.",
      image: assets.AS2,
      review : assets.Review2,
      para: `At Skillsuprise people are respected for their work. Being
responsible and timely at work always has many
advantages. Your team becomes your family and you will
have lots of brothers and sistrs at work. At Skillsuprise
we are given equal priority to professional & professional
life. Our teams have mastered strategic approaches to
work short for better outcomes.`,
    },
    {
      name: "Ravi Sai",
      about: "You can be the naughtiest person of your team.",
      image: assets.AS3,
      review : assets.Review1,
      para: `You can jump around the corners to have fun and
laugher. You are valued as a person than your
profession. Ofcourse your can be summoned for your
over action too. But a friendly working environment with
brotherhood between the colleagues always turns our
work pressure into pleasure as we support each other
for individual growth.`,
    },
  ]


  
    const scrollRef = useRef(null); 
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;
  
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / containerWidth);
      setActiveIndex(index);
    };
  
    useEffect(() => {
      const refCurrent = scrollRef.current;
      if (refCurrent) {
        refCurrent.addEventListener("scroll", handleScroll);
        return () => refCurrent.removeEventListener("scroll", handleScroll);
      }
    }, []);



  return (
    <div className="mt-[3rem] w-full flex flex-col justify-center items-center gap-y-12">

    {/* upper part */}
    <div className="flex flex-col gap-2 items-center justify-center px-4 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-snug">
        We spread smiles through success stories <br />
        <span className="text-blue-600 text-xl sm:text-2xl md:text-3xl">
          & At work, We love to learn more
        </span>
      </h2>
      <p className="text-[0.9rem] text-gray-800">
        Listen to what your team says about the work culture at Skills Uprise
      </p>
    </div>

    {/* lower part */}
    <div className="w-full px-4 sm:px-6 lg:px-20">
      {/* Card Container */}
      <div
        ref={scrollRef}
        className="
          flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10
          overflow-x-auto md:overflow-visible
          scroll-snap-x scroll-smooth
           md:whitespace-normal
          pb-2
        "
      >
        {Cards.map((item, idx) => (
          <div
            key={idx}
            className="
              min-w-[80%] sm:min-w-[60%] md:min-w-0
              w-full h-auto text-xs bg-white flex-shrink-0 md:flex-shrink
              flex flex-col gap-4 overflow-hidden rounded-md shadow-sm shadow-gray-400
              scroll-snap-start
            "
          >
            <img
              src={item.image}
              alt="image"
              className="w-full h-auto object-cover"
            />
            <div className="flex flex-col gap-4 px-4 pb-2">
              <div className="flex flex-col gap-y-2.5">
                <p className="text-lg font-semibold text-blue-600">
                  {item.about}
                </p>
                <p className="text-[0.8rem] font-medium text-gray-700">
                  {item.para}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <hr className="border border-gray-300 mx-4" />
              <div className="flex flex-row items-center gap-x-2 px-4 pb-2">
                <img
                  src={item.review}
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
                <p className="text-sm font-medium text-gray-800">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2 md:hidden">
        {Cards.map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-full ${
              activeIndex === idx ? "bg-blue-600" : "bg-gray-300"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  </div>

  )
}

export default AboutStories