import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { useAuth } from "../../../contexts/AuthContext";

function LogOut() {
  //   const [error, setError] = useState("");
  const { logout } = useAuth();

  //   async function handleLogout() {
  //     setError("");

  //     try {
  //       await logout();
  //     } catch {
  //       setError("Failed to log out");
  //     }
  //   }

  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to={`${process.env.PUBLIC_URL}`} />;
}

export default LogOut;
