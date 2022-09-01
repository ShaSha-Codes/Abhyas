import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Notes() {
  const { id } = useParams();

  React.useEffect(async () => {
    let data = await axios.post("http://localhost:3000/class/getNotes", { id });
    data = data.data;
    window.location.href = data.upload;
  }, [id]);

  return (
    <Stack alignItems={"center"}>
      <Box mt={"40vh"}>
        <Typography variant={"h3"} component={"h1"}>
          Redirecting
        </Typography>
      </Box>
    </Stack>
  );
}

export default Notes;
