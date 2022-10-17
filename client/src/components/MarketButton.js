import React from "react";
import IconButton from "@mui/material/IconButton";
import MarketButtons from "./MarketButtons";

function MarketButton(props) {
  return (
    <label htmlFor="icon-button-file" className="GoMarket">
      <IconButton
        color="primary"
        size="large"
        aria-label="Go Live"
        component="span"
        onClick={props.onClick}
      >
        {props.icon}
      </IconButton>
    </label>
  );
}

export default MarketButton;
