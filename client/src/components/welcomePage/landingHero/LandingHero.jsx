import React from 'react'
import aboutImage from "../../../assets/Top-Image-1000x1000-1.jpg"
import "./style.css"
import {GrShieldSecurity} from "react-icons/gr"
import {SiHiveBlockchain} from "react-icons/si"
import {FiGitBranch} from "react-icons/fi"


const LandingHero = () => {
  return (
    <>
        <div className="hero">
            <div className="left">
              <p className='heading'>Communicate. Collaborate. Create.</p>
              <p className='para'>Vellorio provides an effective and powerful way to get your work done.</p>
              <button className='heroButton'>Get Started</button>
              <div className="icons">
                <div className="gr"><GrShieldSecurity/> <span>Speed & Security</span> </div>
                <div className="si"><SiHiveBlockchain/> <span>Flexibility & Scalability</span> </div>
                <div className="fi"><FiGitBranch/> <span>Better Collaboration</span> </div>
              </div>
            </div>
            <div className="right">
              <img className='heroImage' src={aboutImage} alt="" />
            </div>
        </div>
    </>
  )
}

export default LandingHero