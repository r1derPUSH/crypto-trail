import "./HistoryItem.css";
import type { HistoryItemProps } from "../../../types/historyItemProps";
import { removeSwapFromHistory } from "../../../functions/swapHistory";

const HistoryItem = ({
  from,
  to,
  time,
  inputValue,
  inputValueTo,
  fromImage,
  toImage,
  id,
}: HistoryItemProps) => {
  return (
    <div className="history-item">
      <div className="history-content">
        <div className="history-token-block">
          <img src={fromImage} alt={from} />
          <div className="price-info">
            <span className="token-name">{from.toUpperCase()}</span>
            <span className="token-amount negative">-{inputValue}</span>
          </div>
        </div>

        <span className="history-divider">→</span>

        <div className="history-token-block">
          <img src={toImage} alt={to} />
          <div className="price-info">
            <span className="token-name">{to.toUpperCase()}</span>
            <span className="token-amount positive">+{inputValueTo}</span>
          </div>
        </div>
      </div>

      <button onClick={removeSwapFromHistory(id)}>Remove</button>

      <div className="history-time">{time}</div>
    </div>
  );
};

export default HistoryItem;
