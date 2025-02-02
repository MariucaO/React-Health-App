import React from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <>
        <Header />

      </>
    </ThemeProvider>
  );
}

export default App;
