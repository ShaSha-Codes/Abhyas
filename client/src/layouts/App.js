import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Landing from "./Landing";

import MarketPlace from "../pages/Marketplace";

export default function App(props) {
  // React router here
  return (
    <Landing/>
    // <Routes>
    //   <Route path="/">
    //     <Route index element={<Landing />} >
    //       </Route>
    //     <Route
    //       path="dashboard"
    //       element={<Dashboard component={<MarketPlace />} />}
    //     />
    //   </Route>
    // </Routes>
  );
}
