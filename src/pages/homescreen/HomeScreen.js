import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./HomeScreen.scss";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <h1>This is "Home" compontent.</h1>
    </div>
  );
}

export default HomeScreen;
