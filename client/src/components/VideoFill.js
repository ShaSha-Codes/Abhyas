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

export default function Videofill() {
  const [videoData, setVideoData] = React.useState({
    title: "",
    description: "",
    upload: "",
  });

  const handleForm = (event) => {
    setVideoData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
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
              value={videoData.upload}
              name="upload"
              onChange={handleForm}
            />
          </Stack>
        </form>
      </div>
    </>
  );
}
