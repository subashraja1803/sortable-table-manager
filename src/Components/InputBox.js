import React from "react";
import { Button,  TextField } from "@mui/material";


export default function InputBox(props) {
  return (
    <div className="InputBox">
        <TextField
          id="standard-basic"
          label="Enter the URL"
          variant="standard"
          margin="normal"
          onChange={props.handleURLChange}
          style={{ width: "40rem" }}
        />
        <Button
          style={{ height: "fit-content", padding: "0.5rem 1rem", width: "7rem" }}
          variant="contained"
          onClick={props.handleFetch}
        >Fetch</Button>
    </div>
  )
}