import { useNavigate } from "react-router-dom";
import "./CoinHolder.css";

type CoinHolder = {
  shortName: string;
  price: number;
  image: string;
  name: string;
  priceChange24H: number;
  price_change_24H_in_percentage: number;
  ath: number;
  ath_today: number;
  market_cap: number;
  atl_today: number;
  setTokenInfo: any;
};

function CoinHolder({
  name,
  priceChange24H,
  price_change_24H_in_percentage,
  ath,
  ath_today,
  atl_today,
  shortName,
  market_cap,
  price,
  image,
  setTokenInfo,
}: CoinHolder) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    setTokenInfo({
      name,
      priceChange24H,
      price_change_24H_in_percentage,
      ath,
      ath_today,
      atl_today,
      shortName,
      market_cap,
      price,
      image,
    });
    navigate("/invest-unique-token");
  };

  return (
    <div className="coin-card">
      <img src={image} alt="BTC" />
      <span className="coin-name">{shortName}</span>
      <span className="coin-price">${price}</span>
      <button onClick={handleNavigate} className="invest-coin-card-btn">
        Invest
      </button>
    </div>
  );
}

export default CoinHolder;
