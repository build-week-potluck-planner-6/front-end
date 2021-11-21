import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { useHistory } from 'react-router';
import Potluck from './Potluck';
import EditForm from './EditForm';

const EventDisplay = () => {

    // const { push } = useHistory();
    const [potlucks, setPotlucks] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState();

    useEffect(() => {
        axiosWithAuth()
        .get("https://potluckbuildweek.herokuapp.com/api/potlucks")
        .then((res) => setPotlucks(res.data))
        .catch((err) => console.log(err))
    }, []);

    const handleEditSelect = (id)=> {
        setEditing(true);
        setEditId(id);
        // push(`/event-display/${id}`)
    }

    const handleDelete = (id) => {
        axiosWithAuth()
            .delete(`https://potluckbuildweek.herokuapp.com/api/potlucks/${id}`)
            .then(res=> {
                // push('/event-display')
            })
            .catch(err=> console.log(err))
    }

    const handleEdit = (potluck) => {

        setEditing(false);
    }

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
                    <EventDiv>
                        {potlucks.map(potluck => {
                            return <Potluck key={potluck.id} potluck={potluck} handleEditSelect={handleEditSelect} handleDelete={handleDelete}/>
                        })}

                        {
                        editing && <EditForm editId={editId} handleEdit={handleEdit}/>
                        }
                    </EventDiv>
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