import React from "react";
import "./HomeButton.css";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <button onClick={handleNavigate} className="home-button">
      <span>Home</span>
    </button>
  );
}

export default HomeButton;
