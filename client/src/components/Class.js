import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Class() {
  const styler = {
    height: "120px",
    background: "rgb(229,228,249)",
    background:
      "linear-gradient(90deg, rgba(247,247,252,1) 0%, rgba(255,255,255,1) 35%, rgba(253,255,255,1) 100%)",
    boxShadow: "6px 6px 21px -14px rgba(77,77,77,1)",
    borderRadius:"12px",
  };
  return (
    <Grid item xs={7} sm={5} md={3} lg={2.5} sx={{display:"block",marginLeft:"auto",marginRight:"auto",borderRadius:"10px"}} >
      <Box>
        <Paper variant="outlined" sx={styler}>
          <Typography
            sx={{
              position: "relative",
              top: "10px",
              left: "10px",
              marginBottom: "15px",
            }}
          >
            Testing
          </Typography>
          <hr />
        </Paper>
      </Box>
    </Grid>
  );
}

export default Class;
