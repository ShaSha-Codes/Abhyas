import React from "react";
import Navbar from "../components/NavBar";
import Class from "../components/Class";
import Grid from "@mui/material/Grid";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { nanoid } from "nanoid";
import axios from "axios";

var GeoPattern = require("geopattern");

function TeacherDashboard() {
  ReactSession.setStoreType("sessionStorage");
  let navigate = useNavigate();
  React.useEffect(() => {
    if (ReactSession.get("data") === undefined) {
      navigate("/");
    }
  }, [0]);

  //State Variable
  const [visibilityClassForm, setVisibilityClassForm] = React.useState(false);
  const [classAddForm, setClassAddForm] = React.useState({
    title: "",
    description: "",
    code: "",
  });

  //Functions
  function handleFormData(event) {
    setClassAddForm((prevClassForm) => {
      return {
        ...prevClassForm,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function submitForm() {
    await setClassAddForm((prevClassForm) => {
      return {
        ...prevClassForm,
        code: nanoid(8),
      };
    });
    axios
      .patch("http://localhost:3000/class/add", {
        email: ReactSession.get("data").email,
        ...classAddForm,
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <>
      <Navbar />
      <Stack alignItems="center">
        <Button
          variant="contained"
          onClick={() => {
            setVisibilityClassForm((prevState) => !prevState);
          }}
        >
          Add Class
        </Button>
        {visibilityClassForm && (
          <Box mt={5}>
            <Paper variant="outlined">
              <Box m={6}>
                <Stack alignItems="center" spacing={2}>
                  <Typography variant="h6" component="h1">
                    Class Form
                  </Typography>
                  <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    name="title"
                    onChange={handleFormData}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    multiline
                    rows={3}
                    name="description"
                    onChange={handleFormData}
                  />
                  <Button variant="contained" onClick={submitForm}>
                    Create Class
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Box>
        )}
      </Stack>
      <br />
      <br />
      <br />
      <div className="gridContainer">
        <Grid Grid container spacing={3} mt={1} justify="center">
          <Class title={"Class1"}/>
          <Class title={"Class2"} />
          <Class title={"Class3"}/>
          <Class title={"Class4"} />
        </Grid>
      </div>
    </>
  );
}

export default TeacherDashboard;
