import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AssignmentIcon from "@mui/icons-material/AssignmentReturned";

function VideoAssignment(props) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ margin: "1em" }} component="h2">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {return(
              props.setVideoVisibility(
                (prevVideoVisibility) => !prevVideoVisibility
              ),
              props.setAssignmentVisibility(false)
              )
            }
          }
          >
            <VideoCallIcon fontSize="large" />
            Video
          </Button>

          <Button
             onClick={() => {return(
              props.setAssignmentVisibility(
                (prevAssignmentVisibility) => !prevAssignmentVisibility
              ),
              props.setVideoVisibility(false)
              )
            }
          }
          >
            <AssignmentIcon fontSize="large" />
            Assignment
          </Button>
          
        </ButtonGroup>
      </Typography>
    </Box>
  );
}

export default VideoAssignment;
