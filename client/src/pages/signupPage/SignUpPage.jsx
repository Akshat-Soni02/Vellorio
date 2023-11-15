import React, { useState } from 'react'
import {FaUser} from "react-icons/fa6"
import {AiFillEye} from "react-icons/ai"
import {AiFillEyeInvisible} from "react-icons/ai"
import {BsArrowRightShort} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {FaPencilAlt} from "react-icons/fa"
import "./style.css"
import { useNavigate } from 'react-router-dom'


const SignUpPage = () => {
  const navigate = useNavigate();
  const [visible,setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const seePassword = () => {
    setVisible(!visible);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  }

  const creatorDetail = () => {
    navigate("/creator/profileCreate");
  }

  return (
    <section className="signupSection">
      <form className="sform" onSubmit={submitHandler}>
        <div className="sform-intro">
            <h1 className='sform-title'>Create Account!</h1>
            <div className="sform-icon-div">
                <CgProfile className='sform-icon' tabIndex={0}/>
            </div>
            <p className='sform-subtitle'>Click to add your profile photo</p>
        </div>
        <div className="sform-fields">
            <div className="sform-field-div">
                <label className="sform-fieldname" htmlFor='name'>Name</label>
                <div className="sform-field-input-container">
                    <input className="sform-field-input" type='text' id='name' value={name} required onChange={(e) => setName(e.target.value)}/>
                    <FaPencilAlt className="sform-fieldIcon"/>
                </div>
            </div>
          <div className="sform-field-div">
            <label className="sform-fieldname" htmlFor='email'>Email</label>
            <div className="sform-field-input-container">
              <input className="sform-field-input" type='email' id='email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
              <FaUser className="sform-fieldIcon"/>
            </div>
          </div>
          <div className="sform-field-div">
            <label className="sform-fieldname" htmlFor='password'>Password</label>
            <div className="sform-field-input-container">
              <input className="sform-field-input" type={visible ? 'text' : 'password'} id='password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
              {visible ? <AiFillEye className="sform-fieldIcon eye" onClick={seePassword} aria-label='hide Passsword' tabIndex={0}/> : <AiFillEyeInvisible className="sform-fieldIcon eye" onClick={seePassword} aria-label='Seek Password' tabIndex={0}/>}
            </div>
          </div>
        </div>
        <div className="sform-authAction">
          <p className="sform-authAction-forgot" tabIndex={0}>Login Instead?</p>
        </div>
        <div className="sform-subtitle">Continue as</div>
        <div className="sform-buttons">
          <button className="sform-login-button" onClick={creatorDetail}>Creator<BsArrowRightShort/></button>
          <button className="sform-login-button">Client<BsArrowRightShort/></button>
        </div>
        <div className="sform-line-text-line">
          <div className="or-text">or</div>
        </div>
        <div className="sform-thirdPartyLogin">
          <FcGoogle className='gg ic' tabIndex={0}/>
          <BiLogoFacebook className='fb ic' tabIndex={0}/>
          <AiOutlineTwitter className='twt ic' tabIndex={0}/>
        </div>
      </form>
    </section>
  )
}

export default SignUpPage