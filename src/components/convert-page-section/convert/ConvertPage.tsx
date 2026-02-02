// react
import { useEffect, useState } from "react";

// router
import { useNavigate } from "react-router-dom";

// context / logic
import { useCoins } from "../../../context/CoinsContext";
import { addSwapToHistory } from "../../../functions/swapHistoryFn";

// layout
import Header from "../../main-section/home/header/Header";
import Footer from "../../main-section/footer/Footer";

// ui
import SwapFrom from "../swap-menu/swap-from/SwapFrom";
import SwapTo from "../swap-menu/swap-to/SwapTo";

// assets & styles
import { getCurrentDateTime } from "../../../functions/currentTime";
import swapImg from "./imgs/swap-img.png";
import "./ConvertPage.css";

const IMG_DEFAULT =
  "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661";

function ConvertPage() {
  const { coins } = useCoins();
  const navigate = useNavigate();
  // input values
  const [inputValue, setInputValue] = useState("");
  const [inputValueTo, setInputValueTo] = useState("");

  // ui state
  const [order, setOrder] = useState(true);
  const [activeSide, setActiveSide] = useState<"from" | "to">("from");

  // # 1

  const [fromPrice, setFromPrice] = useState<number>(1);
  const [fromToken, setFromToken] = useState("USDT");
  const [fromImage, setFromImage] = useState(IMG_DEFAULT);

  // #2

  const [toPrice, setToPrice] = useState<number>(1);
  const [toToken, setToToken] = useState("USDT");
  const [toImage, setToImage] = useState(IMG_DEFAULT);

  useEffect(() => {
    if (!fromPrice || !toPrice) return;

    if (activeSide === "from") {
      if (inputValue === "") {
        setInputValueTo("");
        return;
      }

      const result = ((Number(inputValue) * fromPrice) / toPrice).toFixed(2);
      setInputValueTo(result);
    }

    if (activeSide === "to") {
      if (inputValueTo === "") {
        setInputValue("");
        return;
      }

      const result = ((Number(inputValueTo) * toPrice) / fromPrice).toFixed(2);
      setInputValue(result);
    }
  }, [inputValue, inputValueTo, fromPrice, toPrice, activeSide]);

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleNavigateWallet = () => {
    navigate("/wallet-section");
  };

  const handleSwapOrder = () => {
    setOrder((prev) => !prev);
    setActiveSide((prev) => (prev === "from" ? "to" : "from"));
  };

  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleSwap = () => {
    if (state !== "idle") return;
    setState("loading");
    setTimeout(() => {
      setState("success");
      setTimeout(() => {
        setState("idle");
      }, 1000);
    }, 900);

    addSwapToHistory({
      from: fromToken,
      to: toToken,
      time: getCurrentDateTime(),
      inputValue,
      inputValueTo,
      fromImage,
      toImage,
    });
  };

  return (
    <>
      <Header />
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
                  setActiveSide={setActiveSide}
                />

                <div className="swap-btn" onClick={handleSwapOrder}>
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
                  setActiveSide={setActiveSide}
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
                  setActiveSide={setActiveSide}
                />

                <div className="swap-btn" onClick={handleSwapOrder}>
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
                  setActiveSide={setActiveSide}
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
    </>
  );
}

export default ConvertPage;
