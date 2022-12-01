
import React, { Suspense, lazy } from 'react';

import {  Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

const AboutUs = lazy(() => import('../about-us/about-us-page.js'));

function ReactLazy() { 
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div >
      <Typography variant="h1">Example - React lazy</Typography>
      <p>Load after uncheck te checkbox:</p>
      <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
            <Suspense fallback={<div>Loading...</div>}>
                 {checked ? null : <AboutUs />}
            </Suspense>
    </div>
  );
}

export default ReactLazy;
