import React from "react";
import "./SwapFrom.css";
import { FaAngleDown } from "react-icons/fa";
import ethereumImg from "../../Convert/imgs/XTVCETH--600.png";

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
            <img src={ethereumImg} className="coin-img" alt="ETH" />
            <span className="coin-name">ETH</span>
            <FaAngleDown
              style={{
                color: "#9AA0A6",
                fontSize: "1.2rem",
                backgroundColor: "rgba(0,0,0,0.05)",
                borderRadius: "6px",
                padding: "4px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwapFrom;
