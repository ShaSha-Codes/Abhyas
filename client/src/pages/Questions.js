import React from "react";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import axios from "axios";
import AskQuestionCard from "../components/AskQuestionCard";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

function Questions() {
  ReactSession.setStoreType("sessionStorage");
  let navigate = useNavigate();
  const [questionContent, setQuestionContent] = React.useState([]);
  const [info, setInfo] = React.useState({ title: "", description: "" });
  let { code } = useParams();
  let courseCode = "";
  React.useEffect(async () => {
    let data = await axios.post("http://localhost:3000/student/get/quiz", {
      code,
    });
    courseCode = data.data[0];
    data = data.data[1];
    setInfo({
      title: data.title,
      description: data.description,
      code: data.code,
    });
    let ques = data.qa;
    for (let i = 0; i < ques.length; i++) {
      ques[i] = { ...ques[i], userAns: "" };
    }
    setQuestionContent(ques);
  }, [0]);

  async function handleSubmit() {
    let marks = 0;
    let status;
    for (let i = 0; i < questionContent.length; i++) {
      if (questionContent[i].userAns == questionContent[i].answer) {
        marks += 1;
      }
    }
    console.log(marks);
    if (marks >= questionContent.length / 2) {
      status = "Passed";
    } else {
      status = "Failed";
    }
    if (status == "Passed") {
      let result = await axios.patch(
        "http://localhost:3000/student/submit/quiz",
        {
          courseCode,
          email: ReactSession.get("data").email,
          code,
          marks,
          status,
          qa: questionContent,
        }
      );
      if (result == true) {
        alert("Quiz Submitted");
      }
    } else {
      navigate("/failed");
    }
  }

  function questionMaker() {
    let res = [];
    for (let i = 0; i < questionContent.length; i++) {
      res.push(
        <AskQuestionCard
          question={questionContent[i]}
          num={i}
          key={i}
          setQuestionContent={setQuestionContent}
        />
      );
    }
    return res;
  }
  return (
    <>
      <NavBar />
      <Box>
        <Stack spacing={10} alignItems={"center"}>
          {questionMaker()}
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Questions;
