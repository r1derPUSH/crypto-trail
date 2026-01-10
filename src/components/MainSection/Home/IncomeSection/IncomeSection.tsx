import "./IncomeSection.css";
import { useCoins } from "../../../../context/CoinsContext";

function IncomeSection({ invests, totalPnL }: any) {
  const { coins } = useCoins();

  const floatingPnL = invests.reduce((sum, i) => {
    const coin = coins.find((c) => c.name === i.name);
    if (!coin) return sum;

    return sum + (i.tokenAmount * coin.current_price - i.investedValue);
  }, 0);

  const currentInvests = invests.reduce((sum, i) => {
    const coin = coins.find((c) => c.name === i.name);
    if (!coin || typeof i.tokenAmount !== "number") return sum;
    return sum + i.tokenAmount * coin.current_price;
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

        <div>
          <span>Total PnL</span>
          <span className={totalPnL >= 0 ? "positive" : "negative"}>
            {totalPnL.toFixed(2)}$
          </span>
        </div>
      </div>
    </div>
  );
}

export default IncomeSection;
