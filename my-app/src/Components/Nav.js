import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <MainDiv className = "header">
        <HeaderDiv>
            <h1>Potluck Planner</h1>
        </HeaderDiv>
        <NavDiv className = "navBar">
                <Link to="/" style = {linkStyle}> Home </Link>  
                <Link to="/login" style = {linkStyle}> Login </Link>  
                <Link to="/create-account" style = {linkStyle}> Create Account </Link>  
        </NavDiv>
    </MainDiv>
  );
};

const MainDiv = styled.div`
color: gold;
background: black;
display: flex;
align-items: center;
flex-direction: row;
padding: 0 3%;
`

const NavDiv = styled.div`
color: gold;
display: flex;
justify-content: space-around;
align-items: center;
width: 20%;
border: 0;
`

const HeaderDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
width: 70%;
border: 0;
`

const linkStyle = {
    textDecoration: "none",
    color: "gold"
}



export default Nav; 