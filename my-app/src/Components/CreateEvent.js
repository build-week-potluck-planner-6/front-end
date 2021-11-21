import React, { useState } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialPotluck = {
    id:"",
    date: "",
    time: "",
    location: "",
    food1: "",
    food2: "",
    food3: "",
};

const CreateEvent = (props) => {

    const [potluck, setPotluck]  = useState(initialPotluck);
    const handleChange = (e)=> {
        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        potluck.id = Date.now();
        e.preventDefault();
        axiosWithAuth()
        .post(`https://potluckbuildweek.herokuapp.com/api/potlucks/${potluck.id}`, potluck)
        .then(res=> {
            console.log(res)
        })
        .catch(err=> console.log(err))
    }


    return(

        <BodyDiv>
            <h1>Please enter details about the potluck!</h1>
            <FormDiv>
                <form id="new-potluck">
                    <p>Date: <input id="date" name="date" type = "text" value={potluck.date} onChange={handleChange}/></p>
                    <p>Location: <input id="location" name="location" type = "text" value={potluck.location} onChange={handleChange}/></p>
                    <p>Time: <input id="time" name="time" type = "text" value={potluck.time} onChange={handleChange}/></p>
                    <h4>Foods: </h4>
                    <input id="food1" name="food1" type = "text" value={potluck.food1} onChange={handleChange}/><br/>
                    <input id="food2" name="food2" type = "text" value={potluck.food2} onChange={handleChange}/><br/>
                    <input id="food3" name="food3" type = "text" value={potluck.food3} onChange={handleChange}/><br/>
                    <button onClick={handleSubmit}>Create Event!</button>
                </form>
            </FormDiv>
        </BodyDiv>
    )
}

const BodyDiv = styled.div`
background: black;
color: white;
display: flex;
justify-content: start;
align-items: center;
width: 100%;
height: 100vh;
flex-direction: column;
`

const FormDiv = styled.div`
background: white;
color: black;
display: flex;
justify-content: center;
align-items: center;
width: 400px;
flex-direction: column;
`

export default CreateEvent