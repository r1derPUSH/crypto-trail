import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import ethereumImg from "../../Convert/imgs/XTVCETH--600.png";
import "../SwapFrom/SwapFrom.css";
import TokenContainer from "../SwapFrom/TokenContainer/TokenContainer";

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
};

type Symbol = {
  symbol: string;
};

function SwapTo({ coins }: Data & Record<string, any>) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const filtered = coins.filter((item: Symbol) =>
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="swap-container">
      <div className="input-price-container">
        <div className="input-price-flexbox">
          <span className="from-span-text">To</span>
          <input type="text" className="from-amount-input" placeholder="0" />
          <span className="price-in-usd">$76.1</span>
        </div>
      </div>
      <div className="dropbox-of-coins">
        <button onClick={handleOpen} className="dropbox-menu-inactive">
          <img src={ethereumImg} className="coin-img" alt="ETH" />
          <span className="coin-name">ETH</span>
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
      </div>
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
              {filtered.map((item: Data) => (
                <div className="token-container">
                  <TokenContainer
                    image={item.image}
                    current_price={item.current_price}
                    symbol={item.symbol}
                  />
                </div>
              ))}
              ;
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SwapTo;
