import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import "./style.css"


const Footer = () => {
  return (
    <>
        <footer className="footer">
            <ul className="menuItems">
                <li className="menuItem">Terms Of Use</li>
                <li className="menuItem">Privacy-Policy</li>
                <li className="menuItem">About</li>
                <li className="menuItem">Blog</li>
                <li className="menuItem">FAQ</li>
            </ul>
            <div className="infoText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="socialIcons-ft">
                <span className="icon-ft">
                    <FaFacebookF />
                </span>
                <span className="icon-ft">
                    <FaInstagram />
                </span>
                <span className="icon-ft">
                    <FaXTwitter />
                </span>
                <span className="icon-ft">
                    <FaLinkedin />
                </span>
            </div>
        </footer>
    </>
  )
}

export default Footer