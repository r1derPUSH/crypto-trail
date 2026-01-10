import "./HistoryItem.css";
import Footer from "../../MainSection/Footer/Footer";
import Header from "../../MainSection/Home/Header/Header";
import { useCoins } from "../../../hooks/useCoins";

function HistoryItem({ invests, setInvests }: any) {
  const { coins } = useCoins();

  const findCoin = (name: string) =>
    coins.find((coin) => coin.name.toLowerCase() === name.toLowerCase());

  return (
    <div className="container">
      <Header />

      {invests.map((item: any) => {
        const coin = findCoin(item.name);
        const currentPrice = coin?.current_price ?? item.buyPrice;

        const investedValue = item.investedValue;
        const tokenAmount = item.tokenAmount;

        if (
          typeof investedValue !== "number" ||
          typeof tokenAmount !== "number"
        ) {
          return null;
        }

        const currentValue = tokenAmount * currentPrice;
        const currentProfit = currentValue - investedValue;

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
                  setInvests((prev: any) =>
                    prev.filter((it: any) => it.id !== item.id)
                  )
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

            <div className="creation-date">
              <span>{item.time}</span>
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}

export default HistoryItem;
