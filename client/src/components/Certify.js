import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Certify() {
  return (
    <Stack spacing={2}>
      <TextField id="outlined-basic" label="Credential ID" variant="outlined" />
      <Button variant="contained" color="secondary">
        Certify
      </Button>
    </Stack>
  );
}
