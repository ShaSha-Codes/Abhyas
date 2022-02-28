import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Landing from "./Landing";

import MarketPlace from "../pages/Marketplace";

export default function App(props) {
  // React router here
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/dashboard"
        element={<Dashboard component={<MarketPlace />} />}
      />
    </Routes>
  );
}
