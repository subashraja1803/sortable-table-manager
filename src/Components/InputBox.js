import React from "react";
import { Box, Button,  TextField } from "@mui/material";


export default function InputBox(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth id="standard-basic" label="Enter the API " variant="standard" margin="normal" onChange={props.handleURLChange}/>
      <Button variant="contained" onClick={props.handleFetch}>Fetch</Button>
      
    </Box>
  )
}