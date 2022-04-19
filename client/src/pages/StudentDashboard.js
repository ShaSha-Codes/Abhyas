import React from "react";
import Navbar from "../components/NavBar";
import Class from "../components/Class";
import Grid from "@mui/material/Grid";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { nanoid } from "nanoid";
import axios from "axios";

function StudentDashboard(props) {
  ReactSession.setStoreType("sessionStorage");
  let navigate = useNavigate();

  React.useEffect(() => {
    if (props.checker()) {
      navigate("/");
    }
  });

  const [joinVisibility, setJoinVisibility] = React.useState(false);
  const [joinCode, setJoinCode] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(async () => {
    let data = await axios.post("http://localhost:3000/student/get", {
      email: ReactSession.get("data").email,
    });
    data = data.data;
    setCards(() => data.courses);
  }, [joinVisibility]);

  function handleChange(event) {
    setJoinCode(event.target.value);
  }

  async function onSubmit() {
    let data = await axios.post("http://localhost:3000/student/getClass", {
      code: joinCode,
    });
    data = data.data;
    if (data == "") {
      alert("Class not found");
    } else {
      let data1 = await axios.patch(
        "http://localhost:3000/student/add/teacher",
        {
          teacher: data.email,
          class: joinCode,
          email: ReactSession.get("data").email,
          name: ReactSession.get("data").name,
        }
      );
      let tempData;
      for (let i = 0; i < data.courses.length; i++) {
        if (data.courses[i].code == joinCode) {
          tempData = data.courses[i];
          break;
        }
      }
      let data2 = await axios.patch("http://localhost:3000/student/addClass", {
        email: ReactSession.get("data").email,
        code: joinCode,
        name: tempData.name,
        description: tempData.description,
      });
    }
  }

  function cardMaker() {
    let tempCards = [];
    for (let i = 0; i < cards.length; i++) {
      tempCards.push(
        <Class
          key={cards[i].code}
          type={"student"}
          title={cards[i].name}
          description={cards[i].description}
          code={cards[i].code}
        />
      );
    }
    return tempCards;
  }

  return (
    <>
      <Navbar />

      <Stack alignItems={"center"}>
        <Button
          sx={{ marginBottom: "30px", textAlign: "center", width: "20%" }}
          variant="contained"
          onClick={() => setJoinVisibility((prev) => !prev)}
        >
          Join a Class
        </Button>
        {joinVisibility && (
          <Box sx={{ width: "300px" }}>
            <Paper sx={{ borderRadius: "10px" }} elevation={6}>
              <Box p={2}>
                <Stack alignItems={"center"} spacing={2}>
                  <Typography
                    sx={{ marginBottom: "10px" }}
                    textAlign={"center"}
                    variant="h6"
                    component="h1"
                  >
                    Join Class
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Class Code"
                    value={joinCode}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <Button
                    sx={{ textAlign: "center", width: "50%" }}
                    variant="contained"
                    onClick={onSubmit}
                  >
                    Join
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Box>
        )}
        <div className="gridContainer">
          <Grid Grid container spacing={3} mt={1} justify="center">
            {cardMaker()}
          </Grid>
        </div>
      </Stack>
    </>
  );
}

export default StudentDashboard;
