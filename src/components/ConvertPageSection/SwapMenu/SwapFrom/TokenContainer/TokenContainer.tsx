import "./TokenContainer.css";

type TokenContainerProps = {
  image: string;
  symbol: string;
  current_price: number | null;
  price_change_percentage_24h: number | null;

  setIsOpen: (v: boolean) => void;
  setToken: (symbol: string) => void;
  setImage: (img: string) => void;
  setFromPrice?: (price: number) => void;
  setPrice: any;
};

function TokenContainer({
  image,
  symbol,
  current_price,
  price_change_percentage_24h,
  setIsOpen,
  setToken,
  setImage,
  setPrice,
}: TokenContainerProps) {
  const handleSelect = () => {
    setToken(symbol);
    setImage(image);

    if (setPrice && current_price !== null) {
      setPrice(current_price);
    }

    setIsOpen(false);
  };

  return (
    <button onClick={handleSelect} className="token-container">
      <div className="pair-row">
        <div className="pair-symbol">
          <span className="star">★</span>
          <img src={image} alt={symbol} className="pair-icon" />
          <span className="symbol-text">{symbol.toUpperCase()}/USDT</span>
          <span className="tag">Spot</span>
        </div>

        <div className="pair-last-price">
          ${current_price !== null ? current_price.toFixed(2) : "0.00"}
        </div>

        <div
          className={`pair-change ${
            price_change_percentage_24h !== null &&
            price_change_percentage_24h >= 0
              ? "positive"
              : "negative"
          }`}
        >
          {price_change_percentage_24h !== null
            ? price_change_percentage_24h.toFixed(2)
            : "0.00"}
          %
        </div>
      </div>
    </button>
  );
}

export default TokenContainer;
