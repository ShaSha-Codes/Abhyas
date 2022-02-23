import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

function Assignment(props) {

  const {type,title,desc,icon}=props.data
  const theme = createTheme({
    breakpoints: {
      values: {
        mdlg: 700,
      },
    },
  });
  return (
    <Grid item xs={12} smd={12} mdlg={12} lg={6}>
      <Card sx={{ minHeight: "160px", minWidth: "300px", maxWidth: "600px" }}>
        <Box p={3} sx={{ display: "flex" }}>
          <Box>
            <Typography variant="subtitle1" component="p">
              {type}
            </Typography>
            <Typography variant="h5" component="h5">
              {title}
            </Typography>
            <Typography variant="subtitle2" component="h5">
              {desc}
            </Typography>
            <Button sx={{ marginTop: "20px" }} variant="outlined">
              View
            </Button>
          </Box>
<<<<<<< HEAD
          <Box  ml={10} sx={{alignSelf: "center"}}>
            {icon}
=======
          <Box ml={10} sx={{ alignSelf: "center" }}>
            <AssignmentIcon sx={{ fontSize: "60px" }} fontSize="large" />
>>>>>>> 52e58586bd80d9d73641ffb3ff8852666bdfa08b
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default Assignment;

<<<<<<< HEAD
=======
// <Grid item xs={12} sm={4} md={3}>
// <Card>
//   <Box sx={{ textAlign: "center" }}>
//     <AssignmentIcon style={{ fontSize: "60px" }} />
//     <CardContent>
//       <Typography variant="h4" component="h2">
//         Test
//       </Typography>
//       <Typography variant="subtitle1" component="p">
//         Testing
//       </Typography>
//     </CardContent>
//   </Box>
// </Card>
// </Grid>
>>>>>>> 52e58586bd80d9d73641ffb3ff8852666bdfa08b
