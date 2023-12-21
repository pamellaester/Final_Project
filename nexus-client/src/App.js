import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicPage from "./Pages/Home/PublicPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import LoginPage from "./Pages/Login/LoginPage";
import UserPage from "./Pages/User/UserPage";
import Navbar from "./components/Navbar/Navbar"
import Logout from "./Pages/Logout/LogoutPage";
import SafeSpacePage from "./Pages/SafeSpace/SafeSpacePage";

import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<PublicPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route element={<RequireAuth />}>
          <Route path="/user" element={<UserPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/safe-space" element={<SafeSpacePage/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;