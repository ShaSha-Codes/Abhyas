import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import bcryptjs from "bcryptjs";

export default function Login(props) {
  //Form Data State
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    type: "",
    pin: "",
  });

  //Gathering Form Data
  const handleForm = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  //Student Form Submit
  const submitStudentForm = async () => {
    if (formData.password.length >= 8) {
      if (formData.name != "" && formData.email != "") {
        if (formData.password === formData.confirm) {
          const exists = await axios.get(
            `http://localhost:3000/users/${formData.email}`
          );
          if (!exists.data) {
            const result = {
              password: "",
              name: formData.name,
              email: formData.email,
              type: "student",
              courses: [],
            };
            await bcryptjs.hash(formData.password, 10).then((val) => {
              result.password = val;
            });
            await axios.post("http://localhost:3000/register", result);
            console.log("Successful");
            handleStudentClose();
          } else {
            console.log("User Already Exists");
          }
        } else {
          console.log("Passwords dont match");
        }
      } else {
        console.log("All entries required");
      }
    } else {
      console.log("Password Length Must be atleast 8");
    }
  };

  //Teacher Form Data
  const submitTeacherForm = async () => {
    if (formData.password.length >= 8) {
      if (formData.name != "" && formData.email != "") {
        if (formData.password === formData.confirm) {
          const exists = await axios.get(
            `http://localhost:3000/users/${formData.email}`
          );
          if (!exists.data) {
            const result = {
              password: "",
              name: formData.name,
              email: formData.email,
              type: "teacher",
              courses: [],
            };
            await bcryptjs.hash(formData.password, 10).then((val) => {
              result.password = val;
            });
            await axios.post("http://localhost:3000/register", result);
            console.log("Successful");
            handleTeacherClose();
          } else {
            console.log("User Already Exists");
          }
        } else {
          console.log("Passwords dont match");
        }
      } else {
        console.log("All entries required");
      }
    } else {
      console.log("Password Length Must be atleast 8");
    }
  };

  const [studentOpen, setStudentOpen] = React.useState(false);
  const handleStudentClickOpen = () => {
    setStudentOpen(true);
  };
  const handleStudentClose = () => {
    setStudentOpen(false);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirm: "",
      type: "",
      pin: "",
    });
  };

  const [teacherOpen, setTeacherOpen] = React.useState(false);
  const handleTeacherClickOpen = () => {
    setTeacherOpen(true);
  };
  const handleTeacherClose = () => {
    setTeacherOpen(false);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirm: "",
      type: "",
      pin: "",
    });
  };

  return (
    <>
      <Stack spacing={2}>
        <TextField id="outlined-basic" label={props.title} variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </Stack>
      <Router>
        {props.name === "student" && (
          <h4>
            New User?{" "}
            <Link to="/studentregister" onClick={handleStudentClickOpen}>
              register
            </Link>
          </h4>
        )}
        {props.name === "teacher" && (
          <h4>
            New User?{" "}
            <Link to="/teacherregister" onClick={handleTeacherClickOpen}>
              register
            </Link>
          </h4>
        )}
        <Routes>
          <Route
            exact
            path="/studentregister"
            element={
              <Dialog
                PaperProps={{
                  style: { borderRadius: 18 },
                }}
                fullWidth={true}
                open={studentOpen}
                onClose={handleStudentClose}
              >
                <DialogTitle>Student Register</DialogTitle>
                <form>
                  <DialogContent>
                    <Stack spacing={2}>
                      <TextField
                        sx={{ marginTop: "5px" }}
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        value={formData.name}
                        name="name"
                        onChange={handleForm}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Email ID"
                        variant="outlined"
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleForm}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={formData.password}
                        name="password"
                        onChange={handleForm}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        value={formData.confirm}
                        name="confirm"
                        onChange={handleForm}
                      />
                    </Stack>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleStudentClose}>Cancel</Button>
                    <Button onClick={submitStudentForm}>Submit</Button>
                  </DialogActions>
                </form>
              </Dialog>
            }
          />

          <Route
            exact
            path="/teacherregister"
            element={
              <Dialog
                PaperProps={{
                  style: { borderRadius: 18 },
                }}
                fullWidth={true}
                open={teacherOpen}
                onClose={handleTeacherClose}
              >
                <DialogTitle>Teacher Register</DialogTitle>
                <form>
                  <DialogContent>
                    <Stack spacing={2}>
                      <TextField
                        sx={{ marginTop: "5px" }}
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        value={formData.name}
                        name="name"
                        onChange={handleForm}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Secret Pin"
                        variant="outlined"
                        type="password"
                        value={formData.pin}
                        name="pin"
                        onChange={handleForm}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Email ID"
                        variant="outlined"
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleForm}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={formData.password}
                        name="password"
                        onChange={handleForm}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        value={formData.confirm}
                        name="confirm"
                        onChange={handleForm}
                      />
                    </Stack>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleTeacherClose}>Cancel</Button>
                    <Button onClick={submitTeacherForm}>Submit</Button>
                  </DialogActions>
                </form>
              </Dialog>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
