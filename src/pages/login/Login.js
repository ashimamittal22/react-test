import React from 'react';
import './Login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from '../../components/Login/inputs/Input';
import Title from '../../components/Login/title/Title';
import Button from '../../components/Login/customButton/Button'
import {
    Link
  } from "react-router-dom";

export default function Login() {
    return(
        <div className="login-wrapper">
            <MuiThemeProvider>
                <Title title="Please Login"></Title>
                <form>
                    <Input type="text" label="Username"></Input>
                    <Input type="password" label="Password"></Input>
                    <Link to="/dashboard"><Button label="Login" ></Button></Link>
                    <br/>
                    <div className="link">
                        <Link to="/register">New User</Link>
                        <Link to="/forgetPassword">Forget Password</Link>
                    </div>                
                </form>
            </MuiThemeProvider>
        </div>
    )

}