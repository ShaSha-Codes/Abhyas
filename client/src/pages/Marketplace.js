import React from "react";
import "../assets/css/style.css";
import { Typography } from "@mui/material";
import MarketNotesForm from "../components/MarketNotesForm";
import MarketVideoForm from "../components/MarketVideoForm";
import MarketItem from "../components/MarketItem";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MarketButtons from "../components/MarketButtons";
var dummy = [
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "John Doe",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "John Doe",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "John Doe",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "John Doe",
    postDate: "23/02/2021",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "John Doe",
    postDate: "23/02/2021",
  },
];

export default function Marketplace(props) {
  let navigate = useNavigate();
  const [videoVisibility, setVideoVisibility] = React.useState(false);
  const [notesVisibility, setNotesVisibility] = React.useState(false);
  React.useEffect(() => {
    if (props.checker) {
      navigate("/");
    }
  }, [0]);

  return (
    <React.Fragment>
      <MarketButtons
          setVideoVisibility={setVideoVisibility}
          setNotesVisibility={setNotesVisibility}
        />
         {videoVisibility && (
          <MarketVideoForm setVideoVisibility={setVideoVisibility} />
        )}
        {notesVisibility && <MarketNotesForm setNotes={setNotesVisibility} />}
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
