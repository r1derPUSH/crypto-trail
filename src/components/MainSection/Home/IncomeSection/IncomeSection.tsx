import "./IncomeSection.css";
import { useCoins } from "../../../../hooks/useCoins";

function IncomeSection({ livePnL, invests }: any) {
  const { coins } = useCoins();

  return (
    <div className="income-parent-box">
      <div className="summary-card">
        <div>
          <span>Current Invests</span>
          <span>
            {invests.reduce((s, i) => {
              const coin = coins.find((c) => c.name === i.name);
              if (!coin) return s;

              return s + i.tokenAmount * coin.current_price;
            }, 0)}
            $
          </span>
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
