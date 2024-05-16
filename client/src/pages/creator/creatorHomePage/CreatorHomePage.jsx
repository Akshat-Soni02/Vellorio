import "./style.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { profileRoute } from "../../../api/ApiRoutes";
import CreatorSideBar from "../../../components/creatorSideBar/CreatorSideBar";
import CreatorDashboard from "../creatorDashboard/CreatorDashboard.jsx";

import { toast, Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

import axios from "axios";
import { setLoading, resetLoading } from "../../../store/UserSlice";

const CreatorHomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  // const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

  const getUser = async () => {
    dispatch(setLoading());
    try {
      const res = await axios.get(profileRoute, {
        withCredentials: true,
      });
      setUser(res.data?.user);
      // setUserName(res.data?.user?.name);
    } catch (e) {
      toast.error(e.response.data.message);
      navigate("/login");
    } finally {
      dispatch(resetLoading());
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
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
        <section className="cr-homePage">
          <Toaster />
          <section className="MainSb">
            <CreatorSideBar />
          </section>
          <section className="cr-content">
            {user && <CreatorDashboard user={user} />}
          </section>
        </section>
      )}
    </>
  );
};

export default CreatorHomePage;
