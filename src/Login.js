import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stateData = useSelector((state) => state);
  useEffect(() => {
    console.log(stateData);
  }, []);
  const navigate = useNavigate();
  const submitData = () => {
    if (email === stateData[0].email && password === stateData[0].password) {
      alert("Login Successfully");
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <label> Email: </label>
      <input
        type="email"
        required
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label> Password: </label>
      <input
        type="password"
        required
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Link to="/forgetpass">Forgot password?</Link>
      <br />
      <br />
      <button onClick={submitData}>Submit</button>
    </>
  );
};

export default Login;
