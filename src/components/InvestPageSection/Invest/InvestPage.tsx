import React from "react";
import "./InvestPage.css";
import crystalImg from "./imgs/crystal-invest.png";

function InvestPage() {
  return (
    <div className="invest-body">
      <div className="invest-header">
        <img src={crystalImg} alt="Diamond" />
        <span className="main-invest-text">Crypto Trail</span>
        <span className="sub-invest-text">Invest</span>
      </div>
      <div className="invest-inputs">
        <input
          type="text"
          className="search-coin-input"
          placeholder="Enter coin"
        />
        <button className="search-invest-btn">Search</button>
      </div>
      <div className="invest-coins-container">
        <div className="coins-holder">
          <div className="coin-card">
            <img src="/btc-icon.png" alt="BTC" />
            <span className="coin-name">Bitcoin (BTC)</span>
            <span className="coin-price">$64,200</span>
          </div>
          <div className="coin-card">
            <img src="/eth-icon.png" alt="ETH" />
            <span className="coin-name">Ethereum (ETH)</span>
            <span className="coin-price">$3,200</span>
          </div>
        </div>
      </div>
      <div className="back-buttons">
        <button className="back-home-btn">Back to Home</button>
        <button className="back-portfolio-btn">Back to Portfolio</button>
      </div>
    </div>
  );
}

export default InvestPage;
