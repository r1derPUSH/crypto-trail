import { useNavigate } from "react-router-dom";
import "./CoinHolder.css";

type CoinHolder = {
  shortName: string;
  price: number;
  image: string;
};

function CoinHolder({ shortName, price, image, setTokenInfo }: CoinHolder) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    setTokenInfo({
      shortName: shortName,
      price: price,
      image: image,
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
