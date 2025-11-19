import "./CoinHolder.css";

type CoinHolder = {
  shortName: string;
  price: number;
  image: string;
};

function CoinHolder({ shortName, price, image }: CoinHolder) {
  return (
    <div className="coin-card">
      <img src={image} alt="BTC" />
      <span className="coin-name">{shortName}</span>
      <span className="coin-price">${price}</span>
      <button className="invest-coin-card-btn">Invest</button>
    </div>
  );
}

export default CoinHolder;
