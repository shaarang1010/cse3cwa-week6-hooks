import React, { useContext } from "react";
import UserContext from "./Context/UserContext";
import Profile from "./profile/Profile";
import Login from "./login/Login";

const LoginTest = () => {
  const { isLoggedIn } = useContext(UserContext);
  return <>{isLoggedIn ? <Profile /> : <Login />}</>;
};

export default LoginTest;
