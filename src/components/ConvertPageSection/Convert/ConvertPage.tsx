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
  const [inputValue, setInputValue] = useState<number>();
  const [inputValueTo, setInputValueTo] = useState<number>();
  const [order, setOrder] = useState(true);

  // # 1

  // coins[1].current_price
  const [fromToken, setFromToken] = useState("USDT");
  const [fromImage, setFromImage] = useState(IMG_DEFAULT);
  const fromPrice =
    coins.find((c) => c.symbol.toUpperCase() === fromToken)?.current_price ?? 0;
  // #2

  const [toToken, setToToken] = useState("USDT");
  const [toImage, setToImage] = useState(IMG_DEFAULT);
  const toPrice =
    coins.find((c) => c.symbol.toUpperCase() === toToken)?.current_price ?? 0;

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
                key={"from-first"}
                tokenSwapFromPrice={fromPrice}
                currentSwapFromToken={fromToken}
                tokenPrice={toPrice}
                setCurrentSwapFromToken={setFromToken}
                currentSfImage={fromImage}
                currentImage={toImage}
                setCurrentSfImage={setFromImage}
                setCurrentImage={setToImage}
                coins={coins}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setInputValueTo={setInputValueTo}
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
                key={"to-second"}
                currentToken={toToken}
                tokenPrice={toPrice}
                setCurrentToken={setToToken}
                currentSfImage={fromImage}
                currentImage={toImage}
                setCurrentSfImage={setFromImage}
                setCurrentImage={setToImage}
                tokenSwapFromPrice={fromPrice}
                coins={coins}
                setInputValueTo={setInputValueTo}
                setInputValue={setInputValue}
                inputValueTo={inputValueTo}
              />
            </>
          ) : (
            <>
              <SwapTo
                key={"to-first"}
                currentToken={toToken}
                tokenPrice={toPrice}
                setCurrentToken={setToToken}
                currentSfImage={fromImage}
                currentImage={toImage}
                setCurrentSfImage={setFromImage}
                setCurrentImage={setToImage}
                tokenSwapFromPrice={fromPrice}
                coins={coins}
                setInputValueTo={setInputValueTo}
                setInputValue={setInputValue}
                inputValueTo={inputValueTo}
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
                key={"from-second"}
                tokenSwapFromPrice={fromPrice}
                currentSwapFromToken={fromToken}
                tokenPrice={toPrice}
                setCurrentSwapFromToken={setFromToken}
                currentSfImage={fromImage}
                currentImage={toImage}
                setCurrentSfImage={setFromImage}
                setCurrentImage={setToImage}
                coins={coins}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setInputValueTo={setInputValueTo}
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
