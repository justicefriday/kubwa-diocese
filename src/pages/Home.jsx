import React from 'react'
import HeroCarousel from '../components/home/HeroCarousel'
import Welcome from '../components/home/Welcome'
import MottoPillars from '../components/home/MottoPillars'
import HistoryTeaser from '../components/home/HistoryTeaser'
import BishopPreview from '../components/home/BishopPreview'
import Stats from '../components/home/Stats'
import GiveBanner from '../components/home/GiveBanner'
const Home = () => {
  return (
    <>
          <HeroCarousel />
          <Welcome/>
          <MottoPillars/>
          <HistoryTeaser />
          <BishopPreview />
          <Stats />
          <GiveBanner />
        

    </>
  )
}

export default Home