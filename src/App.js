import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutUs } from "./pages";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./features/theme/theme";
import Appbar from "./features/ui/appbar/appbar";

console.log("theme", theme);
function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Appbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecommerce" element={<AboutUs />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
