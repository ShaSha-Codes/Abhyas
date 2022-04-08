import React from "react";

import NavBar from "../components/NavBar";
import SideBar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Dashboard(props) {
  
  return (
    <>
      <NavBar />
      <SideBar component={props.component} />
      {/* Footer Currently broken :/ */}
      {/* <Footer /> */}
    </>
  );
}
