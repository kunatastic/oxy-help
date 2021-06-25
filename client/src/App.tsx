import { useColorMode } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PublicRoutes from "./Routes/PublicRoutes";

import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
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
