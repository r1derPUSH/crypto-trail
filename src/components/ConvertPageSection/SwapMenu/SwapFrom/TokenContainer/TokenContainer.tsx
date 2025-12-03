import React, { useEffect } from "react";
import "./TokenContainer.css";

type Data = {
  name?: string;
  ath?: number;
  high_24h?: number;
  low_24h?: number;
  price_change_24h?: number;
  market_cap?: number;

  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  setCurrentSwapFromToken: any;
  setIsOpen: any;
  id?: string;
};

function TokenContainer({
  image,
  symbol,
  current_price,
  price_change_percentage_24h,
  setIsOpen,
  setCurrentSwapFromToken,
}: Data) {
  // fix later
  const handleSwapFromToken = () => {
    setCurrentSwapFromToken(symbol);
    setIsOpen(false);
  };

  return (
    <button onClick={handleSwapFromToken} className="token-container">
      <div className="pair-row">
        <div className="pair-symbol">
          <span className="star">★</span>
          <img src={image} alt="btc" className="pair-icon" />
          <span className="symbol-text">{symbol.toUpperCase()}/USDT</span>
          <span className="tag">Spot</span>
        </div>

        <div className="pair-last-price">{current_price.toFixed(2)}$</div>

        <div className="pair-change positive">+1.50%</div>

        <div className="pair-funding">
          {price_change_percentage_24h?.toFixed(2)}%
        </div>
      </div>
    </button>
  );
}

export default TokenContainer;
