import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import kid from "../images/shauryastudying.png";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
var GeoPattern = require("geopattern");

function Class(props) {
  const styler = {
    height: "294px",
    width: "300px",
    background: "rgb(229,228,249)",
    background:
      "linear-gradient(90deg, rgba(247,247,252,1) 0%, rgba(255,255,255,1) 35%, rgba(253,255,255,1) 100%)",
    boxShadow: "6px 6px 21px -14px rgba(77,77,77,1)",
    borderRadius: "12px",
  };
  var pattern = GeoPattern.generate(props.title);
  var imgURL = pattern.toDataUri();
  // imgURL = imgURL.substring(5, imgURL.length - 2);
  return (
    <Grid
      item
      xs={7}
      sm={5}
      md={3}
      lg={2.5}
      sx={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "10px",
      }}
    >
      <Box>
        <Card variant="outlined" sx={styler}>
          <CardMedia
            component="img"
            height="100"
            image={imgURL}
            alt="Random Pattern"
            sx={{ boxShadow: "0px 6px 13px -6px rgba(89,89,89,0.84)" }}
          />

          <CardContent>
            <Typography
              sx={{
                position: "relative",
                left: "10px",
                marginBottom: "15px",
              }}
            >
              Testing
            </Typography>
          </CardContent>
          <div style={{ position: "relative", bottom: "-65px" }}>
            <CardActions sx={{ position: "relative", marginBottom: -500 }}>
              <Button size="small">Go to</Button>
            </CardActions>
          </div>
        </Card>
      </Box>
    </Grid>
  );
}

export default Class;
