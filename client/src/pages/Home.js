import React from 'react'
import Footer from '../components/Footer'
import LandingPage1 from '../components/landing/LandingPage1'
import LandingPage2 from '../components/landing/LandingPage2'
import LandingPage3 from '../components/landing/LandingPage3'
import LandingPage4 from '../components/landing/LandingPage4'
import LandingPage5 from '../components/landing/LandingPage5'

function Home () {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <LandingPage1 />
      <LandingPage2 />
      <LandingPage3 />
      <LandingPage4 />
      <LandingPage5 />
      <Footer />
    </div>
  )
}

export default Home
