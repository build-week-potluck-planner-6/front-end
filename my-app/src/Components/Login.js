import React, { useState } from "react";
import styled from "styled-components";
import photo from "./Mingling.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [formState, setFormState] = useState([
    {
      username: "",
      password: "",
    },
  ]);

  //   const [errorState, setErrorState] = useState([
  //     {
  //       username: "",
  //       password: "",
  //     },
  //   ]);

  const { userName, password, submit, change } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();

    axios
      .post(`https://potluck-planner-4-backend-2.herokuapp.com/`, formState)
      .then((res) => {
        console.log("logging in", res.data);
      });
    setFormState(formState);
  };

  const validate = (e) => {
    const userInput = {
      ...formState,
      [e.target.name]: e.target.value,
    };
  };

  const onChange = (evt) => {
    const { userName, password } = evt.target.value;
    // change(userName, password);
    validate(evt);
    console.log("changing");

    const setValue = evt.target.value;
    setFormState({ ...formState, [evt.target.name]: setValue });
  };

  return (
    <>
      <LoginDiv>
        <LoginImg src={photo} alt="People attending an event" />
        <InfoDiv>
          <h1>Enter your Username and Password.</h1>
          <form id="login-form" onSubmit={onSubmit}>
            <label htmlFor="username">
              <h3>Username: </h3>
              <input
                id="userName"
                name="username"
                type="text"
                onChange={onChange}
                value={formState.value}
                //   value={userName}
              />
            </label>
            <label htmlFor="password">
              <h3>Password: </h3>
              <input
                id="password"
                name="password"
                type="text"
                onChange={onChange}
                value={formState.value}
                //   value={password}
              />
            </label>
            <Link to={`event-display`}>
              <button id="login-button">Submit</button>
            </Link>
          </form>
        </InfoDiv>
      </LoginDiv>
    </>
  );
};

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

export default Login;
