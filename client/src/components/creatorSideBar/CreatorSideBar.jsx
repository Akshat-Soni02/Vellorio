import React, { useEffect, useState } from 'react'
import logo from '../../assets/Screenshot 2023-11-11 222117.png'
import "./Style.css";
import { TiThLarge } from "react-icons/ti";
import { TbBox } from "react-icons/tb";
import { TiWaves } from "react-icons/ti";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CreatorSideBar = () => {
  const [page, setPage] = useState("Dashboard");
  const navigate = useNavigate();


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
                <div className="sb-navs" tabIndex='0' onClick={() => changePage("Dashboard")}><TiThLarge className='sb-icons'/>  Dashboard</div>
                <div className="sb-navs" tabIndex='0' onClick={() => changePage("Orders")}><TbBox className='sb-icons'/>  Orders</div>
                <div className="sb-navs" tabIndex='0' onClick={() => changePage("Gigs")}><TiWaves className='sb-icons'/>  Gigs</div>
                <div className="sb-navs" tabIndex='0' onClick={() => changePage("Earnings")}><MdOutlineAttachMoney className='sb-icons'/>  Earnings</div>
                <div className="sb-navs" tabIndex='0' onClick={() => changePage("Analytics")}><IoAnalytics className='sb-icons'/>  Analytics</div>
                <div className="sb-navs" tabIndex='0' onClick={() => changePage("Contact")}><RiContactsFill className='sb-icons-last'/>  Contact Us</div>
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