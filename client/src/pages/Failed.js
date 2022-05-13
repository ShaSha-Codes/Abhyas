import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


function Failed() {
    let navigate=useNavigate()

  return (
    <Stack alignItems={"center"}>
        <Box mt={"40vh"}>
            <Typography sx={{marginBottom:"25px"}} variant={"h3"} component={"h1"}>Brush up some concepts and Try Again</Typography>
            <Button sx={{display:"block", margin:"auto", fontSize:"1.4em"}} variant="contained" size="large" onClick={()=>{navigate(-1)}}>
                Go back
            </Button>
        </Box>
    </Stack>
  )
}

export default Failed