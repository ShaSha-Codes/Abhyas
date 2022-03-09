import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Context } from "../context/FormOpen";

export default function Login(props) {
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
