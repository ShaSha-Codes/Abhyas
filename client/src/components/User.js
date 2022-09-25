import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";

function User(props) {
  const { name, email, points } = props.data;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Grid item xs={6} sm={3} md={2}>
      <Paper>
        <Box
          className="User"
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <img
            style={{ borderRadius: "100px" }}
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${name}.svg`}
            className="UserPic"
          />
          <Typography variant="h6" component="h1">
            {name}
          </Typography>
        </Box>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>AICTE points: {points} </Typography>
        </Popover>
      </Paper>
    </Grid>
  );
}

export default User;
