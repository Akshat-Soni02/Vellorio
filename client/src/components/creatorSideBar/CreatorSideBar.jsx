import React, { useEffect, useState } from "react";
import logo from "../../assets/logo_transparent.png";
import logo2 from "../../assets/vellorio-favicon-color.png";
import "./Style.css";
import { TiThLarge } from "react-icons/ti";
import { TbBox } from "react-icons/tb";
import { TiWaves } from "react-icons/ti";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CreatorSideBar = () => {
  const location = useLocation();

  return (
    <section className="sb-outer">
      <div className="sb-panel1">
        <div className="sb-img-container">
          <img
            src={logo2}
            alt="vellorio"
            width={128}
            height={128}
            className="logo_img_sb"
          />
        </div>
        <div className="sb-nav-panel">
          <Link
            style={{
              backgroundColor: location.pathname.includes("/creator/dashboard")
                ? "#07464782"
                : "#053132",
              color: location.pathname.includes("/creator/dashboard")
                ? "white"
                : "white",
            }}
            className="sb-navs"
            tabIndex={0}
            to={"/creator/dashboard"}
          >
            <TiThLarge className="sb-icons" /> Dashboard
          </Link>
          <Link
            style={{
              backgroundColor: location.pathname.includes("/creator/orders")
                ? "#0b5d5f10"
                : "#053132",
              color: location.pathname.includes("/creator/orders")
                ? "white"
                : "white",
            }}
            className="sb-navs"
            tabIndex="0"
            to={"/creator/orders"}
          >
            <TbBox className="sb-icons" /> Orders
          </Link>
          <Link
            style={{
              backgroundColor: location.pathname.includes("/creator/gigs")
                ? "#0b5d5f10"
                : "#053132",
              color: location.pathname.includes("/creator/gigs")
                ? "white"
                : "white",
            }}
            className="sb-navs"
            tabIndex="0"
            to={"/creator/gigs"}
          >
            <TiWaves className="sb-icons" /> Gigs
          </Link>
          <Link
            style={{
              backgroundColor: location.pathname.includes("/creator/earnings")
                ? "#0b5d5f10"
                : "#053132",
              color: location.pathname.includes("/creator/earnings")
                ? "white"
                : "white",
            }}
            className="sb-navs"
            tabIndex="0"
            to={"/creator/earnings"}
          >
            <MdOutlineAttachMoney className="sb-icons" /> Earnings
          </Link>
          <Link
            style={{
              backgroundColor: location.pathname.includes("/creator/analytics")
                ? "#0b5d5f10"
                : "#053132",
              color: location.pathname.includes("/creator/analytics")
                ? "white"
                : "white",
            }}
            className="sb-navs"
            tabIndex="0"
            to={"/creator/analytics"}
          >
            <IoAnalytics className="sb-icons" /> Analytics
          </Link>
          <Link
            style={{
              backgroundColor: location.pathname.includes("/creator/contact")
                ? "#0b5d5f10"
                : "#053132",
              color: location.pathname.includes("/creator/contact")
                ? "white"
                : "white",
            }}
            className="sb-navs"
            tabIndex="0"
            to={"/creator/contact"}
          >
            <RiContactsFill className="sb-icons-last" /> Contact Us
          </Link>
        </div>
      </div>
      <div className="sb-panel2">
        <div className="sb-logout-btn">
          <MdOutlineLogout /> Logout
        </div>
      </div>
    </section>
  );
};

export default CreatorSideBar;
