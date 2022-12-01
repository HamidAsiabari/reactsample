
import React from 'react';

import {Typography } from "@mui/material";

function Home() { 
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div >
      <Typography variant="h1">Home</Typography>
      <div>text for ...</div>
     
    </div>
  );
}

export default Home;
