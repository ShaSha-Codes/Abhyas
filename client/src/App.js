import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App(){
    return(
            
          <Grid container>
            <Grid item xs={12} md={6}>
                <Item><h1>Hello</h1></Item>
            </Grid>
            <Grid item xs={12} md={6}>
                <Item><h1>There</h1></Item>
            </Grid>
        </Grid>
        
      
    )
}