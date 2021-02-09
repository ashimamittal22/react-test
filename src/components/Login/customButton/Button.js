import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default function Button(props){
    return (
        <div>
            <RaisedButton label={props.label} type="submit" primary={true}/>
        </div>
    )
}