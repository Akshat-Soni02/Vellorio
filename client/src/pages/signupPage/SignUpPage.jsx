import React, { useState } from 'react'
import {FaUser} from "react-icons/fa6"
import {AiFillEye} from "react-icons/ai"
import {AiFillEyeInvisible} from "react-icons/ai"
import {BsArrowRightShort} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"
import {CgProfile} from "react-icons/cg"
import {FaPencilAlt} from "react-icons/fa"
import { AiOutlineLoading } from "react-icons/ai";
import "./style.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setLoading,login, logout} from "../../store/UserSlice.js";
import { signupRoute } from '../../api/ApiRoutes.js';
import toast from 'react-hot-toast';
import ClipLoader from "react-spinners/ClipLoader";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader.js'


const SignUpPage = () => {
  const {loading} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible,setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [direct,setDirect] = useState("Creator");

  //Profile Image
  const [profilePhoto, setProfilePhoto] = useState("");
  const [imagePreview, setImagePreview] = useState(null);


  const handleImageChange = (e) => {
    const imgfile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgfile);
    reader.onloadend = () => {
      setImagePreview(reader.result)
      setProfilePhoto(imgfile);
    }
  };

  const seePassword = () => {
    setVisible(!visible);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading());
    console.log(profilePhoto);

    try {
      const { data } = await axios.post(
        signupRoute,
        {
          name,
          email,
          password,
          profilePhoto: "abacaabac",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setTimeout(() => {
        dispatch(login());
        console.log("Direct:", direct);
        if(direct === "Creator") {
          navigate("/creator/profileCreate");
        } else {
          navigate("/client/products");
        }
      },1500)
    } catch(error) {
      toast.error(error.response.data.message);
      dispatch(logout());
    }
  };

  const pathDecide = (path) => {
    if(path === "Creator") {
      setDirect("Creator");
    } else {
      setDirect("Client");
    }
  };

  return (
    <div className="loadingEff">
      {loading ? (
        <div className="loadScreen">
          <ClipLoader
            color={"36D9B8"}
            loading={loading}
            // cssOverride={override}
            size={45}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <section className="signupSection">
        <form className="sform" onSubmit={submitHandler}>
          <div className="sform-intro">
              <h1 className='sform-title'>Create Account!</h1>
              <label className="sform-icon-div" htmlFor='imageInput'>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    name="image"
                    id="imageInput"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  {imagePreview ? (
                    <img src={imagePreview} alt="Selected" className="sform-icon sform-prof-img" tabIndex={0} />
                  ) : (
                    loading ? (<AiOutlineLoading />) : (<CgProfile className="sform-icon" tabIndex={0} />)
                  )}
              </label>
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
            <button type='submit'  className="sform-login-button" onClick={() => pathDecide("Creator")}>Creator<BsArrowRightShort/></button>
            <button type='submit'  className="sform-login-button" onClick={() => pathDecide("Client")}>Client<BsArrowRightShort/></button>
          </div>
          <div className="sform-line-text-line">
            <div className="or-text">or</div>
          </div>
          <div className="sform-thirdPartyLogin">
            <FcGoogle className='gg ic' tabIndex={0}/>
            <BiLogoFacebook className='fb ic' tabIndex={0}/>
            <FaXTwitter className='twt ic' tabIndex={0}/>
          </div>
        </form>
      </section>
      )}
    </div>
  )
}

export default SignUpPage