import React from "react";
import "../assets/css/style.css";
import { Typography } from "@mui/material";

import MarketItem from "../components/MarketItem";
import { Grid } from "@mui/material";

var dummy = [
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "Jazib Dawre",
    postDate: "23/02/2021",
  },
];

export default function Marketplace() {
  return (
    <React.Fragment>
      <Typography variant="h4">Market Place</Typography>
      <Grid container spacing={2} mt={1}>
        {dummy.map((data) => (
          <Grid item xs={12} sm={6} lg={4}>
            <MarketItem itemdata={data} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
