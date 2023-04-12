import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Tv from "./Pages/Tv";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Auth from "./Auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Auth>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </Auth>
    </React.Fragment>
  );
}

export default App;
