import React from 'react'
import CoursesHeader from '../components/courses/CoursesHeader'
import BrowseCoursesTemplate from '../components/BrowseCoursesTemplate'
import CoursesFeatures from '../components/courses/CoursesFeatures'
import CoursesReview from '../components/courses/CoursesReview'
import HomeContactUs from '../components/home/HomeContactUs'

const Courses = () => {
  return (
    <div>
      <CoursesHeader />
      <BrowseCoursesTemplate />
      <CoursesFeatures />
      <CoursesReview />
      <HomeContactUs />
    </div>
  )
}

export default Courses