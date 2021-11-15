import React, { useState, useEffect } from 'react';
import articleServices from '../services/articleServices';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const initialPotluck = {
    id:"",
    date: "",
    time: "",
    Location: "",
    Food: ""
};

const EditForm = (props)=> {
    const {editId} = props;
    const [potluck, setPotluck]  = useState(initialPotluck);

    useEffect(() => {
        articleServices()
        .then((res) => {
            console.log(res.data);
        })
            .catch(err=> console.log(err))
    }, []);

    const handleChange = (e)=> {
        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value
        })
        console.log(potluck)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/event-display/${editId}`, potluck)
        .then(res=> {
            console.log(res)
        })
        .catch(err=> console.log(err))
    }

    return(<FormContainer>
        <h3>Edit Potluck</h3>
        <div>
            <label>Date</label>
            <input value={potluck.date} id="date" name="date" onChange={handleChange}/>
        </div>
        <div>
            <label>Time</label>
            <input value={potluck.time} id="time" name="time" onChange={handleChange}/>
        </div>
        <div>
            <label>Location</label>
            <input value={potluck.location} id="location" name="location" onChange={handleChange}/>
        </div>
        <div>
            <label>Food</label>
            <input value={potluck.food} id="food" name="food" onChange={handleChange}/>
            <h4>Foods: </h4>
                    <input id="food1" name="food1" type = "text" value={potluck.food1} /><br/>
                    <input id="food2" name="food2" type = "text" value={potluck.food2} /><br/>
                    <input id="food3" name="food3" type = "text" value={potluck.food3} /><br/>

        </div>
        <Button  onClick={handleSubmit} id="editButton">Edit Potluck</Button>

    </FormContainer>);
}

export default EditForm;

const FormContainer = styled.form`
    padding: 1em;
    width: 400px;
    background: white;

    label {
        margin-top: 0.5em;
    }

    input {
        padding: 0.5em;
    }
    
    div { 
        margin: 0.5em 0;
    }
`

const Button = styled.button`
    width: 100%;
    padding:1em;
    margin-top: 1em;
`