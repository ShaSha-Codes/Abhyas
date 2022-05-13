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

export default function MarketNotesForm(props) {
  ReactSession.setStoreType("sessionStorage");
  const [notesData, setNotesData] = React.useState({
    subject: "",
    title: "",
    description: "",
    upload: "",
  });
  let { code } = useParams();
  console.log(code);
  const handleForm = (event) => {
    setNotesData((prevFormData) => {
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
    const storageRef = ref(storage, `notes/${nanoid(8)}`);
    const uploadTask = uploadBytesResumable(storageRef, notesData.upload);
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
            .patch("http://localhost:3000/class/add/notes", {
              email: ReactSession.get("data").email,
              title: notesData.title,
              description: notesData.description,
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
      <div className="notesform">
        <form>
          <Stack spacing={2}>
            <TextField
              sx={{ marginTop: "5px" }}
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              value={notesData.subject}
              name="subject"
              onChange={handleForm}
            />
            <TextField
              sx={{ marginTop: "5px" }}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={notesData.title}
              name="title"
              onChange={handleForm}
            />
            <TextField
              id="outlined-multiline-flexible"
              multiline
              label="Description"
              variant="outlined"
              value={notesData.description}
              name="description"
              onChange={handleForm}
            />
            <label className="label">Upload Notes :</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="file"
              name="upload"
              onChange={handleForm}
              // inputProps={{ accept: ".mp4, .mov, .wmv, .avi, .avchd, .mkv" }}
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
