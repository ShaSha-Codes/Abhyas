import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Video from "../components/Video";
import Typography from "@mui/material/Typography";
import ThumbNail from "../tempImages/Thumbnail.png";
import Assignment from "../components/Assignment";
import User from "../components/User";
import Box from "@mui/material/Box";

//Testing

function TeacherClass() {
  const data = {
    thumbnail: ThumbNail,
    title: "React",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
  };

  const userData = [
    {
      firstName: "Shaurya",
      lastName: "Sharma",
      gender: "male",
    },
    {
      firstName: "Mihir",
      lastName: "Tayshete",
      gender: "male",
    },
    {
      firstName: "Jazib",
      lastName: "Dawre",
      gender: "male",
    },
    {
      firstName: "Aman",
      lastName: "Vishwakarma",
      gender: "male",
    },
  ];

  return (
    <div>
      <Container maxWidth="xl">
        <Box mb={10}>
          <Typography variant="h4" sx={{ margin: "1em" }} component="h2">
            Videos
            <hr />
          </Typography>
          <Grid container spacing={5} justify="center">
            <Video data={data} />
            <Video data={data} />
            <Video data={data} />
            <Video data={data} />
          </Grid>
        </Box>

        <Box mb={10}>
          <Typography variant="h4" sx={{ margin: "1em" }} component="h2">
            Assignments
            <hr />
          </Typography>
          <Grid container spacing={5} justify="center">
            <Assignment />
            <Assignment />
            <Assignment />
            <Assignment />
            <Assignment />
            <Assignment />
          </Grid>
        </Box>

        <Box mb={10}>
          <Typography variant="h4" sx={{ margin: "1em" }} component="h2">
            Students
            <hr />
          </Typography>

          <Grid container spacing={5} justify="center">
            <User userData={userData[0]} />
            <User userData={userData[1]} />
            <User userData={userData[2]} />
            <User userData={userData[3]} />
            <User userData={userData[0]} />
            <User userData={userData[1]} />
            <User userData={userData[2]} />
            <User userData={userData[3]} />
            <User userData={userData[0]} />
            <User userData={userData[1]} />
            <User userData={userData[2]} />
            <User userData={userData[3]} />
            <User userData={userData[0]} />
            <User userData={userData[1]} />
            <User userData={userData[2]} />
            <User userData={userData[3]} />
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default TeacherClass;
