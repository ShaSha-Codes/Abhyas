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
        mdlg:700
      },
    },
  });
  return (
    <Grid item xs={12} smd={12} mdlg={12} lg={6}>
      <Card sx={{minHeight:"160px",minWidth:"300px",maxWidth:"600px"}}>
        <Box p={3} sx={{ display:"flex"}}>
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
            <Button sx={{marginTop:"20px"}} variant="outlined">View</Button>
          </Box>
          <Box  ml={10} sx={{alignSelf: "center"}}>
            {icon}
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default Assignment;

