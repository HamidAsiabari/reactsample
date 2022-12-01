import "./App.css";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./features/theme/theme";
import Appbar from "./features/ui/appbar/appbar";
import SimpleContainer from "./features/theme/container";
const Home = lazy(() => import('./pages/home/home-page.js'));
const AboutUs = lazy(() => import('./pages/about-us/about-us-page.js'));
const ReactLazy = lazy(() => import('./pages/examples/reactLazy.jsx'));
const ExampleList = lazy(() => import('./pages/examples/exampleList.jsx'));

function App() {

  return (<div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Appbar />
          <SimpleContainer >
          <Routes >
        
            <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
            <Route path="/about-us" element={ <Suspense fallback={<div>Loading...</div>}><AboutUs /></Suspense> } />
            <Route path="/ExampleList" element={ <Suspense fallback={<div>Loading...</div>}><ExampleList /></Suspense> } />
            <Route path="/ReactLazy" element={ <Suspense fallback={<div>Loading...</div>}><ReactLazy /></Suspense> } />

          </Routes>
          </SimpleContainer>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
