import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const EventSignUp = (props) => {

    const { eventID } = props

    //This is just the form currently, needs to have the event id added to the user when submit is clicked. 
    //I have not added this yet, I'll need to look more into how to do that as it's a weak point.

    return(

        <BodyDiv>
            <h1>Enter an ID of a potluck to sign up!</h1>
            <FormDiv>
                <form id = 'event-ID'>
                    Id number: 
                    <input id = "eventID" name = "eventID" type = "text"  value = {eventID} />
                    <Link to = {`event-display`}><button>Submit</button></Link>
                </form>
            </FormDiv>
        </BodyDiv>
    )
}

const BodyDiv = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
background: black;
color: white;
padding: 5% 0; 
position: relative;
`

const FormDiv = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
padding: 3%;
`

export default EventSignUp