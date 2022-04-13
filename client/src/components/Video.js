import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import {useNavigate} from 'react-router-dom';


function Video(props) {
  const { thumbnail, title, desc } = props.data;
  const navigate = useNavigate();
  const videoClicked = React.useCallback(() => navigate('/watchvideo', {replace: true}), [navigate]);
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card padding={5} onClick={videoClicked}>
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
