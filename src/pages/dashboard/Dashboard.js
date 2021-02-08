import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Title from '../../components/Login/title/Title';

export default function Dashboard(){
    return (
        <div>
            <MuiThemeProvider>
                <Title title="Welcome to Dashboard"></Title>
            </MuiThemeProvider>
        </div>
    )
}