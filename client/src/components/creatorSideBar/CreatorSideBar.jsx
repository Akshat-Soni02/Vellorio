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
  const [page, setPage] = useState("dashboard");
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
                <Link style={{backgroundColor: location.pathname.includes("/creator/dashboard") ? "#074647" : "white",
                              color: location.pathname.includes("/creator/dashboard") ? "white" : "#033234"}} className='sb-navs' tabIndex={0} to={"/creator/dashboard"}><TiThLarge className='sb-icons'/>  Dashboard</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/orders") ? "#074647" : "white",
                              color: location.pathname.includes("/creator/orders") ? "white" : "#033234"}} className="sb-navs" tabIndex='0' to={"/creator/orders"}><TbBox className='sb-icons'/>  Orders</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/gigs") ? "#074647" : "white",
                              color: location.pathname.includes("/creator/gigs") ? "white" : "#033234"}} className="sb-navs" tabIndex='0' to={"/creator/gigs"}><TiWaves className='sb-icons'/>  Gigs</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/earnings") ? "#074647" : "white",
                              color: location.pathname.includes("/creator/earnings") ? "white" : "#033234"}} className="sb-navs" tabIndex='0' to={"/creator/earnings"}><MdOutlineAttachMoney className='sb-icons'/>  Earnings</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/analytics") ? "#074647" : "white",
                              color: location.pathname.includes("/creator/analytics") ? "white" : "#033234"}} className="sb-navs" tabIndex='0' to={"/creator/analytics"}><IoAnalytics className='sb-icons'/>  Analytics</Link>
                <Link style={{backgroundColor: location.pathname.includes("/creator/contact") ? "#074647" : "white",
                              color: location.pathname.includes("/creator/contact") ? "white" : "#033234"}} className="sb-navs" tabIndex='0' to={"/creator/contact"}><RiContactsFill className='sb-icons-last'/>  Contact Us</Link>
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