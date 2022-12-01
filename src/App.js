import "./App.css";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./features/theme/theme";
import Appbar from "./features/ui/appbar/appbar";

const Home = lazy(() => import('./pages/home/home-page.js'));
const AboutUs = lazy(() => import('./pages/about-us/about-us-page.js'));

function App() {

  return (<div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Appbar />
          <div style={{padding:"0px"}} >
          <Routes >
        
            <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
            <Route path="/about-us" element={ <Suspense fallback={<div>Loading...</div>}><AboutUs /></Suspense> } />
           
          </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
