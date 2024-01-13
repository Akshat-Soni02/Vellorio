import React from 'react';
import { useNavigate } from 'react-router-dom';
import ava from '../../assets/test.png';
import { GoBellFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";


const CreatorHeader = (heading,avatar,userName) => {
  const navigate = useNavigate();

  return (
    <header className='Crh'>
      <div className="HeadName">Dashboard</div>
      {/* <div></div> */}
      <div className="userDet">
        <GoBellFill className='bellIcon'/>
        <div className="Crh-user">
          <img className='userAva' src={ava} alt=''/>
          <div className="Crh-data">
            <span className="Crh-naam">Akshat</span>
            <IoIosArrowDown className='downIcon'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default CreatorHeader;