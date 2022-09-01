import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function User(props) {
  const { name, email } = props.data;
  return (
    <Grid item xs={6} sm={3} md={2}>
      <Paper>
        <Box className="User">
          <img
            style={{ borderRadius: "100px" }}
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${name}.svg`}
            className="UserPic"
          />
          <Typography variant="h6" component="h1">
            {name}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

export default User;
