import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./LogoutPage.css";

const API_URL = "http://localhost:3000";

const LogoutPage = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();
  const [message, setMessage] = useState("Logging out...");

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.post(`${API_URL}/logout`);

        if (response?.status === 200) {
          setMessage("Logout successful. Redirecting...");
          setTimeout(() => {
            handleLogout();
            navigate("/");
          }, 3000);
        }
      } catch (error) {
        setMessage("Logout failed. Redirecting...");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    };

    logout();
  }, [navigate, handleLogout]);

  useEffect(() => {
    const container = document.querySelector(".logout-container");
    if (container) {
      container.classList.add("show");
    }
  }, []);

  return (
    <div className="logout-container">
      <h2>{message}</h2>
      <p>We hope to see you again soon!</p>
    </div>
  );
};

export default LogoutPage;
