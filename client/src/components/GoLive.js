import React from 'react'
import IconButton from '@mui/material/IconButton';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
function GoLive() {
  return (
    <label htmlFor="icon-button-file" className='GoLive' >
        <IconButton color="primary" size="large" aria-label="Go Live" component="span">
          <VideoCameraFrontIcon fontSize="large"  />
        </IconButton>
      </label>
  )
}

export default GoLive