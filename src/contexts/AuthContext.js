import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    // setIsAuthenticated(true);
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    // setIsAuthenticated(true);
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    // setIsAuthenticated(false);
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        setCurrentUser(user);
        user.getIdToken(true).then((token) => {
          setToken(token);
        });
        setUserId(user.uid);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    token,
    userId,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
