
import React, { Suspense, lazy } from 'react';

import { Button, Card, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

const AboutUs = lazy(() => import('../about-us/about-us-page.js'));

function Home() { 
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div >
      <Typography variant="h1">header</Typography>
      <p>text</p>
      <div>div1</div>
      <div>div2</div>
      <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
              {/* <Suspense fallback={<div>Loading...</div>}>
              <AboutUs /> */}
{/* {checked ? null : <AboutUs />} */}

{/* </Suspense> */}
    </div>
  );
}

export default Home;
