import React from 'react'
import { MdDone } from "react-icons/md";
import "./style.css";
const CreatorWidget = (icon,amount,about,percent) => {
  return (
    <section className='widgetItem'>
        <div className="widgetInfo">
            <div className="widgetIcon"><MdDone/></div>
            <div className="widgetData">
              <div className="widgetNums">16</div>
              <div className="widgetTitle">Delievered On Time</div>
            </div>
        </div>
        <div className="widgetPer">+1.2</div>
    </section>
  )
}

export default CreatorWidget