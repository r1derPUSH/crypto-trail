import React from "react";
import "./InvestPage.css";
import crystalImg from "./imgs/crystal-invest.png";

function InvestPage() {
  return (
    <div className="invest-body">
      <div className="invest-header">
        <img src={crystalImg} alt="Diamond" />
        <span>Crypto Trail</span>
        <span>Invest</span>
      </div>
      <div className="invest-inputs"></div>
      <div className="invest-button"></div>
      <div className="back-buttons"></div>
    </div>
  );
}

export default InvestPage;
