import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";

function Assignment() {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card>
        <Box sx={{ textAlign: "center" }}>
          <AssignmentIcon style={{ fontSize: "60px" }} />
          <CardContent>
            <Typography variant="h4" component="h2">
              Test
            </Typography>
            <Typography variant="subtitle1" component="p">
              Testing
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}

export default Assignment;
