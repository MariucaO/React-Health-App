import { createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FC842D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#9B9FAA",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#9B9FAA",
      },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Verdana, sans-serif",
    h1: {
      fontSize: "34px",
      fontWeight: 700,
      lineHeight: "47.6px",
      "@media(min-width:960px)": {
        fontSize: "3 rem",
      },
    },
    h2: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#212121",
    },
  },
  link: {
    color: "#9B9FAA",
    fontWeight: 700,
    fontSize: "14px",
    textDecoration: "none",
  },
 });

export default theme;