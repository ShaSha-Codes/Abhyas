import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AssignmentIcon from "@mui/icons-material/AssignmentReturned";
import QuizIcon from "@mui/icons-material/Quiz";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

function MarketButtons(props) {
  let navigate = useNavigate();
  let { code } = useParams();
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ margin: "1em" }} component="h2">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              return (
                props.setVideoVisibility(
                  (prevVideoVisibility) => !prevVideoVisibility
                ),
                props.setNotesVisibility(false)
              );
            }}
          >
            <VideoCallIcon fontSize="large" />
            Video
          </Button>

          <Button
            onClick={() => {
              return (
                props.setNotesVisibility(
                  (prevNotesVisibility) => !prevNotesVisibility
                ),
                props.setVideoVisibility(false)
              );
            }}
          >
            <AssignmentIcon fontSize="large" />
            Notes
          </Button>
        </ButtonGroup>
      </Typography>
    </Box>
  );
}

export default MarketButtons;