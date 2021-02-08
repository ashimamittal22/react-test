import React from 'react';
import TextField from 'material-ui/TextField';

export default function Input(props){
    return(
        <label>
            <TextField floatingLabelText={props.label} type={props.type} ></TextField>
            <br></br>
        </label>
    )
}