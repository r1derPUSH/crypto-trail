// react
import { useEffect, useMemo, useState } from "react";

// ui / icons
import { FaAngleDown } from "react-icons/fa";

// components
import TokenContainer from "../swap-from/token-container/TokenContainer";

// assets & styles
import ethereumImg from "../../convert/imgs/XTVCETH--600.png";
import "./SwapTo.css";

// types
import type { Coin } from "../../../../types/coin";

function SwapTo({
  coins,
  inputValueTo,
  setInputValueTo,
  toToken,
  setToToken,
  toImage,
  setToImage,
  toPrice,
  setToPrice,
  setActiveSide,
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
  setActiveSide: (side: "from" | "to") => void;
  toPrice: number;
  setToPrice: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return coins.filter((item: Coin) => item.symbol.toLowerCase().includes(q));
  }, [coins, search]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveSide("to");
    setInputValueTo(e.target.value);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                <button type="button" onClick={() => setIsOpen(false)}>
                  X
                </button>
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
                {filtered.map((item: Coin) => (
                  <TokenContainer
                    key={item.id ?? item.symbol}
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
