import React, { useState } from "react";
import UserContext from "../UserContext";

const UserProvider = ({ children }) => {
  const [username, setUserName] = useState("user123");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserContext.Provider
      value={{ username, setUserName, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
