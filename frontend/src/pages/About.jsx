import React from 'react'
import AboutHeader from '../components/about/AboutHeader'
import AboutMission from '../components/about/AboutMission'
import AboutStories from '../components/about/AboutStories'
import AboutMembers from '../components/about/AboutMembers'
import HomeGallery from '../components/home/HomeGallery'
import AboutJoinUs from '../components/about/AboutJoinUs'
import HomeContactUs from '../components/home/HomeContactUs'

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutMission />
      <AboutMembers />
      <AboutStories />
      <HomeGallery />
      <div className='-mt-8'>
        <HomeContactUs />
      </div>
      <AboutJoinUs />
    </div>
  )
}

export default About