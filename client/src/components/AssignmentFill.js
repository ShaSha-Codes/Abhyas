import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import { app, storage } from "../config/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { nanoid } from "nanoid";
import { ReactSession } from "react-client-session";

export default function Videofill(props) {
  ReactSession.setStoreType("sessionStorage");
  const [videoData, setVideoData] = React.useState({
    title: "",
    description: "",
    upload: "",
  });
  let { code } = useParams();
  console.log(code);
  const handleForm = (event) => {
    setVideoData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]:
          event.target.type === "file"
            ? event.target.files[0]
            : event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    const storageRef = ref(storage, `videos/${nanoid(8)}`);
    const uploadTask = uploadBytesResumable(storageRef, videoData.upload);
    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },

      (err) => {
        console.log(err);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await axios
            .patch("http://localhost:3000/class/add/video", {
              email: ReactSession.get("data").email,
              title: videoData.title,
              description: videoData.description,
              upload: downloadURL,
              class: code,
            })
            .then((res) => {
              console.log(res);
            });
        });
      }
    );
  };

  return (
    <>
      <div className="assignmentform">
        <form>
          <Stack spacing={2}>
            <TextField
              sx={{ marginTop: "5px" }}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={videoData.title}
              name="title"
              onChange={handleForm}
            />
            <TextField
              id="outlined-multiline-flexible"
              multiline
              label="Description"
              variant="outlined"
              value={videoData.description}
              name="description"
              onChange={handleForm}
            />
            <label className="label">Notes  :</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="file"
              name="upload"
              onChange={handleForm}
              inputProps={{ accept: ".mp4, .mov, .wmv, .avi, .avchd, .mkv" }}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
}
