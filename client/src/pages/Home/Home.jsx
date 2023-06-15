import React from 'react'
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import '../../App.css'

const Home = () => {
  return (
    <div className="home-container-1">
    <LeftSidebar />
    <div className="home-container-2">
      <HomeMainbar />
      <RightSidebar />
    </div>
  </div>
  )
}

export default Home
