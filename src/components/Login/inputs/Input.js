import React from 'react';
import TextField from 'material-ui/TextField';

export default function Input(props){
    
    return(
        <label>
            <TextField id="standard-required" required={true} hintText={props.label} name={props.name} onChange={props.change} value={props.value} floatingLabelText={props.label} type={props.type} ></TextField>
            <br></br>
        </label>
    )
}