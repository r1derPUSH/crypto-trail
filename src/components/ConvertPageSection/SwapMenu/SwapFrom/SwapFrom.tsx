import React, { useState } from "react";
import "./SwapFrom.css";
import { FaAngleDown } from "react-icons/fa";
import ethereumImg from "../../Convert/imgs/XTVCETH--600.png";

function SwapFrom() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const coins = [
    { name: "BTC", icon: "₿" },
    { name: "ETH", icon: "♦" },
    { name: "ARB", icon: "◎" },
    { name: "SOL", icon: "⚡" },
    { name: "AVAX", icon: "▲" },
    { name: "BNB", icon: "◉" },
  ];

  const filtered = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="swap-container">
      <div className="input-price-container">
        <div className="input-price-flexbox">
          <span className="from-span-text">From</span>
          <input type="text" className="from-amount-input" placeholder="0" />
          <span className="price-in-usd">$76.1</span>
        </div>
      </div>
      {/* <div className="dropbox-parent"> */}
      <div className="dropbox-of-coins-container">
        <div className="dropbox-of-coins">
          <button onClick={handleOpen} className="dropbox-menu-inactive">
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
        {isOpen && (
          <div className="overlay" onClick={() => setIsOpen((prev) => !prev)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <span>Select a token</span>
                <button onClick={() => setIsOpen(false)}>X</button>
              </div>
              <div className="input-and-coins">
                <input
                  className="search"
                  placeholder="Search token"
                  onChange={handleSearch}
                />
                <div className="recent-coins"></div>
              </div>
              <div className="token-list">
                {filtered.map((item) => (
                  <div className="token-container">{item.name}</div>
                ))}
                ;
              </div>
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}

export default SwapFrom;
