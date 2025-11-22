import "./InvestPage.css";
import crystalImg from "./imgs/crystal-invest.png";
import CoinHolder from "./CoinHolder/CoinHolder";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../MainSection/Footer/Footer";

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

function InvestPage({ setTokenInfo }: { setTokenInfo: any }) {
  const [data, setData] = useState<Data[]>([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const handleNavigateHome = () => {
    navigation("/");
  };

  const hanldeNavigateWallet = () => {
    navigation("/wallet-section");
  };

  async function getData() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const response = await res.json();
      setData(response);
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
          {filtered.map((item) => (
            <CoinHolder
              setTokenInfo={setTokenInfo}
              shortName={item.symbol}
              name={item.name}
              priceChange24H={item.price_change_24h}
              price_change_24H_in_percentage={item.price_change_percentage_24h}
              ath={item.ath}
              ath_today={item.high_24h}
              atl_today={item.low_24h}
              market_cap={item.market_cap}
              price={item.current_price}
              image={item.image}
              key={item.id}
            />
          ))}
        </div>
      </div>

      <div className="back-buttons">
        <button className="back-home-btn" onClick={handleNavigateHome}>
          Back to Home
        </button>
        <button onClick={hanldeNavigateWallet} className="back-portfolio-btn">
          Back to Portfolio
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default InvestPage;
