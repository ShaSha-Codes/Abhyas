import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ThumbNail from '../tempImages/Thumbnail.png'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';


function Video() {
  return (
    <Grid item xs={12} sm={6} md={3}>
        <Card  padding={5}>
            <CardMedia  
            component="img"
            height="100%"
            image={ThumbNail}
            alt="green iguana"/>
            <CardContent>
                <Typography variant="h6" component="p">
                    React
                </Typography>
                <Typography variant="subtitle2" component="p">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                </Typography>
        </CardContent>
    </Card>

    </Grid>
  )
}

export default Video