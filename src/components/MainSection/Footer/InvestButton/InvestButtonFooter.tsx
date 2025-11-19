import { useState } from "react";
import "./InvestButton.css";
import investImg from "./imgInvest.png";
import { useNavigate } from "react-router-dom";

function InvestButtonFooter() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/invest-page-section");
  };

  return (
    <button onClick={handleNavigate} className="invest-img">
      <img src={investImg} alt="Invest" />
    </button>
  );
}

export default InvestButtonFooter;
