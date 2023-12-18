import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from "../../assets/Screenshot 2023-11-11 222117.png";
import { Link } from 'react-router-dom';
import "./style.css";

const CreatorHeader = () => {
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate("/login");
  }

  return (
    <div className='CrHead'>
        <img className = "crHeadLogo" src={logo} alt="vellorio"/>
        <div className='crHead-links'>
            <Link to= "#DashBoard">DashBoard</Link>
            <Link to="#myBussiness">My Bussiness</Link>
        </div>
        <div className="crHead-shortCuts">
            <Link to="#notifications">Notifications</Link>
        </div>
        {/* <div className="" onClick={navToLogin}>Get Started</div> */}
    </div>
  )
}

export default CreatorHeader;