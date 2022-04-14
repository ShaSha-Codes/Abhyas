import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";


export default function QuestionInput(props) {
  const {questionData, setQuestionData,index} = props
  console.log(questionData)


  function handleChange(event){
    let tempData=[]
    for(let i=0;i<questionData.length;i++){
      if(i===index){
        tempData.push({
          ...questionData[i],[event.target.name]:event.target.value
        })
      }
      else{
        tempData.push(questionData[i])
      }
      setQuestionData(tempData)
    }
  }
  const card = ()=>(
    <React.Fragment>
      <CardContent>
        <Stack spacing={2}>
          <TextField
            sx={{ marginTop: "5px" }}
            label="Question"
            variant="outlined"
            name="question"
            value={questionData[index].question?questionData[index].question:""}
            onChange={handleChange}
          
          />
          <TextField
            sx={{ marginTop: "5px" }}
            label="Option 1"
            variant="outlined"
            name="option1"
            value={questionData[index].option1}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginTop: "5px" }}
            label="Option 2"
            variant="outlined"
            name="option2"
            value={questionData[index].option2}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginTop: "5px" }}
            label="Option 3"
            variant="outlined"
            name="option3"
            value={questionData[index].option3}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginTop: "5px" }}
            label="Option 4"
            variant="outlined"
            name="option4"
            value={questionData[index].option4}
            onChange={handleChange}
          />
           <TextField
            sx={{ marginTop: "5px" }}
            label="Answer"
            variant="outlined"
            name="answer"
            value={questionData[index].answer}
            onChange={handleChange}
          />
        </Stack>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box
      className="center-div"
      sx={{ minWidth: 275, maxWidth: "75%", marginTop: 5 }}
    >
      <Card variant="outlined">{questionData[index]!==undefined?card():""}</Card>
    </Box>
  );
}
