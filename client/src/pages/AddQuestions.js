import React from "react";
import "../assets/css/style.css";
import QuestionInput from "../components/QuestionInput";
import Navbabr from "../components/NavBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AddQuestions() {
  const [numberOfQuestions, setNumberOfQuestions] = React.useState(1);
  var rows = [];
  for (let x = 0; x < numberOfQuestions; x++) {
    rows.push(
      <div>
        <h4 className="font-style" style={{ marginLeft: "5%" }}>
          Question {x + 1}
        </h4>
        <QuestionInput key={x} id={x} />
      </div>
    );
  }

  const handleNumberOfQuestions = (event) => {
    setNumberOfQuestions(event.target.value);
  };

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
        onChange={handleNumberOfQuestions}
      />
      {rows}
      <br />
      <Box textAlign="center">
        <Button
          sx={{ marginBottom: "30px" }}
          color="secondary"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}
