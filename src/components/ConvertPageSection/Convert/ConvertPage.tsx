import React, { useEffect, useState } from "react";
import "./ConvertPage.css";
import swapImg from "./imgs/swap-img.png";
import { useNavigate } from "react-router-dom";
import SwapFrom from "../SwapMenu/SwapFrom/SwapFrom";
import SwapTo from "../SwapMenu/SwapTo/SwapTo";

function ConvertPage() {
  const [coins, setCoins] = useState({});
  const navigate = useNavigate();
  const [handleTime, setHandleTime] = useState();

  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana"
        );
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    }

    getData();

    const interval = setInterval(getData, 25000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="convert-page">
      <div className="convert-header-section">
        <img src={swapImg} alt="Swap" />
        <span className="main-convert-text">Crypto Trail</span>
        <span className="sub-convert-text">Convert</span>
      </div>
      <div className="convert-section">
        <SwapFrom />
        <SwapTo />
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
