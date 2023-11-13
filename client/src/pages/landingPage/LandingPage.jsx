import React from 'react'
import LandingHeader from "../../components/welcomePage/landingHeader/LandingHeader.jsx"
import LandingHero from '../../components/welcomePage/landingHero/LandingHero.jsx'
import LandingImpo from '../../components/welcomePage/landingImpo/LandingImpo.jsx'
import LandingOffer from '../../components/welcomePage/landingOffer/LandingOffer.jsx'
import Footer from '../../components/footer/Footer.jsx'

const LandingPage = () => {
  return (
    <>
        <LandingHeader/>
        <LandingHero/>
        <LandingImpo/>
        <LandingOffer/>
        <Footer/>
    </>
  )
}

export default LandingPage