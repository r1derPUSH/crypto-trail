import "./InvestPage.css";
import crystalImg from "./imgs/crystal-invest.png";
import CoinHolder from "./coin-holder/CoinHolder";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../main-section/footer/Footer";
import Header from "../../main-section/home/header/Header";
import { useCoins } from "../../../context/CoinsContext";

function InvestPage({ setTokenInfo }: { setTokenInfo: any }) {
  const { coins } = useCoins();
  const [search, setSearch] = useState("");
  const navigation = useNavigate();

  const handleNavigateHome = () => {
    navigation("/");
  };

  const hanldeNavigateWallet = () => {
    navigation("/wallet-section");
  };

  const filtered = coins.filter((item) =>
    item.symbol.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Header />
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
                price_change_24H_in_percentage={
                  item.price_change_percentage_24h
                }
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
    </>
  );
}

export default InvestPage;
