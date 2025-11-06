import React from "react";
import "./ConvertPage.css";
import swapImg from "./imgs/swap-img.png";
import { useNavigate } from "react-router-dom";

function ConvertPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="convert-page">
      <div className="convert-header-section">
        <img src={swapImg} alt="Swap" />
        <span className="main-convert-text">Crypto Trail</span>
        <span className="sub-convert-text">Convert</span>
      </div>
      <div className="convert-section">
        <div className="convert-from">Select Coin</div>
        <div className="convert-to">Select value</div>
      </div>
      <button className="convert-btn">Convert</button>
      <span className="convert-finalText">
        Instant convertion with live rates
      </span>
      <button className="back-home-btn" onClick={handleNavigate}>
        Back to home
      </button>
    </div>
  );
}

export default ConvertPage;
