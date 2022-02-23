import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function Class() {
    const styler={
        height:"120px",
        backgroundColor: "#7f5a83",
        backgroundImage: "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)",


    }
  return (
    
    <Grid item xs={12} sm={6} md={2}>
        <Box >
            <Paper variant="outlined" sx={styler}>
                <Typography sx={{position:"absolute",top:"120px"}}>
                    Testing
                </Typography>
            </Paper>
        </Box>
    </Grid>
  )
}

export default Class