import React, { useState } from 'react';
import './Register.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from '../../components/Login/inputs/Input';
import Title from '../../components/Login/title/Title';
import Button from '../../components/Login/customButton/Button'
import {
    Link, useHistory
  } from "react-router-dom";

export default function Register() {
    const history = useHistory();
    const [user, setUser] = useState({firstname: "", lastname: "", email: "", password:""});
    
    function handleInputChange(e){
        const {name , value} = e.target
        setUser(prevState => ({...prevState, [name]: value }))
    }

    function submit (e){
        e.preventDefault();
        history.push('/dashboard')
    }

    return(
        <div className="register-wrapper">
            <MuiThemeProvider>
                <Title title="Please Register"></Title>
                <form onSubmit={submit}>
                    <Input name="firstname" change={handleInputChange} value={user.firstname} type="text" label="First Name"></Input>
                    <Input name="lastname" change={handleInputChange} value={user.lastname} type="text" label="Last Name"></Input>
                    <Input name="email" change={handleInputChange} value={user.email} type="email" label="Email"></Input>
                    <Input name="password" change={handleInputChange} value={user.password} type="password" label="Password"></Input>
                    <Button label="Register"></Button>
                </form> 
                <span>Already a Registered User.</span>
                <Link to="/">Login</Link>
            </MuiThemeProvider>
        </div>
    )

}