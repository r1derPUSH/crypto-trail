import "./ConvertPage.css";
import swapImg from "./imgs/swap-img.png";
import { useNavigate } from "react-router-dom";
import SwapFrom from "../SwapMenu/SwapFrom/SwapFrom";
import SwapTo from "../SwapMenu/SwapTo/SwapTo";
import { useState, useEffect } from "react";
import Footer from "../../MainSection/Footer/Footer";
import type { Coin } from "../../../types/coin";

const IMG_DEFAULT =
  "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661";

function ConvertPage() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>();
  const [inputValueTo, setInputValueTo] = useState<string>();
  const [order, setOrder] = useState(true);

  // # 1

  const [fromPrice, setFromPrice] = useState<number>(1);
  // coins[1].current_price
  const [fromToken, setFromToken] = useState("USDT");
  const [fromImage, setFromImage] = useState(IMG_DEFAULT);

  // #2

  const [toPrice, setToPrice] = useState<number>(1);
  const [toToken, setToToken] = useState("USDT");
  const [toImage, setToImage] = useState(IMG_DEFAULT);

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleNavigateWallet = () => {
    navigate("/wallet-section");
  };

  async function getData() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const response: Coin[] = await res.json();
      setCoins(response);
      console.log(response);
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // functional for loader P.S: optimise to single components later

  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = () => {
    if (state !== "idle") return;

    setState("loading");

    setTimeout(() => {
      setState("success");
      setTimeout(() => {
        setState("idle");
      }, 1000);
    }, 900);
  };

  return (
    <div className="convert-page">
      <div className="flex-container-convert-page">
        <div className="convert-header-section">
          <img src={swapImg} alt="Swap" />
          <span className="main-convert-text">Crypto Trail</span>
          <span className="sub-convert-text">Convert</span>
        </div>
        <div className="convert-section">
          {order ? (
            <>
              <SwapFrom
                setFromPrice={setFromPrice}
                coins={coins}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setInputValueTo={setInputValueTo}
                fromPrice={fromPrice}
                fromToken={fromToken}
                setFromToken={setFromToken}
                fromImage={fromImage}
                setFromImage={setFromImage}
                toPrice={toPrice}
              />

              <div
                className="swap-btn"
                onClick={() => {
                  setOrder((prev) => !prev);
                }}
              >
                ⇅
              </div>

              <SwapTo
                coins={coins}
                inputValueTo={inputValueTo}
                setInputValueTo={setInputValueTo}
                setInputValue={setInputValue}
                toPrice={toPrice}
                toToken={toToken}
                setToToken={setToToken}
                toImage={toImage}
                setToImage={setToImage}
                fromPrice={fromPrice}
              />
            </>
          ) : (
            <>
              <SwapTo
                coins={coins}
                inputValueTo={inputValueTo}
                setInputValueTo={setInputValueTo}
                setInputValue={setInputValue}
                toPrice={toPrice}
                toToken={toToken}
                setToToken={setToToken}
                toImage={toImage}
                setToImage={setToImage}
                fromPrice={fromPrice}
              />

              <div
                className="swap-btn"
                onClick={() => {
                  setOrder((prev) => !prev);
                }}
              >
                ⇅
              </div>

              <SwapFrom
                setFromPrice={setFromPrice}
                coins={coins}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setInputValueTo={setInputValueTo}
                fromPrice={fromPrice}
                fromToken={fromToken}
                setFromToken={setFromToken}
                fromImage={fromImage}
                setFromImage={setFromImage}
                toPrice={toPrice}
              />
            </>
          )}
        </div>
      </div>
      <div className="flex-convert-and-history-buttons-container">
        <button onClick={handleClick} className={`convert-btn ${state}`}>
          {state === "idle" && "Convert"}
          {state === "loading" && <span className="loader"></span>}
          {state === "success" && <span className="success-check">✔</span>}
        </button>
        <button
          className="history-btn"
          onClick={() => navigate("/convert-section-history")}
        >
          <span className="icon">📜</span>
          History
        </button>
      </div>
      <span className="convert-finalText">
        Instant convertion with live rates
      </span>
      <button className="back-home-btn" onClick={handleNavigateHome}>
        Back to Home
      </button>
      <button className="back-home-btn" onClick={handleNavigateWallet}>
        Back to Wallet
      </button>
      <Footer />
    </div>
  );
}

export default ConvertPage;
