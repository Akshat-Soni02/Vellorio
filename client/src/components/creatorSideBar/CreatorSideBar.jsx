import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo_transparent.png'
import "./Style.css";
import { TiThLarge } from "react-icons/ti";
import { TbBox } from "react-icons/tb";
import { TiWaves } from "react-icons/ti";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const CreatorSideBar = () => {
  const [page, setPage] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();


  const changePage = (pg) => {
    setPage(pg);
    navigate(`/creator/${pg}`);
  }

  return (
    <>
        <section className="sb-outer">
          <div className="sb-panel1">
            <div className="sb-img-container">
              <img src={logo} alt='vellorio' width={337} height={92} className='logo_img_sb'/>
            </div>
            <div className="sb-nav-panel">
                <Link style={{backgroundColor: location.pathname.includes("/creator/Dashboard") ? "#07686b" : "white",
                              color: location.pathname.includes("/creator/Dashboard") ? "white" : "#07686b"}} className='sb-navs' tabIndex={0} to={"/creator/Dashboard"}><TiThLarge className='sb-icons'/>  Dashboard</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/Orders") ? "#07686b" : "white",
                              color: location.pathname.includes("/creator/Orders") ? "white" : "#07686b"}} className="sb-navs" tabIndex='0' to={"/creator/Orders"}><TbBox className='sb-icons'/>  Orders</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/Gigs") ? "#07686b" : "white",
                              color: location.pathname.includes("/creator/Gigs") ? "white" : "#07686b"}} className="sb-navs" tabIndex='0' to={"/creator/Gigs"}><TiWaves className='sb-icons'/>  Gigs</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/Earnings") ? "#07686b" : "white",
                              color: location.pathname.includes("/creator/Earnings") ? "white" : "#07686b"}} className="sb-navs" tabIndex='0' to={"/creator/Earnings"}><MdOutlineAttachMoney className='sb-icons'/>  Earnings</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/Analytics") ? "#07686b" : "white",
                              color: location.pathname.includes("/creator/Analytics") ? "white" : "#07686b"}} className="sb-navs" tabIndex='0' to={"/creator/Analytics"}><IoAnalytics className='sb-icons'/>  Analytics</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/Contact") ? "#07686b" : "white",
                              color: location.pathname.includes("/creator/Contact") ? "white" : "#07686b"}} className="sb-navs" tabIndex='0' to={"/creator/Contact"}><RiContactsFill className='sb-icons-last'/>  Contact Us</Link>
            </div>
          </div>
          <div className="sb-panel2">
            <div className="sb-logout">
                <div className="sb-logout-btn">
                  <MdOutlineLogout/> Logout
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default CreatorSideBar;