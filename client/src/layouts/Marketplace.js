import React from "react";
import "../assets/css/style.css";

import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import MarketItem from "../components/MarketItem";
import { Grid, Box } from "@mui/material";

var dummy = [
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Fashion",
    title: "Selling a Mic",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Fashion",
    title: "Selling a Mic",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Fashion",
    title: "Selling a Mic",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Fashion",
    title: "Selling a Mic",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Fashion",
    title: "Selling a Mic",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
];

export default function Marketplace() {
  return (
    <>
      <NavBar />
      {/* <Sidebar /> */}
      <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
        <Grid container spacing={2}>
          {dummy.map((data) => (
            <Grid item xs={3}>
              <MarketItem itemdata={data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
