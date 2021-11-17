import React from 'react';
import styled from 'styled-components'

const Potluck = (props)=> {
    const {potluck, handleDelete, handleEditSelect} = props;

    return(<div data-testid="article">
        <PotluckStyle>
            <Container>
                <p>Date: {potluck.date}</p>
                <p>Time: {potluck.time}</p>
                <p>Location: {potluck.location}</p>
                <p>Food: {potluck.food}</p>
            </Container>
        </PotluckStyle>
        
        <ButtonContainer>
            <button onClick={()=> {handleDelete(potluck.id)}}>Delete</button>                
            <button onClick={()=> {handleEditSelect(potluck.id)}}>Edit</button>
        </ButtonContainer>
    </div>);
}

export default Potluck;

const PotluckStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5em; 
    background: grey;
`

const Container = styled.div`
    padding: 0.5em; 
`

const ButtonContainer = styled.div`
    padding: 1em;
    text-transform: uppercase;
    text-align:right;

    button {
        width: 100px;
        padding:0.5em;
    }
`