import "./IncomeSection.css";
import { useCoins } from "../../../../hooks/useCoins";

function IncomeSection({ invests }: any) {
  const { coins } = useCoins();

  const livePnL = invests.reduce((sum, i) => {
    const coin = coins.find((c) => c.name === i.name);
    if (!coin) return sum;

    if (
      typeof i.tokenAmount !== "number" ||
      typeof i.investedValue !== "number"
    ) {
      return sum;
    }

    const currentValue = i.tokenAmount * coin.current_price;
    return sum + (currentValue - i.investedValue);
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
          <span>Total PnL</span>
          <span className={livePnL >= 0 ? "positive" : "negative"}>
            {livePnL >= 0 ? "+" : ""}
            {livePnL.toFixed(2)}$
          </span>
        </div>
      </div>
    </div>
  );
}

export default IncomeSection;
