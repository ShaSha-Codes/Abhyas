import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MarketPlace from "../pages/Marketplace";
export default function App() {
  // React router here
  return (
    <>
      <NavBar />
      <SideBar component={<MarketPlace />} />
      {/* <Footer /> */}
    </>
  );
}
