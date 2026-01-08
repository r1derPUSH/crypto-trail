import "./RecentInvestComponent.css";
import { useCoins } from "../../../../../hooks/useCoins";

function RecentInvestComponent({ invests, setInvests }: any) {
  const { coins } = useCoins();

  const closeCase = (id: number) => {
    setInvests((prev: any[]) => prev.filter((item) => item.id !== id));
  };

  const findCoin = (name: string) =>
    coins.find((coin) => coin.name.toLowerCase() === name.toLowerCase());

  return (
    <div className="recent-invests-container">
      {invests.map((item: any) => {
        const coin = findCoin(item.name);

        const currentPrice = coin?.current_price ?? item.buyPrice;

        const multiplier = currentPrice / item.buyPrice;
        const currentValue = item.totalValue * multiplier;
        const currentProfit = currentValue - item.totalValue;
        const currentPercent = (currentProfit / item.totalValue) * 100;

        const progressToTarget = Math.min(
          (currentPrice / item.targetPrice) * 100,
          100
        );

        return (
          <div key={item.id} className="recent-invest-card">
            <div className="name">
              <div className="flex-name-container">
                <span>Name:</span>
                <div className="flex-img-name-container">
                  <img src={item.tokenImage} alt="img-coin" />
                  <span>{item.name}</span>
                </div>
              </div>
            </div>

            <div className="start-value">
              <span>Start Value:</span>
              <span>{item.totalValue.toFixed(2)}$</span>
              <span>Buy Price:</span>
              <span>{item.buyPrice}$</span>
            </div>

            <div className="current-value">
              <span>Current Value:</span>
              <span className="live-update">{currentValue.toFixed(2)}$</span>
              <span>Current Price:</span>
              <span key={currentPrice} className="live-update">
                {currentPrice.toFixed(2)}$
              </span>
            </div>

            <div className="current-profit-loss">
              <span>Current Profit/Loss:</span>
              <span
                className={`live-update ${
                  currentProfit >= 0 ? "positive" : "negative"
                }`}
              >
                {currentProfit >= 0 ? "+" : ""}
                {currentProfit.toFixed(2)}$
              </span>

              <span
                className={`live-update ${
                  currentPercent >= 0 ? "positive" : "negative"
                }`}
              >
                {currentPercent.toFixed(2)}%
              </span>
            </div>

            <div className="targetProfit">
              <span>Target Price:</span>
              <span>{item.targetPrice}$</span>
              <span>+{item.targetPriceInPercents}%</span>

              <span>Target Profit:</span>
              <span>+{item.targetProfit.toFixed(2)}$</span>
            </div>

            <div className="close-case-container">
              <button className="btn-close" onClick={() => closeCase(item.id)}>
                Close Case
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentInvestComponent;
