import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import StudentRegister from "../components/StudentRegister"
import TeacherRegister from "../components/TeacherRegister";
import MarketPlace from "../pages/Marketplace";
import Provider from "../context/FormOpen"

export default function App(props) {
  // React router here
  return (
    <Provider>
      
      
    <Routes>
    
      <Route path="/">
      
          <Route  path="/index" element={<Landing />} >
            <Route path="studentregister" element={ <StudentRegister/> } />
            <Route path="teacherregister" element={ <TeacherRegister/>}/>
            </Route>
        <Route
          path="dashboard"
          element={<Dashboard component={<MarketPlace />} />}
        />
      </Route>
    </Routes>
    </Provider>
  );
}
