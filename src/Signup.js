import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TaskReducer } from "./Store/TaskReducer";
import { storeUserData } from "./Store/Actions";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileno: "",
    password: "",
    confirmPassword: "",
    city: "",
    gender: "",
  });
  const [userData, setUserData] = useState([]);
  const [stateData, setStateData] = useState(useSelector((state) => state));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputUser = (e) => {
    setUser(() => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormData = (e) => {
    if (user.password === user.confirmPassword) {
      setUserData(user);
      setStateData(userData);
      alert("User added successfully");
      dispatch(storeUserData(user));
      navigate("/login");
    } else {
      alert("Passwords do not match");
    }
    e.preventDefault();
  };

  console.log("state>>", stateData);
  console.log(userData);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Meghraj Task</h1>
      <h2>Registration Form</h2>
      <form onSubmit={handleFormData}>
        <label> Name: </label>
        <input type="text" required name="name" onChange={inputUser} />
        <br />
        <br />
        <label> Email: </label>
        <input type="email" required name="email" onChange={inputUser} />
        <br />
        <br />
        <label> Mobile NO: </label>
        <input type="number" required name="mobileno" onChange={inputUser} />
        <br />
        <br />
        <label> Password: </label>
        <input type="password" required name="password" onChange={inputUser} />
        <br />
        <br />
        <label> Confirm Password: </label>
        <input
          type="password"
          required
          name="confirmPassword"
          onChange={inputUser}
        />
        <br />
        <br />
        <label> City: </label>
        <input type="text" required name="city" onChange={inputUser} />
        <br />
        <br />
        <label> Gender: </label>
        Male
        <input
          type="radio"
          required
          name="gender"
          value="Male"
          onChange={inputUser}
        />
        Female
        <input
          type="radio"
          required
          name="gender"
          value="Female"
          onChange={inputUser}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Signup;
