import React from "react";
import "./TokenContainer.css";

type Data = {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  ath: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  market_cap: number;
  id?: string;
};

function TokenContainer({ image, symbol, current_price }: Data) {
  return (
    <div className="pair-row">
      <div className="pair-symbol">
        <span className="star">★</span>
        <img src={image} alt="btc" className="pair-icon" />
        <span className="symbol-text">{symbol.toUpperCase()}/USDT</span>
        <span className="tag">Spot</span>
      </div>

      <div className="pair-last-price">{current_price.toFixed(2)}$</div>

      <div className="pair-change positive">+1.50%</div>

      <div className="pair-funding">-0.02%</div>
    </div>
  );
}

export default TokenContainer;
