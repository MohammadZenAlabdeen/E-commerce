import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Login.css";
import bg from './../../assets/bg.svg'
import avatar from './../../assets/avatar.svg'
import wave from './../../assets/wave.png'
import { Navigate, redirect, useNavigate } from "react-router";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [data,setData]=useState();
const navigate=useNavigate();
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, password } = inputs;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/sellersDashboard/login', {
        name,
        password,
      });
setData(response.data.data);
console.log(data)
localStorage.setItem('token',data.token);
navigate('/')
      // Handle successful login response
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  return (
    <>
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <img src={bg} />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={avatar} />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  name="name"
                  value={inputs.name}
                  onChange={handleInput}
                  onFocus={(event) => event.target.parentNode.parentNode.classList.add("focus")}
                  onBlur={(event) => {
                    if (event.target.value === "") {
                        event.target.parentNode.parentNode.classList.remove("focus");
                    }
                  }}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  name="password"
                  value={inputs.password}
                  onChange={handleInput}
                  onFocus={(event) => event.target.parentNode.parentNode.classList.add("focus")}
                  onBlur={(event) => {
                    if (event.target.value === "") {
                        event.target.parentNode.parentNode.classList.remove("focus");
                    }
                  }}
                />
              </div>
            </div>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;