import "./SwapFrom.css";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import ethereumImg from "../../Convert/imgs/XTVCETH--600.png";
import TokenContainer from "./TokenContainer/TokenContainer";

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
  current_swapToToken: string;
};

type Symbol = {
  symbol: string;
};

function SwapFrom({
  coins,
  inputValue,
  setInputValue,
  setInputValueTo,
  tokenSwapFromPrice,
  currentSwapFromToken,
  fromPrice,
  setCurrentSwapFromToken,
  currentSfImage,
  setCurrentSfImage,
  tokenPrice,
}: Data & Record<string, any>) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = coins.filter((item: Symbol) =>
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePrice = (e: any) => {
    let value = e.target.value;

    if (value.length > 1 && value.startsWith("0")) {
      value = value.replace(/^0+/, "");
    }
    setInputValue(value);
    setInputValueTo(((value * fromPrice) / tokenPrice).toFixed(2));
  };

  // Futures updates:
  // update bnb -> trx swap for example,

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="swap-container">
      <div className="input-price-container">
        <div className="input-price-flexbox">
          <span className="from-span-text">From</span>
          <input
            onChange={handleChangePrice}
            value={inputValue}
            type="number"
            min={0}
            className="from-amount-input"
            placeholder="0"
          />
          <span className="price-in-usd">
            ${tokenSwapFromPrice?.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="dropbox-of-coins">
        <button onClick={handleOpen} className="dropbox-menu-inactive">
          {currentSfImage ? (
            <img
              src={currentSfImage}
              className="coin-img"
              alt={currentSwapFromToken}
            />
          ) : (
            <img src={ethereumImg} className="coin-img" alt="ETH" />
          )}
          <span className="coin-name">
            {currentSwapFromToken.toUpperCase()}
          </span>
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
                {filtered.map(
                  (item: Data & Record<string, any>, index: number) => (
                    <TokenContainer
                      key={index}
                      setIsOpen={setIsOpen}
                      setCurrentSwapFromToken={setCurrentSwapFromToken}
                      setCurrentImage={setCurrentSfImage}
                      image={item.image}
                      symbol={item.symbol}
                      current_price={item.current_price}
                      price_change_percentage_24h={
                        item.price_change_percentage_24h
                      }
                    />
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SwapFrom;
