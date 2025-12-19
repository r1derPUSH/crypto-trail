import "./ConvertPage.css";
import swapImg from "./imgs/swap-img.png";
import { useNavigate } from "react-router-dom";
import SwapFrom from "../SwapMenu/SwapFrom/SwapFrom";
import SwapTo from "../SwapMenu/SwapTo/SwapTo";
import { useState, useEffect } from "react";
import Footer from "../../MainSection/Footer/Footer";
import { useCoins } from "../../../hooks/useCoins";

const IMG_DEFAULT =
  "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661";

function ConvertPage() {
  const { coins } = useCoins();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValueTo, setInputValueTo] = useState<string>("");
  const [order, setOrder] = useState(true);

  const [timeOfSwap, setTimeOfSwap] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);

  // # 1

  const [fromPrice, setFromPrice] = useState<number>(1);
  const [fromToken, setFromToken] = useState("USDT");
  const [fromImage, setFromImage] = useState(IMG_DEFAULT);

  // #2

  const [toPrice, setToPrice] = useState<number>(1);
  const [toToken, setToToken] = useState("USDT");
  const [toImage, setToImage] = useState(IMG_DEFAULT);

  function getCurrentDateTime() {
    const now = new Date();

    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${month}.${day}.${year} | ${hours}:${minutes}`;
  }

  useEffect(() => {
    setTimeOfSwap(getCurrentDateTime());
    console.log(timeOfSwap);
  }, [isSwapped]);

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleNavigateWallet = () => {
    navigate("/wallet-section");
  };

  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleSwap = () => {
    if (state !== "idle") return;
    setIsSwapped((prev) => !prev);
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
                setToPrice={setToPrice}
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
                setToPrice={setToPrice}
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
        <button onClick={handleSwap} className={`convert-btn ${state}`}>
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
