import "./InvestPage.css";
import crystalImg from "./imgs/crystal-invest.png";
import CoinHolder from "./CoinHolder/CoinHolder";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Data = {
  symbol: string;
  image: string;
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
      console.log(response);
      console.log(data);
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // const filtered = data

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
          <CoinHolder />
          <CoinHolder />
          <CoinHolder />
          <CoinHolder />
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
