import React from "react";

import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const { currentUser } = useAuth();
  return <div>{currentUser.email}</div>;
}

export default Profile;
