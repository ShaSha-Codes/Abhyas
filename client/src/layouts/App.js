import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import StudentRegister from "../components/StudentRegister";
import TeacherRegister from "../components/TeacherRegister";
import VideoFill from "../components/VideoFill";
import MarketPlace from "../pages/Marketplace";
import Provider from "../context/FormOpen";
import StudentClass from "../pages/StudentClass";
import TeacherDashboard from "../pages/TeacherDashboard";


export default function App(props) {
  // React router here
  return (
    <Provider>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Landing />}>
            <Route
              exact
              path="/studentregister"
              element={<StudentRegister />}
            />
            <Route path="/teacherregister" element={<TeacherRegister />} />
          </Route>
          <Route path="videofill" element={<VideoFill />} />
          <Route
            path="dashboard"
            element={<Dashboard component={<MarketPlace />} />}
          />
        </Route>
        <Route path="/teacher" element={<TeacherDashboard />} />
      </Routes>
    </Provider>
  );
}
