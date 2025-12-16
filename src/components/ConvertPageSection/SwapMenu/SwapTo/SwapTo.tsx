import "./SwapTo.css";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import ethereumImg from "../../Convert/imgs/XTVCETH--600.png";
import TokenContainer from "../SwapFrom/TokenContainer/TokenContainer";
import type { Coin } from "../../../../types/coin";

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

function SwapTo({
  coins,
  inputValueTo,
  setInputValueTo,
  setInputValue,
  toToken,
  setToToken,
  toImage,
  setToImage,
  fromPrice,
  toPrice,
  setToPrice,
}: {
  coins: Coin[];
  inputValueTo?: string;
  setInputValueTo: (v: string) => void;
  setInputValue: (v: string) => void;
  toToken: string;
  setToToken: (v: string) => void;
  toImage: string;
  setToImage: (v: string) => void;
  fromPrice: number;
  toPrice: number;
  setToPrice: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = coins.filter((item: Symbol) =>
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value || !fromPrice || !toPrice) {
      setInputValue("");
      return;
    }

    const result = ((Number(value) * toPrice) / fromPrice).toFixed(2);
    setInputValueTo(value);
    setInputValue(result);
  };

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
          <span className="from-span-text">To</span>
          <input
            onChange={handleChangePrice}
            value={inputValueTo}
            type="number"
            min={0}
            className="from-amount-input"
            placeholder="0"
          />
          <span className="price-in-usd">${toPrice?.toFixed(2)}</span>
        </div>
      </div>
      <div className="dropbox-of-coins">
        <button onClick={handleOpen} className="dropbox-menu-inactive">
          {toImage ? (
            <img src={toImage} className="coin-img" alt={toToken} />
          ) : (
            <img src={ethereumImg} className="coin-img" alt="ETH" />
          )}
          <span className="coin-name">{toToken.toUpperCase()}</span>
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
                {filtered.map((item: any) => (
                  <TokenContainer
                    key={item.id ?? item.symbol} // ← ВАЖЛИВО
                    image={item.image}
                    symbol={item.symbol}
                    current_price={item.current_price}
                    price_change_percentage_24h={
                      item.price_change_percentage_24h
                    }
                    setIsOpen={setIsOpen}
                    setToken={setToToken}
                    setImage={setToImage}
                    setPrice={setToPrice}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SwapTo;
