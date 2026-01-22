import "./IncomeSection.css";
import { useCoins } from "../../../../context/CoinsContext";

function IncomeSection({ invests, totalPnL, resetTotalPnL }: any) {
  const { coins } = useCoins();

  const floatingPnL = invests.reduce((sum, i) => {
    const coin = coins.find((c) => c.name === i.name);
    const price = coin?.current_price ?? i.buyPrice;
    return sum + (i.tokenAmount * price - i.investedValue);
  }, 0);

  const currentInvests = invests.reduce((sum, i) => {
    const coin = coins.find((c) => c.name === i.name);
    if (typeof i.tokenAmount !== "number") return sum;
    const price = coin?.current_price ?? i.buyPrice;
    return sum + i.tokenAmount * price;
  }, 0);

  return (
    <div className="income-parent-box">
      <div className="summary-card">
        <div>
          <span>Current Invests</span>
          <span>{currentInvests.toFixed(2)}$</span>
        </div>

        <div>
          <span>Floating PnL</span>
          <span className={floatingPnL >= 0 ? "positive" : "negative"}>
            {floatingPnL.toFixed(2)}$
          </span>
        </div>

        <div className="total-pnl-box">
          <div className="total-pnl-header">
            <span>Total PnL</span>
            <button
              className="reset-btn"
              onClick={resetTotalPnL}
              title="Reset Total PnL"
            >
              ⟲
            </button>
          </div>

          <span className={totalPnL >= 0 ? "positive" : "negative"}>
            {totalPnL.toFixed(2)}$
          </span>
        </div>
      </div>
    </div>
  );
}

export default IncomeSection;
