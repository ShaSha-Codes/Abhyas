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
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tagname: "Physics",
    title: "Electromagnetism",
    user: "Aditya Sharma",
    postDate: "07/08/2021",
    avatar:"https://avatars.dicebear.com/api/adventurer-neutral/Aditya.svg",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=225&q=80",
    tagname: "Chemistry",
    title: "Chemical Reactions",
    user: "Musaddiq Shaikh",
    postDate: "30/08/2022",
    avatar:"https://avatars.dicebear.com/api/adventurer-neutral/Musaddiq.svg",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tagname: "Maths",
    title: "Calculus",
    user: "John Doe",
    postDate: "23/07/2021",
    avatar:"https://avatars.dicebear.com/api/adventurer-neutral/John.svg",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tagname: "Geography",
    title: "Climate Change",
    user: "Shaurya Sharma",
    postDate: "16/02/2021",
    avatar:"https://avatars.dicebear.com/api/adventurer-neutral/Shaurya.svg",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tagname: "Music",
    title: "Music Theory",
    user: "Mihir Tayshete",
    postDate: "23/02/2021",
    avatar:"https://avatars.dicebear.com/api/adventurer-neutral/Tayshete.svg",
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
