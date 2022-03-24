import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Context } from "../context/FormOpen";

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

  //Login Data
  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });

  //Gathering Login Data
  const handleLogin = (event) => {
    setLoginData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  //Gathering Form Data
  const handleForm = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  const submitLoginForm = async () => {
    axios({
      method: "POST",
      data: {
        username: loginData.username,
        password: loginData.password,
      },
      withCredentials: true,
      url: "http://localhost:3000/login",
    }).then((res) => console.log(res));
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
  console.log(Context);
  const { studentOpen, setStudentOpen, teacherOpen, setTeacherOpen } =
    React.useContext(Context);
  console.log(studentOpen);
  console.log(teacherOpen);
  const handleStudentClickOpen = () => {
    setStudentOpen(true);
  };
  const handleTeacherClickOpen = () => {
    setTeacherOpen(true);
  };

  return (
    <>
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label={props.title}
          variant="outlined"
          value={loginData.username}
          name="username"
          onChange={handleLogin}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={loginData.password}
          name="password"
          onChange={handleLogin}
        />
        <Button variant="contained" color="secondary" onClick={submitLoginForm}>
          Login
        </Button>
      </Stack>

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

      {props.name === "student" && (
        <h4>
          New User?{" "}
          <Link to="/index/studentregister" onClick={handleStudentClickOpen}>
            register
          </Link>
        </h4>
      )}
      {props.name === "teacher" && (
        <h4>
          New User?{" "}
          <Link to="/index/teacherregister" onClick={handleTeacherClickOpen}>
            register
          </Link>
        </h4>
      )}

      <Outlet />
      <Outlet />
    </>
  );
}
