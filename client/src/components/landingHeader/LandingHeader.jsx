import React from 'react';
import logo from "../../assets/vellorio-high-resolution-logo-transparent.png";
import { Link } from 'react-router-dom';
import "./style.css";

const LandingHeader = () => {
  return (
    <div className='loadHead'>
        <img src={logo} alt="vellorio" />
        <div className='subdiv'>
            <Link to="#about">about</Link>
            <Link to= "#offer">more</Link>
            <div className="sign">Sign in</div>
        </div>
    </div>
  )
}

export default LandingHeader;