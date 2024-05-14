import "./style.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { profileRoute } from "../../../api/ApiRoutes";
import CreatorSideBar from "../../../components/creatorSideBar/CreatorSideBar";
import CreatorDashboard from "../creatorDashboard/CreatorDashboard.jsx";
import CreatorOrders from "../creatorOrders/CreatorOrders.jsx";
import CreatorGigs from "../creatorGigs/CreatorGigs.jsx";
import CreatorEarnings from "../creatorEarnings/CreatorEarnings.jsx";
import CreatorAnalytics from "../creatorAnalytics/CreatorAnalytics.jsx";
import CreatorContact from "../creatorContact/CreatorContact.jsx";

import { toast, Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

import axios from "axios";
import { setLoading, resetLoading } from "../../../store/UserSlice";

const CreatorHomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

  const [currPage, setCurrPage] = useState("dashboard");

  const getUser = async () => {
    dispatch(setLoading());
    axios
      .get(profileRoute, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data?.user);
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
        <section className="cr-homePage">
          <Toaster />
          <section className="MainSb">
            <CreatorSideBar />
          </section>
          <section className="cr-content">
            {currPage === "dashboard" && (
              <CreatorDashboard userName={userName} />
            )}
            {currPage === "orders" && <CreatorOrders />}
            {currPage === "gigs" && <CreatorGigs />}
            {currPage === "earnings" && <CreatorEarnings />}
            {currPage === "analytics" && <CreatorAnalytics />}
            {currPage === "contact" && <CreatorContact />}
          </section>
        </section>
      )}
    </>
  );
};

export default CreatorHomePage;
