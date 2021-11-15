import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const EventDisplay = () => {

    //Sarah,
    //There should be a way to display each event that has been created here, but I'm not entirely sure how to do this.
    //Axios calls are the one thing I don't fully understand.
    //I'll come back for this and try when I know the API to send/receive from. 
    //For now, I'm just placing the page component and the options to create new event/sign up for one.
    //-Matt

    return (

        <BodyDiv>
            <h1>Welcome to Potluck Planner!</h1>
            <h5>Here you are able to create an event, sign up for an event you have been invited to, or view each event you have created or confirmed attendance for.</h5>
            <OptionsDiv>
                <Link to = {`create-event`}>
                    <ButtonDiv>Create an event!</ButtonDiv>
                </Link>
                <Link to = {`event-sign-up`}>
                    <ButtonDiv>Confirm attendance to an event!</ButtonDiv>
                </Link>
            </OptionsDiv>
            <br/>
            <br/>
            <EventShowDiv>
                <CreatedEvents>
                    <h2>Events I have created:</h2>
                    <EventDiv></EventDiv>
                </CreatedEvents>
                <SignedUpEvents>
                    <h2>Events I am attending:</h2>
                    <EventDiv></EventDiv>
                </SignedUpEvents>
            </EventShowDiv>
        </BodyDiv>
    )
}

const BodyDiv = styled.div`
background: black;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
color: white;
width: 100%;
height: 100vh;
`

const OptionsDiv = styled.div`
width: 50%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

const ButtonDiv = styled.button`
background: maroon;
color: white;
height: 30px;
border-radius: 5px;
`

const EventShowDiv = styled.div`
width: 95%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const CreatedEvents = styled.div`
width: 45%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const EventDiv = styled.div`
width: 40%;
background: white;
color: black;
display: flex;
justify-content: start;
align-items: start;
`

const SignedUpEvents = styled.div`
width: 45%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default EventDisplay