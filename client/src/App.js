import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Category from './components/Category';
import Login from './components/Login'
import Certify from './components/Certify';
import './style.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App(){

    const [formType, setFormType] = React.useState(1)
    
    function selectForm(custom){
        setFormType(parseInt(custom));
    }

    console.log(formType)

    return(
            
          <Grid container  >
            <Grid item xs={12} md={6} >
                <Item disabled sx={{border:0,boxShadow:0,marginTop:'10%',backgroundColor:'transparent',padding:0}} className="indexpart1"><h1>Abhyas</h1>
                <h2>A place to learn and share</h2>
                </Item>
            </Grid>
            <Grid item xs={12} md={6} sx={{padding:0}} >
                <Item sx={{border:0,boxShadow:0,backgroundColor:'transparent',padding:0}} className="indexpart2">
                    <Category name="Student" type="1" selectForm={selectForm} />
                    <Category name="Teacher" type="2" selectForm={selectForm}/>
                    <Category name="Certificate" type="3" selectForm={selectForm}/>
                    <br/>
                    <div className="formPart">
                    {formType === 1 && <Login name="student" title="Username"/>}
                    {formType === 2 && <Login name="teacher" title="Teacher ID"/>}
                    {formType === 3 && <Certify/>}
                    </div>
                    
                </Item>
            </Grid>
        </Grid>
        
        
      
    )
}