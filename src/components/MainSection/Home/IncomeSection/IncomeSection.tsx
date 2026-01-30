import "./IncomeSection.css";
import { useCoins } from "../../../../context/CoinsContext";

import type { InvestItem } from "../../../../types/props";

type Props = {
  invests: InvestItem[];
  totalPnL: number;
  resetTotalPnL: () => void;
};

function IncomeSection({ invests, totalPnL, resetTotalPnL }: Props) {
  const { coins } = useCoins();

  const floatingPnL = invests.reduce((sum, item) => {
    const coin = coins.find((c) => c.name === item.name);
    const price = coin?.current_price ?? item.buyPrice;
    return sum + (item.tokenAmount * price - item.investedValue);
  }, 0);

  const currentInvests = invests.reduce((sum, item) => {
    const coin = coins.find((c) => c.name === item.name);
    const price = coin?.current_price ?? item.buyPrice;
    return sum + item.tokenAmount * price;
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
