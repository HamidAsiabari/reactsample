import { blue, deepOrange, grey, pink, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    h1: {
      margin: 0,
      fontSize: 22,
      "@media (min-width:780px)": {
        fontSize: 54,
      },
    },
    fontSize: 14,
  },
});
