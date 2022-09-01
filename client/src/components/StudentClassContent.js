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
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import VideoFill from "./VideoFill";
import NotesFill from "./NotesFill";
import AssignmentFill from "./AssignmentFill";
import { ReactSession } from "react-client-session";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotesIcon from '@mui/icons-material/Notes';


function StudentClass(props) {
  ReactSession.setStoreType("sessionStorage");
  let { code } = useParams();
  const navigate = useNavigate();
  function goToStudentWhiteboard() {
    navigate("/student-whiteboard");
  }

  const visibility = props.visibility;
  const [videoVisibility, setVideoVisibility] = React.useState(false);
  const [assignmentVisibility, setAssignmentVisibility] = React.useState(false);
  const [notesVisibility, setNotesVisibility] = React.useState(false);
  const [content, setContent] = React.useState({ videos: [], assignments: [], notes: [], quiz: [],users:[] });
  const [refresh,setRefresh]=React.useState(false);

  React.useEffect(async () => {
    let newContent = await axios.post("http://localhost:3000/class/get/info", {
      class: code,
    });
    setContent(newContent.data);
  }, [refresh]);

  console.log(content);

  function videoMaker() {
    let videoContent = [];
    for (let i = 0; i < content.videos.length; i++) {
      let videoData = {
        title: content.videos[i].title,
        description: content.videos[i].description,
        upload: content.videos[i].upload,
        number: i,
        
      };
      console.log(videoData)
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
        number: i,
        type:"Assignment", 
        icon: <AssignmentIcon sx={{ fontSize: "60px" }} fontSize="large" />
      };
      assignmentContent.push(<Assignment data={assignmentData} />);
    }
    return assignmentContent
  }

  
  function quizMaker() {
    let quizContent = [];
    for (let i = 0; i < content.quiz.length; i++) {
      let quizData = {
        title: content.quiz[i].title,
        description: content.quiz[i].description,
        number: i,
        type: "Quiz",
        identity:"student",
        id:content.quiz[i].code,
        icon: <QuizIcon sx={{ fontSize: "60px" }} fontSize="large" />,
      };
      quizContent.push(<Assignment data={quizData} />);
    }
    return quizContent
  }

  function notesMaker() {
    let notesContent = [];
    for (let i = 0; i < content.notes.length; i++) {
      let notesData = {
        title: content.notes[i].title,
        description: content.notes[i].description,
        number: i,
        type: "Notes",
        identity:"student",
        id:content.notes[i]._id,
        icon: <NotesIcon sx={{ fontSize: "60px" }} fontSize="large" />,
      };
      notesContent.push(<Assignment data={notesData} />);
    }
    return notesContent
  }

  
  function userMaker() {
    let userContent = [];
    for (let i = 0; i < content.users.length; i++) {
      let userData = {
        name: content.users[i].name,
        email: content.users[i].email,
        number: i,
      };
      console.log("what")
      userContent.push(<User data={userData} />);
    }
    return userContent
  }


  

  return(
    <div>
      <Container maxWidth="xl">
       
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

      {visibility.quizzes && (
          <Box mb={10}>
            <Typography variant="h4" sx={{ margin: "1em" }} component="h2">
              Quiz
              <hr />
            </Typography>
            <Grid container spacing={2} justify="center">
             {quizMaker()}
            </Grid>
          </Box>
        )}

      {visibility.notes && (
          <Box mb={10}>
            <Typography variant="h4" sx={{ margin: "1em" }} component="h2">
              Notes
              <hr />
            </Typography>
            <Grid container spacing={2} justify="center">
             {notesMaker()}
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
             {userMaker()}
            </Grid>
          </Box>
        )}
        <LiveButton
          onClick={goToStudentWhiteboard}
          icon={<ImageAspectRatioIcon fontSize="large" />}
        />
      </Container>
    </div>
  );
}

export default StudentClass;
