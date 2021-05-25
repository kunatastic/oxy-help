import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext =
  createContext<{
    loggedIn: boolean | undefined;
    getLoggedIn: () => Promise<void>;
  } | null>(null);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<undefined | boolean>(undefined);

  const getLoggedIn = async () => {
    const loggedIn = await axios.get("/auth/loggedin");
    setLoggedIn(loggedIn.data);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
