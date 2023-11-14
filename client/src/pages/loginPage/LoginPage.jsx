import React from 'react'
import {MdLogin} from "react-icons/md"
import {FaUser} from "react-icons/fa6"
import {AiFillEye} from "react-icons/ai"
import {BsArrowRightShort} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import "./style.css"


const LoginPage = () => {
  return (
    <section className="loginSection">
      <form className="lform">
        <div className="lform-intro">
            <MdLogin className='lform-icon'/>
            <h1 className='lform-title'>Welcome!</h1>
            <p className="lform-subtitle">Sign in to your account</p>
        </div>
        <div className="lform-fields">
          <div className="lform-field-div">
            <p className="lform-fieldname">Email</p>
            <div className="lform-field-input-container">
              <input className="lform-field-input" type='email' required/>
              <FaUser className="lform-fieldIcon"/>
            </div>
          </div>
          <div className="lform-field-div">
            <p className="lform-fieldname">Password</p>
            <div className="lform-field-input-container">
              <input className="lform-field-input" type='password' required/>
              <AiFillEye className="lform-fieldIcon eye"/>
            </div>
          </div>
        </div>
        <div className="lform-authAction">
          <p className="lform-authAction-signup">Create a New Account</p>
          <p className="lform-authAction-forgot">forgot password?</p>
        </div>
        <div className="lform-buttons">
          <button className="lform-login-button">Login<BsArrowRightShort/></button>
        </div>
        {/* <div className="lform-thirdParty-text">Or</div> */}
        <div className="lform-line-text-line">
          <div className="or-text">or</div>
        </div>
        <div className="lform-thirdPartyLogin">
          <FcGoogle className='gg ic'/>
          <BiLogoFacebook className='fb ic'/>
          <AiOutlineTwitter className='twt ic'/>
        </div>
      </form>
    </section>
  )
}

export default LoginPage