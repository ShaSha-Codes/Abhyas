import React from "react";
import IconButton from "@mui/material/IconButton";

function GoLive(props) {
  return (
    <label htmlFor="icon-button-file" className="GoLive">
      <IconButton
        color="primary"
        size="large"
        aria-label="Go Live"
        component="span"
      >
        {props.icon}
      </IconButton>
    </label>
  );
}

export default GoLive;
