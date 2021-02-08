import React from 'react';
import './Register.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from '../../components/Login/inputs/Input';
import Title from '../../components/Login/title/Title';
import Button from '../../components/Login/customButton/Button'
import {
    Link
  } from "react-router-dom";

export default function Register() {
    return(
        <div className="register-wrapper">
            <MuiThemeProvider>
                <Title title="Please Register"></Title>
                <form>
                    <Input type="text" label="First Name"></Input>
                    <Input type="text" label="Last Name"></Input>
                    <Input type="email" label="Email"></Input>
                    <Input type="text" label="Username"></Input>
                    <Input type="password" label="Password"></Input>
                    <Button label="Register"></Button>
                </form> 
                <span>Already a Registered User.</span>
                <Link to="/">Login</Link>
            </MuiThemeProvider>
        </div>
    )

}