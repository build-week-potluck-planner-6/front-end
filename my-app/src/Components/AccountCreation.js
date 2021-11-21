import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const initialValues = { username: "", password: "" };

const AccountCreation = (props) => {
    // const navigate = useNavigate();
    const [formValues, setFormValues] = useState(initialValues);

    const onSubmit = e => {
        e.preventDefault()
        axios
        .post("https://potluckbuildweek.herokuapp.com/api/users", formValues)
        .then((res) => {
            window.localStorage.setItem('token', res.data.token);
            // navigate("/event-display");
        })
        .catch((err)=> console.log(err));
    }

    const handleChanges = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value,
        });
    }
    
    return(
        <BodyDiv>
            <MainDiv>
                <h1>Thanks for choosing Potluck Planner!</h1>
                <h2>Please enter a username and password.</h2>
                <AccountBox>
                    <form id = "creation-form" onSubmit = {onSubmit}>
                        <label>
                            <h3>Username: </h3>
                            <input id='username' name='username' value={formValues.username} onChange={handleChanges}/>
                        </label>
                        <label>
                            <h3>Password: </h3>
                            <input id='password' name='password' type='password' value={formValues.password} onChange={handleChanges}/>
                        </label>
                        <br/>
                        <br/>
                        <Link to = {`event-display`}>
                            <button id = "creation-button">Submit</button>
                        </Link>
                    </form>
                </AccountBox>
            </MainDiv>
        </BodyDiv>
    )
}

const BodyDiv = styled.div`
background: black;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
color: white;
justify-content: center;
border: 0;
`

const MainDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
color: white;
width: 100%;
height: 100vh;
`

const AccountBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: white;
color: black;
height: 300px;
width: 300px;
border: 0 15%;
`

export default AccountCreation