import React from "react";
import "./CoinHolder.css";

function CoinHolder() {
  return (
    <div className="coin-card">
      <img src="/btc-icon.png" alt="BTC" />
      <span className="coin-name">Bitcoin (BTC)</span>
      <span className="coin-price">$64,200</span>
      <button className="invest-coin-card-btn">Invest</button>
    </div>
  );
}

export default CoinHolder;
