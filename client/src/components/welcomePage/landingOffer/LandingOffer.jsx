import React from 'react'
import "./style.css"

const LandingOffer = () => {
  return (
    <>
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
    </>
  )
}

export default LandingOffer