import React from 'react'
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
import TeacherClass from './pages/TeacherClass';
import './style.css'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function App(){
    return(
        <div>
              <TeacherClass/>
        </div>
        
      
    )
}

{/* <Grid container className="index-body">
            <Grid item xs={12} md={6} >
                <Item disabled sx={{border:0,boxShadow:0,marginTop:'10%',bodyColor:'transparent'}} className="indexpart1"><h1>Abhyas</h1>
                <h2>A place to learn and share</h2>
                </Item>
            </Grid>
            <Grid item xs={12} md={6} >
                <Item sx={{border:0,boxShadow:0,}} className="indexpart2"><h1>There</h1></Item>
            </Grid>
        </Grid> */}