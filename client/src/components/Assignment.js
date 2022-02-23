import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function Assignment() {
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
              Overline
            </Typography>
            <Typography variant="h5" component="h5">
              Headline 5
            </Typography>
            <Typography variant="subtitle2" component="h5">
              Greyhound divisively hello coldly wonderfully..
            </Typography>
            <Button sx={{ marginTop: "20px" }} variant="outlined">
              View
            </Button>
          </Box>
          <Box ml={10} sx={{ alignSelf: "center" }}>
            <AssignmentIcon sx={{ fontSize: "60px" }} fontSize="large" />
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default Assignment;

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
