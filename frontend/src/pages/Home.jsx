import React from 'react'
import HomeHeader from '../components/home/HomeHeader'
import HomeCompanies from '../components/home/HomeCompanies'
import HomePlacements from '../components/home/HomePlacements'
import HomeTestTemplate from '../components/home/HomeTestTemplate'
import BrowseCoursesTemplate from '../components/BrowseCoursesTemplate'
import HomeGallery from '../components/home/HomeGallery'
import HomeBanner from '../components/home/HomeBanner'
import HomeContactUs from '../components/home/HomeContactUs'
import HomeReviews from '../components/home/HomeReviews'


const Home = () => {
  return (
    <div>
        <HomeHeader />
        <HomeCompanies />
        <BrowseCoursesTemplate />
        <HomeTestTemplate />
        <HomePlacements />
        <HomeReviews />
        <HomeGallery />
        <HomeBanner />
        <HomeContactUs />
    </div>
  )
}

export default Home