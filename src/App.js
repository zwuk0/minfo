import React from "react";

import "./App.scss";
import HomeScreen from "./pages/homescreen/HomeScreen";
import MovieSg from "./components/movie-sg/movieSg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />

            <Route path="/movie/:id" element={<MovieSg />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
