import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import ForgetPass from "./ForgetPass";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Router>
        <Link to="/">Signup</Link>||
        <Link to="/login">Login</Link>||
        <Link to="/forgetpass">Forget Pass</Link>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
