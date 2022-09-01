import React from "react";
import NavBar from "../components/NavBar";
import { ReactSession } from "react-client-session";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function WatchVideo() {
  ReactSession.setStoreType("sessionStorage");
  let { code } = useParams();
  const [watchVideoData, setWatchVideoData] = React.useState(false);

  React.useEffect(async () => {
    let newContent = await axios.post("http://localhost:3000/class/get/info", {
      class: code.substring(0, code.length - 1),
    });
    setWatchVideoData(
      newContent.data.videos[parseInt(code.substring(code.length - 1))]
    );
  }, [0]);

  function videoPageMaker() {
    return (
      <Box ml={5} mr={5}>
        <Paper
          sx={{ borderRadius: "20px", margin: "0", height: "85vh" }}
          elevation={4}
        >
          <Box p={5}>
            <div>
              <h1 className="video-title" style={{ textAlign: "center" }}>
                {watchVideoData.title}
              </h1>
              <hr />
              <div className="center-video">
                <video height="500px" controls>
                  <source src={watchVideoData.upload} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3
                className="video-title"
                style={{ textAlign: "center", marginTop: "3.2%" }}
              >
                Description
                <h5
                  style={{ textAlign: "center", marginTop: "1%" }}
                  className="video-description"
                >
                  {watchVideoData.description}
                </h5>
              </h3>
            </div>
          </Box>
        </Paper>
      </Box>
    );
  }

  return (
    <div>
      <NavBar />
      {watchVideoData !== false && videoPageMaker()}
    </div>
  );
}
