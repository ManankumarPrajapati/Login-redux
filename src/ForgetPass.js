import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const passData = useSelector((state) => state);
  useEffect(() => {
    console.log(passData);
  });
  const submitData = () => {
    alert(`Your Password is here : ${passData[0].password}`);
  };
  return (
    <>
      <h1>Forget Password</h1>
      <label> Email: </label>
      <input
        type="email"
        required
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <Link to="/login">Go back?</Link>
      <br />
      <br />
      <button onClick={submitData}>Submit</button>
    </>
  );
};

export default ForgetPass;
