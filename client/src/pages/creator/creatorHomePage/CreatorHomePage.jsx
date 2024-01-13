import React, { useState, useEffect } from 'react'
import "./style.css";
import CreatorSideBar from '../../../components/creatorSideBar/CreatorSideBar';
import CreatorHeader from '../../../components/creatorHeader/CreatorHeader';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {profileRoute} from '../../../api/ApiRoutes';
import { toast,Toaster } from 'react-hot-toast';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';
import { setLoading,resetLoading } from '../../../store/UserSlice';
import CreatorWidget from '../../../components/creatorWidget/CreatorWidget';
import { MdDone } from "react-icons/md";


const CreatorHomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuthenticated, loading} = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");
  const [user,setUser] = useState(null);

  const getUser = async () => {
    dispatch(setLoading());
    axios
      .get(profileRoute, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setUserName(user?.name);
        dispatch(resetLoading());
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!isAuthenticated) return navigate("/login");

  return (
    <>
      {loading ? (
        <div className="loadScreen">
          <ClipLoader
            color={"36D9B8"}
            loading={loading}
            // cssOverride={override}
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <section className="Dash">
          <Toaster/>
          <section className="MainSb">
            <CreatorSideBar/>
          </section>
          <section className="Dash-content">
            <CreatorHeader heading = "head" avatar="avatara" userName={userName}/>
            <section className="widgets">
              {/* <CreatorWidget icon={<MdDone/>} amount={16} about={"Delievered On Time"} percent={"+1.2%"}/> */}
              {/* <CreatorWidget icon={<MdDone/>} amount={16} about={"Delievered On Time"} percent={"+1.2%"}/> */}
              {/* <CreatorWidget icon={<MdDone/>} amount={16} about={"Delievered On Time"} percent={"+1.2%"}/> */}
              {/* <CreatorWidget icon={<MdDone/>} amount={16} about={"Delievered On Time"} percent={"+1.2%"}/> */}
              <CreatorWidget/>
              <CreatorWidget/>
              <CreatorWidget/>
              <CreatorWidget/>
            </section>
          </section>
        </section>
          )
      }
    </>
  )
}

export default CreatorHomePage