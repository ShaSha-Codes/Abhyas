import React from "react";
import Navbar from "../components/NavBar";
import Class from "../components/Class";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

function TeacherDashboard() {
  return (
    <>
      <Navbar />
      <br />
      <div className="gridContainer">
      <Grid Grid container spacing={3} mt={1} justify="center">
        
        
        <Class />
        <Class />
        <Class />
        <Class />
        
      </Grid>
      </div>
     
    </>
  );
}

export default TeacherDashboard;
