import { useColorMode } from "@chakra-ui/react";
import React, { useContext } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PublicRoutes from "./Routes/PublicRoutes";

function App() {
  const info = useContext(AuthContext);
  // console.log(info);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "light" ? toggleColorMode() : ""}
      {info?.loggedIn === false && <PublicRoutes />}
      {info?.loggedIn === true && <PrivateRoutes />}
    </>
  );
}

export default App;
