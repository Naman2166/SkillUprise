import React from "react";
import { assets } from "../assets/assets";
import { FaStar } from "react-icons/fa";

const Internship = () => {
  const internshipCards = [
    { post: "Full Stack Website development (MERN stack)", location: "offline", stipend: "₹15,000/month", applyBy: "31 Jul 2025" },
    { post: "Cyber Security Analyst", location: "offline", stipend: "₹15,000/month", applyBy: "31 Jul 2025" },
    { post: "Social Media Manager", location: "offline", stipend: "₹10,000/month", applyBy: "31 Jul 2025" },
    { post: "Student Relationship Manager", location: "online", stipend: "₹10,000/month", applyBy: "31 Jul 2025" },
    { post: "Digital Marketing Executive", location: "online", stipend: "₹8,000/month", applyBy: "31 Jul 2025" },
    { post: "HR Intern", location: "offline", stipend: "₹12,000/month", applyBy: "31 Jul 2025" },
  ];

  const popularCourses = [
    { image: assets.i1, topic: "Ethical Hacking and Cyber Security from Scratch", ratings: "(1032)" },
    { image: assets.i2, topic: "Website Development from Scratch", ratings: "(430)" },
    { image: assets.i3, topic: "Cloud Computing with AWS", ratings: "(590)" },
    { image: assets.i4, topic: "Data Science", ratings: "(845)" },
    { image: assets.i5, topic: "UI/UX Development", ratings: "(945)" },
  ];

  return (
    <div className="container mx-auto px-4 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 transition-all duration-300 ease-in-out">
        {/* Internship list */}
        <section className="flex-1  overflow-y-auto pr-2 scroll-smooth">
          {internshipCards.map((card, idx) => (
            <div
            key={idx}
            className={`border border-gray-300 rounded-xl p-6 mb-6 shadow-sm bg-gray-100 ${
              idx === 0 ? "mt-2" : ""
            }`}
          >
          
              <header className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={assets.logo}
                    alt="Company logo"
                    className="h-12 w-12 object-contain"
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {card.post}
                  </h3>
                </div>
                <button className="text-white bg-blue-600 px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </header>

              <hr className="my-4 border-gray-400" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium">Location</p>
                  <p className="capitalize">{card.location}</p>
                </div>
                <div>
                  <p className="font-medium">Stipend</p>
                  <p>{card.stipend}</p>
                </div>
                <div>
                  <p className="font-medium">Apply By</p>
                  <p>{card.applyBy}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Popular courses */}
        <aside className="w-full lg:w-[28%] space-y-4 sticky top-[9.1rem] self-start">
          <div className="flex items-end justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Popular Courses
            </h2>
            <button className="text-sm font-medium text-blue-600 hover:underline">
              View All
            </button>
          </div>
          <hr className="border-gray-400" />
          <ul className="space-y-5">
            {popularCourses.map((course, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <img
                  src={course.image}
                  alt={course.topic}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-sm text-gray-800">
                    {course.topic}
                  </p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-400" size={14} />
                    ))}
                    <span className="text-xs text-gray-600 font-light">
                      {course.ratings}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Internship;
