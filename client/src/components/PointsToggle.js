import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookIcon from "@mui/icons-material/Book";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

function PointsToggle(props) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ margin: "1em" }} component="h2">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              return props.setPointsVisibility(
                (prevPointsVisibility) => !prevPointsVisibility
              );
            }}
          >
            <BookIcon fontSize="large" />
            Activity Diary
          </Button>
        </ButtonGroup>
      </Typography>
    </Box>
  );
}

export default PointsToggle;
