import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Context } from "../context/FormOpen";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Login(props) {
  ReactSession.setStoreType("sessionStorage");
  console.log(ReactSession.get("data"));
  let navigate = useNavigate();
  const [switcher, setSwitcher] = React.useState(0);

  React.useEffect(() => {
    if (ReactSession.get("data") !== undefined) {
      navigate("/teacher");
    }
  }, [switcher]);

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

  const submitLoginForm = async () => {
    axios({
      method: "POST",
      data: {
        username: loginData.username,
        password: loginData.password,
      },
      withCredentials: true,
      url: "http://localhost:3000/login",
    }).then((res) => {
      ReactSession.set("data", res.data);
      setSwitcher((prevSwitcher) => {
        return !prevSwitcher;
      });
    });
  };

  // const Tester = async () => {
  //   console.log(ReactSession.get("data"));
  // };

  const { studentOpen, setStudentOpen, teacherOpen, setTeacherOpen } =
    React.useContext(Context);

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
          onChange={handleLogin}
          name="username"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={loginData.password}
          onChange={handleLogin}
          name="password"
        />
        <Button variant="contained" color="secondary" onClick={submitLoginForm}>
          Login
        </Button>
        {/* <Button variant="contained" color="secondary" onClick={Tester}>
          Tester
        </Button> */}
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

      <Outlet />
      <Outlet />
    </>
  );
}
