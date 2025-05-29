import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    let navigate = useNavigate();
    
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailID] = useState('');
    const [number, setNumber] = useState();
    const [password, setPassword] = useState();
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmailID(localStorage.getItem('Email-ID'));
        setNumber(localStorage.getItem('Number'));
        setPassword(localStorage.getItem('Password'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6412e841b1ea7443031c82b8.mockapi.io/fakeapi1/${id}`, {
            firstName,
            lastName,
            emailId,
            number,
            password,
            checkbox
        }).then(() => {
            alert("Updated Succesfully!");
            navigate('/read')
        })
            .catch((error) => {
                alert(error);
            })

    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </Form.Field>
                <Form.Field>
                    <label>Email-ID</label>
                    <input type='email' placeholder='Email-ID' value={emailId} onChange={(e) => setEmailID(e.target.value)} required />
                </Form.Field>
                <Form.Field>
                    <label>Number</label>
                    <input type= 'number' placeholder='Number' value={number} onChange={(e) => setNumber(e.target.value)} required />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type= 'password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)} required />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}