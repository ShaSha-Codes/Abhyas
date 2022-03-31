import React from "react";
import Navbar from "../components/NavBar";
import Class from "../components/Class";
import Grid from "@mui/material/Grid";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function TeacherDashboard() {
  ReactSession.setStoreType("sessionStorage");
  let navigate = useNavigate();
  React.useEffect(() => {
    if (ReactSession.get("data") === undefined) {
      navigate("/");
    }
  }, [0]);

  return (
    <>
      <Navbar />
      <Stack alignItems="center">
        <Button variant="contained" href="#contained-buttons">
          Add Class
        </Button>
      </Stack>
      <br />
      <br />
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
