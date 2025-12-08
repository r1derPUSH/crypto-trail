import "./ConvertPage.css";
import swapImg from "./imgs/swap-img.png";
import { useNavigate } from "react-router-dom";
import SwapFrom from "../SwapMenu/SwapFrom/SwapFrom";
import SwapTo from "../SwapMenu/SwapTo/SwapTo";
import { useState, useEffect } from "react";
import Footer from "../../MainSection/Footer/Footer";

function ConvertPage() {
  const [coins, setCoins] = useState<any[]>([]);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<number>();
  const [inputValueTo, setInputValueTo] = useState<number>();
  const [order, setOrder] = useState(true);

  // # 1

  const [tokenSwapFromPrice, setTokenSwapFromPrice] = useState<number>();
  const [currentSwapFromToken, setCurrentSwapFromToken] = useState("ETH");

  // #2

  const [tokenPrice, setTokenPrice] = useState<number>();
  const [currentToken, setCurrentToken] = useState("ETH");

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
      const response = await res.json();
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

  return (
    <div className="convert-page">
      <div className="flex-container-convert-page">
        <div className="convert-header-section">
          <img src={swapImg} alt="Swap" />
          <span className="main-convert-text">Crypto Trail</span>
          <span className="sub-convert-text">Convert</span>
        </div>
        <div className="convert-section">
          <SwapFrom
            tokenSwapFromPrice={tokenSwapFromPrice}
            currentSwapFromToken={currentSwapFromToken}
            tokenPrice={tokenPrice}
            setTokenSwapFromPrice={setTokenSwapFromPrice}
            setCurrentSwapFromToken={setCurrentSwapFromToken}
            coins={coins}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setInputValueTo={setInputValueTo}
          />
          <button onClick={() => setOrder((prev) => !prev)}>Swap</button>
          <SwapTo
            currentToken={currentToken}
            tokenPrice={tokenPrice}
            setTokenPrice={setTokenPrice}
            setCurrentToken={setCurrentToken}
            tokenSwapFromPrice={tokenSwapFromPrice}
            coins={coins}
            setInputValueTo={setInputValueTo}
            setInputValue={setInputValue}
            inputValueTo={inputValueTo}
          />
        </div>
      </div>
      <button className="convert-btn">Convert</button>
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
