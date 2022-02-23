import React from 'react'
import Navbar from "../components/NavBar";
import Class from '../components/Class';
import Grid from "@mui/material/Grid";

function TeacherDashboard() {
  return (
    <>
        <Navbar/>
        <br/>
        <Grid container spacing={5} justify="center">
            <Class />
            <Class />
            <Class />
            <Class />
        </Grid>
    </>
  )
}

export default TeacherDashboard