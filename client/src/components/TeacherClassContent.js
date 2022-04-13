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
import { ReactSession } from "react-client-session";
import { useParams} from "react-router-dom";
import axios from "axios";

function TeacherClass(props) {
  ReactSession.setStoreType("sessionStorage");
  let {code}=useParams()




  const visibility = props.visibility;
  const [videoVisibility,setVideoVisibility] = React.useState(true);
  const [content,setContent] = React.useState({videos:[]});


  React.useEffect(async ()=>{
      let newContent=await axios.post("http://localhost:3000/class/get/info",{
        email:ReactSession.get("data").email,
        class:code
      })
      setContent(newContent.data)
  },[0])
  
  console.log(content)

  function videoMaker(){
    let videoContent=[]
    for (let i = 0; i < content.videos.length; i++) {
        let videoData={title:content.videos[i].title,description:content.videos[i].description,upload:content.videos[i].upload}
        videoContent.push(<Video data={videoData}/>)
      }
      return videoContent
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
        
        <VideoAssignment setVideoVisibility={setVideoVisibility} />
        {videoVisibility 
        && 
        <VideoFill setVideoVisibility={setVideoVisibility} />}
        
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
        <LiveButton icon={<VideoCameraFrontIcon fontSize="large" />} />
      </Container>
    </div>
  );
}

export default TeacherClass;
