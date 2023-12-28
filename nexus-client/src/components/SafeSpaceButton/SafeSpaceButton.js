import React from "react";
import { useNavigate } from "react-router-dom";
import "./SafeSpaceButton.css";

const SafeSpaceButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/safe-space-btn");
  };

  return (
    <div className="safe-space-button" onClick={handleClick}>
      <span>Safe Space</span>
    </div>
  );
};

export default SafeSpaceButton;
