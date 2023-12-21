import React from 'react';
import { useNavigate } from 'react-router-dom';
import ava from '../../assets/avatar-icon.jpg';
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";


const CreatorHeader = (heading,avatar,userName) => {
  const navigate = useNavigate();

  return (
    <header className='Crh'>
      <div className="HeadName">Heading</div>
      <div className="userDet">
        <div className="noti">
          <GoBell/>
        </div>
        <div className="Crh-user">
          <div className="Crh-user-avatar">
            <img src={ava} alt=''/>
          </div>
          Name
          <IoIosArrowDown/>
        </div>
      </div>
    </header>
  )
}

export default CreatorHeader;