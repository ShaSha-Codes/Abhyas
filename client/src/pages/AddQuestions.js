import React from "react";
import "../assets/css/style.css";
import Navbabr from "../components/NavBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import QuestionInput from "../components/QuestionInput";
import { nanoid } from "nanoid";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { useParams } from "react-router-dom";

export default function AddQuestions() {
  ReactSession.setStoreType("sessionStorage");
  let { code } = useParams();
  const [numberOfQuestions, setNumberOfQuestions] = React.useState(1);
  const [metaData, setMetaData] = React.useState({
    title: "",
    description: "",
  });
  const [questionData, setQuestionData] = React.useState([
    {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    },
  ]);

  function metaDataChanger(event) {
    setMetaData((prevMetaData) => {
      return { ...prevMetaData, [event.target.name]: event.target.value };
    });
  }

  React.useEffect(() => {
    if (questionData.length <= numberOfQuestions) {
      let tempData = [...questionData];
      for (let i = questionData.length; i < numberOfQuestions; i++) {
        tempData.push({
          question: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        });
      }
      setQuestionData(tempData);
    } else {
      let tempData = [];
      for (let i = 0; i < numberOfQuestions; i++) {
        tempData.push(questionData[i]);
      }
      setQuestionData(tempData);
    }
  }, [numberOfQuestions]);

  console.log(questionData);

  function handleNumberOfQuestions(event) {
    setNumberOfQuestions(event.target.value);
  }

  function questionMaker() {
    let questions = [];
    for (let i = 0; i < numberOfQuestions; i++) {
      questions.push(
        <QuestionInput
          key={i}
          index={i}
          questionData={questionData}
          setQuestionData={setQuestionData}
        />
      );
    }
    return questions;
  }

  function submitData() {
    axios
      .patch("http://localhost:3000/class/add/quiz", {
        ...metaData,
        quiz: questionData,
        code: nanoid(8),
        class: code,
        email: ReactSession.get("data").email,
      })
      .then((res) => console.log(res));
  }

  console.log(numberOfQuestions);
  return (
    <div>
      <Navbabr />
      <TextField
        sx={{ marginTop: "5px", marginLeft: "20px" }}
        label="Number of Questions"
        placeholder="Enter Number of questions"
        variant="outlined"
        value={numberOfQuestions}
        name="NumberOfQuestions"
        type="number"
        onChange={handleNumberOfQuestions}
      />
      <br />
      <br />
      <TextField
        sx={{ width: "600px", marginTop: "5px", marginLeft: "20px" }}
        label="Title"
        placeholder="Enter Title"
        variant="outlined"
        value={metaData.title}
        onChange={metaDataChanger}
        name="title"
      />
      <br />
      <br />
      <TextField
        multiline
        rows={3}
        sx={{ width: "600px", marginTop: "5px", marginLeft: "20px" }}
        label="Description"
        placeholder="Enter Description"
        variant="outlined"
        value={metaData.description}
        name="description"
        onChange={metaDataChanger}
      />
      {questionMaker()}
      <Stack sx={{ marginTop: "20px" }} alignItems={"center"}>
        <Button onClick={submitData} sx={{ width: "70%" }} variant="contained">
          Submit
        </Button>
      </Stack>
      <br />
      <br />
    </div>
  );
}
