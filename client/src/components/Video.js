import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

function Video(props) {
  const { thumbnail, title, desc } = props.data;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card padding={5}>
        <Box p={1}>
          <CardMedia component="img" height="100%" image={thumbnail} />
          <CardContent>
            <Typography variant="h6" component="p">
              {title}
            </Typography>
            <Typography variant="subtitle2" component="p">
              {desc}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}

export default Video;
