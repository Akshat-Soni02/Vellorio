import React from 'react'
import "./style.css";
const CreatorWidget = ({icon,amount,about,percent}) => {
  return (
    <section className='widgetItem'>
        <div className="widgetInfo">
            <div className="widgetIcon">{icon}</div>
            <div className="widgetData">
              <div className="widgetNums">{amount}</div>
              <div className="widgetTitle">{about}</div>
            </div>
        </div>
        <div className="widgetPer">{percent}</div>
    </section>
  )
}

export default CreatorWidget