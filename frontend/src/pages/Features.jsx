import React from 'react'
import FeaturesHeader from '../components/features/FeaturesHeader'
import HomePlacements from '../components/home/HomePlacements'
import HomeTestTemplate from '../components/home/HomeTestTemplate'
import CoursesFeatures from '../components/courses/CoursesFeatures'
import HomeContactUs from '../components/home/HomeContactUs'

const Features = () => {
  return (
   <div className='flex flex-col gap-6'> 
     <FeaturesHeader />
     <HomePlacements />
     
     <div className='mt-10 flex flex-col items-center'>
       <div className='text-blue-600 text-lg sm:text-2xl font-medium mb-1'>Cracking a Job Made Easy With Our</div>
       <div className='-mb-20 text-gray-900 text-2xl sm:text-4xl  font-semibold'>Job Oriented Practical Trainings</div>
       <HomeTestTemplate />
     </div>
     
     <CoursesFeatures />
     <HomeContactUs />
    </div>
  )
}
 
export default Features