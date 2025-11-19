import "./InvestPage.css";
import crystalImg from "./imgs/crystal-invest.png";
import CoinHolder from "./CoinHolder/CoinHolder";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Data = {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  id?: string;
};

function InvestPage() {
  const [data, setData] = useState<Data[]>([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigate();

  const handleNavigate = () => {
    navigation("/");
  };

  async function getData() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const response = await res.json();
      setData(response);
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const filtered = data.filter((item) => item.symbol.includes(search));

  return (
    <div className="invest-body">
      <div className="invest-header">
        <img src={crystalImg} alt="Diamond" />
        <span className="main-invest-text">Crypto Trail</span>
        <span className="sub-invest-text">Invest</span>
      </div>

      <div className="invest-inputs">
        <input
          type="text"
          className="search-coin-input"
          placeholder="Enter coin"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-invest-btn">Search</button>
      </div>

      <div className="invest-coins-container">
        <div className="coins-holder">
          <ul>
            {filtered.map((item) => (
              <CoinHolder
                shortName={item.symbol}
                price={item.current_price}
                image={item.image}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="back-buttons">
        <button className="back-home-btn" onClick={handleNavigate}>
          Back to Home
        </button>
        <button className="back-portfolio-btn">Back to Portfolio</button>
      </div>
    </div>
  );
}

export default InvestPage;
