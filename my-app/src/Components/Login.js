import React, { useState } from "react";
import styled from "styled-components";
import photo from "./Mingling.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router";

const initialValues = { username: "", password: "" };

const Login = () => {
  // const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState(false);

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .post("https://potluckbuildweek.herokuapp.com/api/users", formValues)
        .then((res) => {
            window.localStorage.setItem('token', res.data.token);
            // navigate("/event-display");
        })
        .catch(setError(true));
  };

  return (
    <>
      <LoginDiv>
        <LoginImg src={photo} alt="People attending an event" />
        <InfoDiv>
          <h1>Enter your Username and Password.</h1>
          <form id="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">
              <h3>Username: </h3>
              <input
                id="userName"
                name="username"
                type="text"
                onChange={handleChanges}
                value={formValues.username}
              />
            </label>
            <label htmlFor="password">
              <h3>Password: </h3>
              <input
                id="password"
                name="password"
                type="text"
                onChange={handleChanges}
                value={formValues.password}
              />
            </label>
            <Link to={`event-display`}>
              <button id="login-button">Submit</button>
            </Link>
          </form>
          {error && (
                <p id ="error">Login Failed! Please try again!</p>
            )}
        </InfoDiv>
      </LoginDiv>
    </>
  );
};

export default Login;

const LoginDiv = styled.div`
  display: flex;
  color: white;
  background: black;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 5%;
  height: 100vh;
`;

const LoginImg = styled.img`
  width: 50%;
`;

const InfoDiv = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: left;
  align-items: center;
`;
