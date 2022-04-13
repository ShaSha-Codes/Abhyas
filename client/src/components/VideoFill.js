import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import bcryptjs from "bcryptjs";
import { Context } from "../context/FormOpen";
import { app, storage } from "../config/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Videofill() {
  const [videoData, setVideoData] = React.useState({
    title: "",
    description: "",
    upload: "",
  });

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

  const handleSubmit = (event) => {
    const storageRef = ref(storage, `videos/${videoData.upload.name}`);
    const uploadTask = uploadBytesResumable(storageRef, videoData.upload);
    uploadTask.on(
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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <>
      <div className="videoform">
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
            <label className="label">Upload:</label>
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
