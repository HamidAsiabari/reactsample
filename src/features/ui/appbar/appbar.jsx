import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: "1.6rem" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            News
          </Typography>
          <Typography variant="h6" component="div" ml={2}>
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" component="div" ml={2}>
            <Link to="/about-us">About</Link>
          </Typography>
          <Typography variant="h6" component="div" ml={2}>
            <Link to="/ExampleList">Examples</Link>
          </Typography>
          <Button sx={{ marginLeft: "auto" }} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
