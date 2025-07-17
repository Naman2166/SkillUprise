import React, { useRef } from 'react';
import { FaFilePdf, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const HomePlacements = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const pdfNotices = [
    { name: "Yahwanth Sabbithi", post: "Software Engineer", package:"19 LPA", image: assets.P1 },
    { name: "Sravani Suvvari", post: "DevOps Engineer", package:"12 LPA", image: assets.P2 },
    { name: "Hemasri Dadi", post: "Software Engineer", package:"12.5 LPA", image: assets.P3 },
    { name: "Saif Khan", post: "R&D Development Assosciate", package:"10 LPA", image: assets.P4 },
    { name: "Naman Patel", post: "Web Developer", package:"13 LPA", image: assets.P1 },
    { name: "Kartik Aryan", post: "Web Developer", package:"9 LPA", image: assets.P2 },
    { name: "Salman Khan", post: "QA Enginner", package:"13.5 LPA", image: assets.P3 },
    { name: "Shraddha Kapoor", post: "Software Engineer", package:"8 LPA", image: assets.P4 },
    { name: "Tara Sutaria", post: "Software Engineer", package:"9 LPA", image: assets.P1},
  ];

  return (
    <div className="w-full mt-16 py-10 px-4 sm:px-6 lg:px-24">              {/* lg:px-20 -> for controlling width of this component */}
      <div className="relative flex flex-col items-center bg-blue-100 py-10 px-4 rounded-md shadow-md">

        {/* Title */}
        <div className='w-full flex flex-row items-center justify-between px-2'>
          <h1 className="text-xl sm:text-2xl md:text-3xl  font-medium text-black mb-4 border-l-4 border-blue-600 px-2 text-center">
            Latest Placements
          </h1>

        <div className='flex flex-row items-center justify-center gap-3'>
          <button className='text-[16px] text-blue-600 border border-blue-600 px-3 py-1 rounded-4xl cursor-pointer hover:font-medium'>
            View all
          </button>

        {/* Arrows buttons */}
        <button
          onClick={() => scroll(-250)}
          className="hidden md:flex items-center justify-center border border-blue-800 text-blue-800  cursor-pointer  z-10 p-2 rounded-full shadow hover:bg-blue-200 transition"
          >
          <FaChevronLeft className="" />
        </button>

        <button
          onClick={() => scroll(250)}
          className="hidden md:flex items-center justify-center border border-blue-800 text-blue-800 cursor-pointer z-10  p-2 rounded-full shadow hover:bg-blue-200 transition"
          >
          <FaChevronRight className="" />
        </button>
        </div>

        </div>

        {/* Scrollable Notice Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth w-full px-2 sm:px-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-4"
        >
          {pdfNotices.map((item, index) => (
            <div
              key={index}
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[200px] w-full h-60 bg-[#084298] text-white flex flex-col items-center justify-center gap-1 rounded shadow-md hover:scale-105 transition text-center p-1.5 shrink-0"
            >

              <div className='text-yellow-500 font-medium bg-black rounded-4xl px-4 text-lg mb-0.5 '>{item.package}</div> 

              <div className='mb-1.5'>
                <img src={item.image} className='w-full h-28 font-light text-sm' alt='image not available'/>
              </div>

              <div className='flex flex-col gap-1.5'>
                <p className="text-sm sm:text-[13px] font-medium truncate w-full">
                  {item.name}
                </p>
                <p className='font-light text-[11px]'>{item.post}</p>
              </div>

            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default HomePlacements;
