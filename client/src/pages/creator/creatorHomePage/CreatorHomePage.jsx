import React from 'react'
import "./style.css";
import CreatorSideBar from '../../../components/creatorSideBar/CreatorSideBar';
import CreatorHeader from '../../../components/creatorHeader/CreatorHeader';

const CreatorHomePage = () => {
  return (
    <>
      <section className="Dash">
        <section className="MainSb">
          <CreatorSideBar/>
        </section>
        <section className="Dash-content">
          <CreatorHeader heading = "head" avatar="avatara" userName="naam"/>
        </section>
      </section>
    </>
  )
}

export default CreatorHomePage