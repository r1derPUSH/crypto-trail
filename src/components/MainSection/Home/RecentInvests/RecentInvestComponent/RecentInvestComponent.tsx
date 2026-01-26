import "./RecentInvestComponent.css";
import { useCoins } from "../../../../../context/CoinsContext";
import { formatPrice } from "../../../../../functions/format";

function RecentInvestComponent({ invests, setInvests, setTotalPnL }: any) {
  const { coins } = useCoins();

  const saveToHistory = (historyItem: any) => {
    const prev = JSON.parse(localStorage.getItem("investHistory") || "[]");
    localStorage.setItem(
      "investHistory",
      JSON.stringify([historyItem, ...prev]),
    );
  };

  const closeCase = (item: any) => {
    const coin = findCoin(item.name);
    const currentPrice = coin?.current_price ?? item.buyPrice;

    const img = coin?.image;

    const investedValue = item.investedValue;
    const tokenAmount = item.tokenAmount;

    const currentValue = tokenAmount * currentPrice;
    const currentProfit = currentValue - investedValue;
    const percent = (currentProfit / investedValue) * 100;

    saveToHistory({
      id: item.id,
      name: item.name,
      investedValue,
      closedValue: currentValue,
      profit: currentProfit,
      percent,
      img,
      openedAt: item.openedAt ?? null,
      closedAt: Date.now(),
      status: currentProfit >= 0 ? "profit" : "loss",
    });

    setTotalPnL((prev: any) => prev + currentProfit);

    setInvests((prev: any) => prev.filter((i: any) => i.id !== item.id));
  };

  const closeAllCases = () => {
    const prevHistory = JSON.parse(
      localStorage.getItem("investHistory") || "[]",
    );

    let totalProfit = 0;
    const newHistory = [];

    for (const item of invests) {
      const coin = findCoin(item.name);
      const currentPrice = coin?.current_price ?? item.buyPrice;

      const img = coin?.image;

      const currentValue = item.tokenAmount * currentPrice;
      const currentProfit = currentValue - item.investedValue;
      const percent = (currentProfit / item.investedValue) * 100;

      totalProfit += currentProfit;

      newHistory.push({
        id: item.id,
        name: item.name,
        investedValue: item.investedValue,
        closedValue: currentValue,
        profit: currentProfit,
        percent,
        img,
        openedAt: item.openedAt ?? null,
        closedAt: Date.now(),
        status: currentProfit >= 0 ? "profit" : "loss",
      });
    }

    localStorage.setItem(
      "investHistory",
      JSON.stringify([...newHistory, ...prevHistory]),
    );

    setTotalPnL((prev: number) => prev + totalProfit);
    setInvests([]);
  };

  const findCoin = (name: string) =>
    coins.find((coin) => coin.name.toLowerCase() === name.toLowerCase());

  return (
    <div className="recent-invests-container">
      {invests.length > 0 && (
        <button className="close-all-btn" onClick={closeAllCases}>
          Close All Cases
        </button>
      )}

      {invests.map((item: any) => {
        const coin = findCoin(item.name);

        const currentPrice = coin?.current_price ?? item.buyPrice;

        const isTargetReached = currentPrice >= item.targetPrice;

        const investedValue = item.investedValue;
        const tokenAmount = item.tokenAmount;

        const currentValue = tokenAmount * currentPrice;

        // if (currentValue <= 0) {
        //   setTotalPnL((prev: number) => prev - investedValue);
        //   setInvests((prev: any[]) => prev.filter((i) => i.id !== item.id));
        //   return null;
        // }

        const currentProfit = currentValue - investedValue;
        const currentPercent = (currentProfit / investedValue) * 100;

        const targetValue = item.tokenAmount * item.targetPrice;
        const targetProfit = targetValue - item.investedValue;

        const progressToTarget = Math.min(
          (currentPrice / item.targetPrice) * 100,
          100,
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
              <span>{item.investedValue.toFixed(2)}$</span>
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
              <div className="tp-item">
                <span className="tp-label">Target Price</span>
                {formatPrice(item.targetPrice)}$
              </div>

              <div className="tp-item">
                <span className="tp-label">Target %</span>
                <span className="tp-value">+{item.targetPriceInPercents}%</span>
              </div>

              {isTargetReached ? (
                <div className="tp-item tp-full">
                  <span className="target-reached">🎯 Target reached</span>
                </div>
              ) : (
                <div className="tp-item tp-full">
                  <span className="tp-label">Target Profit</span>
                  <span className="tp-value tp-span-in-usd">
                    +{targetProfit.toFixed(2)}$
                  </span>
                </div>
              )}
            </div>

            <div className="close-case-container">
              <button
                className={`btn-close ${isTargetReached ? "target" : ""}`}
                onClick={() => closeCase(item)}
              >
                {isTargetReached ? "Close & Take Profit" : "Close Case"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentInvestComponent;
