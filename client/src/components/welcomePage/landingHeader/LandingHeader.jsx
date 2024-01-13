import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from "../../../assets/Screenshot 2023-11-11 222117.png";
import { Link } from 'react-router-dom';
import "./style.css";

const LandingHeader = () => {
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate("/login");
  }

  return (
    <div className='loadHead'>
        <img src={logo} alt="vellorio"/>
        <div className="sign" onClick={navToLogin}>Get Started</div>
    </div>
  )
}

export default LandingHeader;