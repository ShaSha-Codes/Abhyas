import React from "react";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
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
