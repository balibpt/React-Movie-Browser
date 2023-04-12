import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Tv from "./Pages/Tv";

export const AuthContext = React.createContext();

export default function Auth({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initialize = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    initialize();
  }, []);

  return (
    <React.Fragment>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </React.Fragment>
  );
}
