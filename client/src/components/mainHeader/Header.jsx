import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/Screenshot 2023-11-11 222117.png";
import { Link } from 'react-router-dom';
import "./style.css";

const LandingHeader = () => {
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate("/login");
  }

  return (
    <div className='webHeader'>
        <img src={logo} alt="vellorio"/>
        <div className='webHeader-links'>
            <Link to="#about">About</Link>
            <Link to= "#offerSection">Our Product</Link>
        </div>
        <div className="sign" onClick={navToLogin}>Get Started</div>
    </div>
  )
}

export default LandingHeader;