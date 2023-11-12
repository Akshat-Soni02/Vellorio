import React from 'react';
import { Navigate } from 'react-router-dom';
import logo from "../../../assets/Screenshot 2023-11-11 222117.png";
import { Link } from 'react-router-dom';
import "./style.css";

const LandingHeader = () => {

  const navToLogin = () => {
    <Navigate to={"/login"}/>
  }

  return (
    <div className='loadHead'>
        <img src={logo} alt="vellorio"/>
        <div className='subdiv'>
            <Link to="#about">About</Link>
            <Link to= "#offer">Product</Link>
        </div>
        <div className="sign" onClick={navToLogin()}>Sign up</div>
    </div>
  )
}

export default LandingHeader;