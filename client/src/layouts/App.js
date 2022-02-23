import React from "react";
import TeacherClass from "../pages/TeacherClass";
import TeacherDashboard from "../pages/TeacherDashboard";
import StudentClass from "../pages/StudentClass";
import "../assets/css/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <TeacherDashboard />
    </>
  );
}
