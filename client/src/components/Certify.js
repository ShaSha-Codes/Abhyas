import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router";


export default function Certify() {
  let navigate = useNavigate();

  const [certificateData, setCertificateData] = React.useState({
    cred: "",
  });



  
  function verify(){
    navigate("/certificate/"+certificateData.cred)
  }

  const handleChange = (event) => {
    setCertificateData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  return (
    <Stack spacing={2}>
      <TextField
        id="outlined-basic"
        label="Credential ID"
        variant="outlined"
        name="cred"
        value={certificateData.cred}
        onChange={handleChange}
      />
      <Button variant="contained" color="secondary" onClick={verify}>
        Certify
      </Button>
    </Stack>
  );
}
