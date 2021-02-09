import React , {useState} from 'react';
import './Login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from '../../components/Login/inputs/Input';
import Title from '../../components/Login/title/Title';
import Button from '../../components/Login/customButton/Button'
import {
    Link, useHistory 
  } from "react-router-dom";

export default function Login() {
    const history = useHistory();
    const [credentials, setCredentials] = useState({email: "", password: ""});

    function handleInputChange(e){
        const {name , value} = e.target
        setCredentials(prevState => ({...prevState, [name]: value }))
    }

    function submit (e){
        e.preventDefault();
        if(credentials.email === ""){
            alert("Please enter Email Id")
        }
        else if(credentials.password === ""){
            alert("Please enter Password.")
        }
        else{
            history.push('/dashboard')
        }
    }

    return(
        <div className="login-wrapper">
            <MuiThemeProvider>
                <Title title="Please Login"></Title>
                <form onSubmit={submit}>
                    <Input type="email" change={handleInputChange} value={credentials.email} name="email" label="Email"></Input>
                    <Input type="password" change={handleInputChange} value={credentials.password} name="password" label="Password"></Input>
                    <Button label="Login"></Button>
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