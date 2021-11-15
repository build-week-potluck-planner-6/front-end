import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CreateEvent = (props) => {

    const { date, location, time, food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, timeampm } = props  

    return(

        <BodyDiv>
            <h1>Please enter details about the potluck!</h1>
            <FormDiv>
                <form id="new-potluck">
                    <p>Date: <input id="date" name="date" type = "text" value={date} /></p>
                    <p>Location: <input id="location" name="location" type = "text" value={location} /></p>
                    <p>Time: <input id="time" name="time" type = "text" value={time} /> AM <input id="am" name="am" type="radio" value={timeampm} /> PM <input id="pm" name="pm" type="radio" value={timeampm} /></p>
                    <h4>Foods: </h4>
                    <input id="food1" name="food1" type = "text" value={food1} /><br/>
                    <input id="food2" name="food2" type = "text" value={food2} /><br/>
                    <input id="food3" name="food3" type = "text" value={food3} /><br/>
                    <input id="food4" name="food4" type = "text" value={food4} /><br/>
                    <input id="food5" name="food5" type = "text" value={food5} /><br/>
                    <input id="food6" name="food6" type = "text" value={food6} /><br/>
                    <input id="food7" name="food7" type = "text" value={food7} /><br/>
                    <input id="food8" name="food8" type = "text" value={food8} /><br/>
                    <input id="food9" name="food9" type = "text" value={food9} /><br/>
                    <input id="food10" name="food10" type = "text" value={food10} /><br/>
                    <p><Link to ="/event-display"><button>Create Event!</button></Link></p>
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