import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router";
import axios from "axios";


export default function Certify() {
  ReactSession.setStoreType("sessionStorage");
  console.log(ReactSession.get("certi"));
  let navigate = useNavigate();
  const [switcher, setSwitcher] = React.useState(0);

  React.useEffect(() => {
    if (ReactSession.get("certi") !== undefined) {
      navigate("/verify");
    }
  }, [switcher]);

  const [certificateData, setCertificateData] = React.useState({
    cred: "",
  });

  const verify = async () => {
    axios({
      method: "POST",
      data: {
        cred: certificateData.cred,
      },
      withCredentials: true,
      url: "http://localhost:3000/verify",
    }).then((res) => {
      ReactSession.set("certi", res.data);
      setSwitcher((prevSwitcher) => {
        return !prevSwitcher;
      });
    });
  };

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
      value={certificateData.cred}
      onChange={handleChange}/>
      <Button variant="contained" color="secondary" onClick={verify}>
        Certify
      </Button>
    </Stack>
  );
}
