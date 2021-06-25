import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
