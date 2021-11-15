import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AccountCreation = (props) => {

    const { userName, password, submit, change } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { userName , password } = evt.target
        change( userName, password )
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
                            <input id = "userName" name = "userName" type = "text" onChange = {onChange} value = {userName} />
                        </label>
                        <label>
                            <h3>Password: </h3>
                            <input id = "password" name = "password" type = "text" onChange = {onChange} value = {password} />
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