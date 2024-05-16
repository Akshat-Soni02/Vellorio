import "./style.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { Toaster, toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

import axios from "axios";
import { setLoading, login, logout } from "../../store/UserSlice.js";
import { signupRoute, profileRoute } from "../../api/ApiRoutes.js";

const SignUpPage = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Profile Image
  const [profilePhoto, setProfilePhoto] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const imgfile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgfile);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setProfilePhoto(imgfile);
      toast.success("Profile photo added successfully");
    };
  };

  const seePassword = () => {
    setVisible(!visible);
  };

  const fetchUserProfileAndLogin = async (dispatch) => {
    try {
      const res = await axios.get(profileRoute, { withCredentials: true });
      dispatch(login(res.data.user));
    } catch (error) {
      // Handle error if profile fetch fails
      console.error("Error fetching user profile:", error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading());
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePhoto", profilePhoto);

    try {
      const { data } = await axios.post(signupRoute, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      await fetchUserProfileAndLogin(dispatch);
      toast.success(data.message);
      setTimeout(() => {
        navigate("/creator/profilecreate");
      }, 1200);
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
      dispatch(logout());
    }
  };

  return (
    <div className="loadingEff">
      <Toaster />
      {loading ? (
        <div className="loadScreen">
          <ClipLoader
            color={"36D9B8"}
            loading={loading}
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <section className="signupSection">
          <form className="sform" onSubmit={submitHandler}>
            <div className="sform-intro">
              <h1 className="sform-title">Create Account!</h1>
              <label className="sform-icon-div" htmlFor="imageInput">
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  name="image"
                  id="imageInput"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Selected"
                    className="sform-icon sform-prof-img"
                    tabIndex={0}
                  />
                ) : loading ? (
                  <AiOutlineLoading />
                ) : (
                  <CgProfile className="sform-icon" tabIndex={0} />
                )}
              </label>
              <p className="sform-subtitle">Click to add your profile photo</p>
            </div>
            <div className="sform-fields">
              <div className="sform-field-div">
                <label className="sform-fieldname" htmlFor="name">
                  Name
                </label>
                <div className="sform-field-input-container">
                  <input
                    className="sform-field-input"
                    type="text"
                    id="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FaPencilAlt className="sform-fieldIcon" />
                </div>
              </div>
              <div className="sform-field-div">
                <label className="sform-fieldname" htmlFor="email">
                  Email
                </label>
                <div className="sform-field-input-container">
                  <input
                    className="sform-field-input"
                    type="email"
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FaUser className="sform-fieldIcon" />
                </div>
              </div>
              <div className="sform-field-div">
                <label className="sform-fieldname" htmlFor="password">
                  Password
                </label>
                <div className="sform-field-input-container">
                  <input
                    className="sform-field-input"
                    type={visible ? "text" : "password"}
                    id="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {visible ? (
                    <AiFillEye
                      className="sform-fieldIcon eye"
                      onClick={seePassword}
                      aria-label="hide Passsword"
                      tabIndex={0}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      className="sform-fieldIcon eye"
                      onClick={seePassword}
                      aria-label="Seek Password"
                      tabIndex={0}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="sform-authAction">
              <p
                className="sform-authAction-forgot"
                tabIndex={0}
                onClick={() => navigate("/login")}
              >
                Login Instead?
              </p>
            </div>
            <div className="sform-buttons">
              <button type="submit" className="sform-login-button">
                Sign Up
                <BsArrowRightShort />
              </button>
            </div>
            <div className="sform-line-text-line">
              <div className="or-text">or</div>
            </div>
            <div className="sform-thirdPartyLogin">
              <FcGoogle className="gg ic" tabIndex={0} />
              <BiLogoFacebook className="fb ic" tabIndex={0} />
              <FaXTwitter className="twt ic" tabIndex={0} />
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default SignUpPage;
