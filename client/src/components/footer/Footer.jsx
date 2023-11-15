import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Footer = () => {
  return (
    <>
        <section className="foot">
            <div className="abouts">
                <div className="contact">
                    <p className="title">Contact</p>
                    <p className="add">500 Terry Francine Street</p>
                    <p className="add2">San Francisco, CA 94158</p>
                    <p className="num">General Inquiries:123-456-7890</p>
                </div>
                <div className="links">
                    <p className="title">Quick Links</p>
                    <Link className = "linkFooter" to="#terms">Terms & Conditions</Link>
                    <Link className = "linkFooter" to="#policy">Privacy Policy</Link>
                </div>
                <div className="follow">
                    <p className="title">Follow</p>
                    <p className="followPages">LinkedIn</p>
                    <p className="followPages">YouTube</p>
                    <p className="followPages">Facebook</p>
                </div>
            </div>
            <div className="copy">
                <p className="footText">&#169; 2023 by Vellorio. Powered and Secured by Akshat</p>
            </div>
        </section>
    </>
  )
}

export default Footer