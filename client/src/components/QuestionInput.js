import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";

export default function QuestionInput() {
  const card = (
    <React.Fragment>
      <CardContent>
        <Stack spacing={2}>
          <TextField
            sx={{ marginTop: "5px" }}
            label="Question"
            variant="outlined"
            // value={}
            name="question"
            // onChange={}
          />
          <TextField
            sx={{ marginTop: "5px" }}
            label="Option 1"
            variant="outlined"
            // value="test"
            name="option1"
            // onChange={}
          />
          <TextField
            sx={{ marginTop: "5px" }}
            label="Option 2"
            variant="outlined"
            // value="test"
            name="option2"
            // onChange={}
          />
          <TextField
            sx={{ marginTop: "5px" }}
            label="Option 3"
            variant="outlined"
            // value="test"
            name="option3"
            // onChange={}
          />
          <TextField
            sx={{ marginTop: "5px" }}
            label="Option 4"
            variant="outlined"
            // value="test"
            name="option4"
            // onChange={}
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
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
