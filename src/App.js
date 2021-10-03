import React from "react";

import "./App.scss";
import HomeScreen from "./pages/homescreen/HomeScreen";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
