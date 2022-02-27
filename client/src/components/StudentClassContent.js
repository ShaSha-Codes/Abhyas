import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Video from "./Video";
import Typography from "@mui/material/Typography";
import ThumbNail from "../tempImages/Thumbnail.png";
import Assignment from "./Assignment";
import User from "./User";
import Box from "@mui/material/Box";
import LiveButton from "./LiveButton";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

function TeacherClass(props) {
  const visibility = props.visibility;

  const data = {
    thumbnail: ThumbNail,
    title: "React",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
  };

  const objectAssignments = {
    type: "Assignment",
    title: "Headline 5",
    desc: "Greyhound divisively hello coldly wonderfully..",
    icon: <AssignmentIcon sx={{ fontSize: "60px" }} fontSize="large" />,
  };
  const objectQuiz = {
    type: "Quiz",
    title: "Headline 5",
    desc: "Greyhound divisively hello coldly wonderfully..",
    icon: <QuizIcon sx={{ fontSize: "60px" }} fontSize="large" />,
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
      firstName: "Mihir",
      lastName: "Tayshete",
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
        {visibility.videos && (
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
        )}
        {visibility.assignments && (
          <Box mb={10}>
            <Typography variant="h4" sx={{ margin: "1em" }} component="h2">
              Assignments
              <hr />
            </Typography>
            <Grid container spacing={2} justify="center">
              <Assignment data={objectAssignments} />
              <Assignment data={objectQuiz} />
              <Assignment data={objectAssignments} />
              <Assignment data={objectQuiz} />
              <Assignment data={objectAssignments} />
              <Assignment data={objectQuiz} />
              <Assignment data={objectAssignments} />
              <Assignment data={objectQuiz} />
            </Grid>
          </Box>
        )}

        {visibility.students && (
          <Box mb={10}>
            <Typography variant="h4" sx={{ margin: "1em" }} component="h2">
              Students
              <hr />
            </Typography>

            <Grid container spacing={2} justify="center">
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
        )}
        <LiveButton icon={<OndemandVideoIcon fontSize="large" />} />
      </Container>
    </div>
  );
}

export default TeacherClass;
