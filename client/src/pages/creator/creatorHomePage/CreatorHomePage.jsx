import React, { useState, useEffect } from 'react'
import "./style.css";
import CreatorSideBar from '../../../components/creatorSideBar/CreatorSideBar';
import CreatorHeader from '../../../components/creatorHeader/CreatorHeader';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {profileRoute} from '../../../api/ApiRoutes';
import { toast,Toaster } from 'react-hot-toast';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, Link } from 'react-router-dom';
import { setLoading,resetLoading } from '../../../store/UserSlice';
import CreatorWidget from '../../../components/creatorWidget/CreatorWidget';
import { MdDone } from "react-icons/md";
// import { FaDollarSign } from "react-icons/fa";
import { RiArrowLeftRightLine } from "react-icons/ri";
// import { RiTimeFill } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { LuUserPlus2 } from "react-icons/lu";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../../../utils/Data.jsx";
import LineChart from "../../../components/lineChart/LineChart.jsx";

import ava from "../../../assets/test.png";
import ListWrapper from '../../../components/lists/ListWrapper.jsx';

Chart.register(CategoryScale);

const CreatorHomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuthenticated, loading} = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");
  const [user,setUser] = useState(null);
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: Data.map((data) => data.userGain),
      backgroundColor: "orange",
      borderColor: "orange",
      borderWidth: "1",
      pointBorderColor: "white"
    },
  ],
  });

  const clients = [
    {
      name: 'Client 1',
      photo: {ava},
      paymentDetails: 'Payment details for Client 1'
    },
    {
      name: 'Client 2',
      photo: {ava},
      paymentDetails: 'Payment details for Client 2'
    },
    // Add more clients as needed
  ];

  const renderActiveProjectsItem = (client) => (
    <>
      <img src={client.photo} alt={client.name} />
      <div className="client-details">
        <h3>{client.name}</h3>
        <p>Payment Details: {client.paymentDetails}</p>
      </div>
      <button className="chat-icon">Chat</button>
    </>
  );

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
        <section className="Dash">
          <Toaster/>
          <section className="MainSb">
            <CreatorSideBar/>
          </section>
          <section className="Dash-content">
            <CreatorHeader heading = "head" avatar="avatara" userName={userName}/>
            <section className="widgets">
              <CreatorWidget icon={<MdOutlineCurrencyRupee />} amount={'12,000'} about={"This Month Revenue"} percent={"+1.2%"}/>
              <CreatorWidget icon={<MdDone/>} amount={'+16'} about={"Projects Accepted"} percent={"+1.2%"}/>
              <CreatorWidget icon={<RiArrowLeftRightLine />} amount={'92.8%'} about={"Delievered on Time"} percent={"+1.2%"}/>
              <CreatorWidget icon={<IoTimeOutline />} amount={'1h 8m'} about={"Responsed on Time"} percent={"+1.2%"}/>
              <CreatorWidget icon={<LuUserPlus2 />} amount={5} about={"New Clients This Month"} percent={"+1.2%"}/>
            </section>
            <section className="graph-users">
              <div className="creatorHomeGraph">
                <LineChart chartData={chartData || []}/>
              </div>
              <div className="active-projects">
                <div className="act-heading">
                  <p>Active Projects</p>
                  <Link to={"/creator/orders"}>See All</Link>
                </div>
                <div className="content-active-projects">
                  <ListWrapper items={clients} renderItem={renderActiveProjectsItem} />
                </div>
              </div>
            </section>
          </section>
        </section>
          )
      }
    </>
  )
}

export default CreatorHomePage