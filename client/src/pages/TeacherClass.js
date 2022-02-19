import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Video from '../components/Video';
import Typography from '@mui/material/Typography';

function TeacherClass() {
  return (
    
    <div>
        <Container maxWidth="xl">
            <Typography variant="h5" component="h2">
                Videos
                    <Grid container spacing={5} justify="center">
                        <Video/>
                        <Video/>
                        <Video/>
                        <Video/>
                        
                    </Grid>
            </Typography>
            <Typography variant="h5" component="h2">
                Assignments
            </Typography>
            <Typography variant="h5" component="h2">
                Students
            </Typography>
            
        </Container>
    </div>
  )
}

export default TeacherClass