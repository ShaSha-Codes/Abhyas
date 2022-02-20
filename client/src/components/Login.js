import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Login(props){

    return(
        <Stack spacing={2}>
        <TextField id="outlined-basic" label={props.title} variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
        <Button variant="contained" color="secondary">Login</Button>
        {props.name==="student" && <h4>New User? <a href="https://www.google.com/">register</a></h4>}
      </Stack>
    )
}