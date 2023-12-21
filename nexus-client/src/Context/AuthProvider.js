import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  const handleLogout = () => {
    setAuth(false); 
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth , handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
