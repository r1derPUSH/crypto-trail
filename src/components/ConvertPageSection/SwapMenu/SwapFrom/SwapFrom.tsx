import React from "react";
import "./SwapFrom.css";

function SwapFrom() {
  return (
    <div className="swap-container">
      <div className="input-price-container">
        <div className="input-price-flexbox">
          <span className="from-span-text">From</span>
          <input type="text" className="from-amount-input" placeholder="0" />
          <span className="price-in-usd">$76.1</span>
        </div>
      </div>
      <div className="dropbox-of-coins-container">
        <div className="dropbox-of-coins">
          <button className="dropbox-menu-inactive">
            <img src="" alt="ETH" />
            <span>ETH</span>
            <img src="" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwapFrom;
