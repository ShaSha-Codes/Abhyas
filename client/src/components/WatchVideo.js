import React from "react";
import NavBar from "../components/NavBar";
import { ReactSession } from "react-client-session";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function WatchVideo() {
  ReactSession.setStoreType("sessionStorage");
  let { code } = useParams();
  const [watchVideoData, setWatchVideoData] = React.useState(false);

  React.useEffect(async () => {
    let newContent = await axios.post("http://localhost:3000/class/get/info", {
      email: ReactSession.get("data").email,
      class: code.substring(0, code.length - 1),
    });
    setWatchVideoData(
      newContent.data.videos[parseInt(code.substring(code.length - 1))]
    );
  }, [0]);

  function videoPageMaker() {
    return (
      <div>
        <h1 className="video-title">Title of the Video</h1>
        <div className="center-video">
          <video width="60%" controls>
            <source src={watchVideoData.upload} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h3 className="video-title" style={{ marginTop: "2.2%" }}>
          {watchVideoData.title}
        </h3>
        <div className="video-description">{watchVideoData.description}</div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      {watchVideoData !== false && videoPageMaker()}
    </div>
  );
}
