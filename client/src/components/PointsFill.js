import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import { app, storage } from "../config/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { nanoid } from "nanoid";
import { ReactSession } from "react-client-session";

export default function Pointsfill(props) {
  ReactSession.setStoreType("sessionStorage");
  const [content, setContent] = React.useState({
    title: "",
    description: "",
    hours: "",
    date: "",
    
  });
  const [refresh, setRefresh] = React.useState(false);
  React.useEffect(async () => {
    let newContent = await axios.post("http://localhost:3000/class/get/info", {
      email: ReactSession.get("data").email,
    });
    setContent(newContent.data);
  }, [refresh]);
  
  console.log(content);

  const [pointsData, setPointsData] = React.useState({
    points: "",
    description: "",
    hours: "",
    date: "",
  });

  const { id } = useParams();

  const handlePoints = (event) => {
    setPointsData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  //Gathering Login Data
  // const handlePoints = (event) => {
  //   setLoginData((prevFormData) => {
  //     return { ...prevFormData, [event.target.name]: event.target.value };
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(pointsData);
    axios({
      method: "POST",
      data: {
        points: pointsData.points,
        description: pointsData.description,
        hours: pointsData.hours,
        date: pointsData.date,
      },
      withCredentials: true,
      url: `http://localhost:3000/points/${id}`,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="pointsform">
        <form>
          <Stack spacing={2}>
            <TextField
              sx={{ marginTop: "5px" }}
              id="outlined-basic"
              label="Activity Name"
              variant="outlined"
              value={pointsData.title}
              name="ActivityName"
              onChange={handlePoints}
            />
            <TextField
              id="outlined-multiline-flexible"
              multiline
              label="Description"
              variant="outlined"
              value={pointsData.description}
              name="description"
              onChange={handlePoints}
            />
            <TextField
              id="outlined-multiline-flexible"
              multiline
              label="Hours Attended"
              variant="outlined"
              value={pointsData.hours}
              name="HoursAttended"
              onChange={handlePoints}
            />
            <TextField 
              id="outlined-multiline-flexible"
              multiline
              label="Date"
              variant="outlined"
              value={pointsData.date}
              name="Date"
              onChange={handlePoints}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
}
