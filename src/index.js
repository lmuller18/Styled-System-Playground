import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

import App from "./App";

const Index = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(Index, rootElement);
