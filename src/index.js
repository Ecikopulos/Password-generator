import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/Theme";
import AppVisual from "./Views/AppVisual/AppVisual";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AppVisual/>
    </ThemeProvider>
);
