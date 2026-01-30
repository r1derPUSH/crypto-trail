import "./HistoryItem.css";
import Footer from "../../MainSection/Footer/Footer";
import Header from "../../MainSection/Home/Header/Header";
import { useCoins } from "../../../context/CoinsContext";
import type { InvestItem } from "../../../types/props";

type Props = {
  invests: InvestItem[];
  setInvests: React.Dispatch<React.SetStateAction<InvestItem[]>>;
};

function HistoryItem({ invests, setInvests }: Props) {
  const { coins } = useCoins();

  const findCoin = (name: string) =>
    coins.find((coin) => coin.name.toLowerCase() === name.toLowerCase());

  return (
    <div className="container">
      <Header />

      {invests.map((item) => {
        const coin = findCoin(item.name);
        const currentPrice = coin?.current_price ?? item.buyPrice;

        const currentValue = item.tokenAmount * currentPrice;
        const currentProfit = currentValue - item.investedValue;

        return (
          <div key={item.id} className="invest-details">
            <div className="top-row">
              <div className="token-info">
                <img src={item.tokenImage} alt={item.name} />
                <span className="token-name">{item.name}</span>
              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  setInvests((prev) => prev.filter((it) => it.id !== item.id))
                }
              >
                ✕
              </button>
            </div>

            <div className="current-profit">
              <span className={currentProfit >= 0 ? "positive" : "negative"}>
                {currentProfit >= 0 ? "+" : ""}
                {currentProfit.toFixed(2)}$
              </span>
            </div>

            {item.time && (
              <div className="creation-date">
                <span>{item.time}</span>
              </div>
            )}
          </div>
        );
      })}

      <Footer />
    </div>
  );
}

export default HistoryItem;
