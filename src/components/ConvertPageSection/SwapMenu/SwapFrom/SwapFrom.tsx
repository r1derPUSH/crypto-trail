import "./SwapFrom.css";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import ethereumImg from "../../Convert/imgs/XTVCETH--600.png";
import TokenContainer from "./TokenContainer/TokenContainer";
import type { Coin } from "../../../../types/coin";
import { useEffect } from "react";
import type { Symbol } from "../../../../types/symbol";

function SwapFrom({
  coins,
  inputValue,
  setInputValue,
  setInputValueTo,
  fromToken,
  setFromToken,
  fromImage,
  setFromImage,
  setFromPrice,
  fromPrice,
  toPrice,
  setActiveSide,
}: {
  coins: Coin[];
  inputValue?: string;
  setInputValue: (v: string) => void;
  setInputValueTo: (v: string) => void;
  fromToken: string;
  setFromToken: (v: string) => void;
  fromImage: string;
  setFromImage: (v: string) => void;
  fromPrice: number;
  toPrice: number;
  setActiveSide: any;
  setFromPrice: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = coins.filter((item: Symbol) =>
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

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
    setActiveSide("from");
    setInputValue(e.target.value);
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
          <span className="from-span-text">From</span>
          <input
            onChange={handleChangePrice}
            value={inputValue}
            type="number"
            min={0}
            className="from-amount-input"
            placeholder="0"
          />
          <span className="price-in-usd">${fromPrice?.toFixed(2)}</span>
        </div>
      </div>
      <div className="dropbox-of-coins">
        <button onClick={handleOpen} className="dropbox-menu-inactive">
          {fromImage ? (
            <img src={fromImage} className="coin-img" alt={fromToken} />
          ) : (
            <img src={ethereumImg} className="coin-img" alt="ETH" />
          )}
          <span className="coin-name">{fromToken.toUpperCase()}</span>
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
                {filtered.map((item: any) => (
                  <TokenContainer
                    key={item.id ?? item.symbol}
                    image={item.image}
                    symbol={item.symbol}
                    current_price={item.current_price}
                    price_change_percentage_24h={
                      item.price_change_percentage_24h
                    }
                    setIsOpen={setIsOpen}
                    setToken={setFromToken}
                    setImage={setFromImage}
                    setPrice={setFromPrice}
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

export default SwapFrom;
