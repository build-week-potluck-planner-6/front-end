import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import photo from './PotluckPic.jpg'
 
function Home(props) {

    const { url } = useRouteMatch()

    return (
        <HomeDiv>
            <h1>Welcome to Potluck Planner!</h1>
            <br/>
            <MainImg src = {photo} alt = 'Food Photo' />
            <br/>
            <ButtonDiv>
                <Link to = {`${url}login`}><Button id = "login-button">Login</Button></Link>
                <Link to = {`${url}create-account`}><Button id = "create-acct">Create Account</Button></Link>
            </ButtonDiv>
        </HomeDiv>
    )
}

const HomeDiv = styled.div`
background: black;
color: white;
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
`

const MainImg = styled.img`
height: 65vh;
`

const ButtonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 20%;
`

const Button = styled.button`
background: maroon;
color: white;
height: 30px;
border-radius: 5px;
`

export default Home