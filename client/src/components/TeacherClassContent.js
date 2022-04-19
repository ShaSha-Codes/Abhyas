import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Video from "./Video";
import Typography from "@mui/material/Typography";
import ThumbNail from "../tempImages/Thumbnail.png";
import Assignment from "./Assignment";
import User from "./User";
import Box from "@mui/material/Box";
import VideoAssignment from "./VideoAssignment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import LiveButton from "./LiveButton";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import VideoFill from "./VideoFill";
import NotesFill from "./NotesFill";
import AssignmentFill from "./AssignmentFill";
import { ReactSession } from "react-client-session";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";

function TeacherClass(props) {
  ReactSession.setStoreType("sessionStorage");
  let { code } = useParams();
  const navigate = useNavigate();
  const visibility = props.visibility;
  const [videoVisibility, setVideoVisibility] = React.useState(false);
  const [assignmentVisibility, setAssignmentVisibility] = React.useState(false);
  const [notesVisibility, setNotesVisibility] = React.useState(false);
  const [content, setContent] = React.useState({
    videos: [],
    assignments: [],
    notes: [],
    quiz: [],
    users: [],
  });
  const [refresh, setRefresh] = React.useState(false);
  React.useEffect(async () => {
    let newContent = await axios.post("http://localhost:3000/class/get/info", {
      email: ReactSession.get("data").email,
      class: code,
    });
    setContent(newContent.data);
  }, [refresh]);

  console.log(content);

  function goToWhiteboard() {
    navigate("/whiteboard");
    console.log("whiteboard");
  }

  function videoMaker() {
    let videoContent = [];
    for (let i = 0; i < content.videos.length; i++) {
      let videoData = {
        title: content.videos[i].title,
        description: content.videos[i].description,
        upload: content.videos[i].upload,
        number: i,
      };
      videoContent.push(<Video data={videoData} />);
    }
    return videoContent;
  }

  function assignmentMaker() {
    let assignmentContent = [];
    for (let i = 0; i < content.assignments.length; i++) {
      let assignmentData = {
        title: content.assignments[i].title,
        description: content.assignments[i].description,
        upload: content.assignments[i].upload,
        number: i,
      };
      assignmentContent.push(<Assignment data={assignmentData} />);
    }
    return assignmentContent;
  }

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
        <VideoAssignment
          setVideoVisibility={setVideoVisibility}
          setAssignmentVisibility={setAssignmentVisibility}
          setNotesVisibility={setNotesVisibility}
        />
        {videoVisibility && (
          <VideoFill setVideoVisibility={setVideoVisibility} />
        )}
        {assignmentVisibility && (
          <AssignmentFill setAssignment={setAssignmentVisibility} />
        )}
        {notesVisibility && <NotesFill setNotes={setNotesVisibility} />}

        {visibility.videos && (
          <Box mb={10}>
            <Typography variant="h4" sx={{ margin: "1em" }} component="h2">
              Videos
              <hr />
            </Typography>
            <Grid container spacing={5} justify="center">
              {videoMaker()}
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
              {assignmentMaker()}
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
        <LiveButton
          onClick={goToWhiteboard}
          icon={<ImageAspectRatioIcon fontSize="large" />}
        />
      </Container>
    </div>
  );
}

export default TeacherClass;
