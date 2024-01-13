import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo_transparent.png";
import aboutImage from "../../assets/Top-Image-1000x1000-1.jpg"
import {GrShieldSecurity} from "react-icons/gr"
import {SiHiveBlockchain} from "react-icons/si"
import {FiGitBranch} from "react-icons/fi"
import Footer from '../../components/footer/Footer.jsx'
import './style.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate("/login");
  }

  return (
    <>
      <div className='loadHead'>
          <img src={logo} alt="vellorio"/>
          <div className="sign" onClick={navToLogin}>Get Started</div>
      </div>
      <div className="hero">
          <div className="left">
            <p className='heading'>Communicate. Collaborate. Create.</p>
            <p className='para'>Vellorio provides an effective and powerful way to get your work done.</p>
            <button className='heroButton' onClick={navToLogin}>Get Started</button>
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
      <section className="impo">
          <div className="impodiv">
              <div className="impoleft">With the Right Software, Great Things Can Happen</div>
              <div className="imporight">Facilitating dynamic collaborations in the digital realm, our platform brings together accomplished professionals and forward-thinking businesses for innovative project engagements. Uniting expertise and opportunities, we empower individuals to showcase their skills while enabling companies to access a diverse pool of talent.</div>
          </div>
      </section>
      <section className="offerSection">
        <div className="outerOffer">
            <div className='offer-title'>What We Offer</div>
            <div className='offer-content'>We provide a tailored platform that unlocks unparalleled opportunities for both professionals and businesses. For skilled individuals, our platform offers a gateway to showcase talents, access diverse projects, and build a robust portfolio.</div>
        </div>
        <div className="offer2">
            <div className="offer2-card">
              <div className="offer2-card1-image"></div>
              <div className="offer2-card-title">Workflows That Work</div>
              <div className="offer2-card-content">Optimize your projects with our streamlined workflows, ensuring seamless efficiency. Experience collaborative productivity on a whole new level with our platform.</div>
            </div>
            <div className="offer2-card">
              <div className="offer2-card2-image"></div>
              <div className="offer2-card-title">All-In-One Solution</div>
              <div className="offer2-card-content">Discover an all-in-one solution that seamlessly integrates tools, streamlines workflows, and fosters collaboration, providing a comprehensive platform for your diverse project needs.</div>
            </div>
            <div className="offer2-card">
              <div className="offer2-card3-image"></div>
              <div className="offer2-card-title">Comprehensive Customer Support</div>
              <div className="offer2-card-content">Experience unparalleled peace of mind with our comprehensive customer support, ensuring prompt assistance and resolution for all your inquiries and needs.</div>
            </div>
            <div className="offer2-card">
              <div className="offer2-card4-image"></div>
              <div className="offer2-card-title">Smart Automation Tools</div>
              <div className="offer2-card-content">Empower your workflow with our smart automation tools, streamlining tasks and enhancing efficiency through intelligent, time-saving automation solutions.</div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default LandingPage