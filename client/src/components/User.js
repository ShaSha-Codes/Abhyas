import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function User(props) {
  const { firstName, lastName, gender } = props.userData;
  return (
    <Grid item xs={6} sm={3} md={2}>
      <Paper>
        <Box className="User">
          <img
            src={`https://avatars.dicebear.com/api/${gender}/k${firstName} ${lastName}.svg`}
            className="UserPic"
          />
          <Typography variant="h6" component="h1">
            {firstName} {lastName}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

export default User;
