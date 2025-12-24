import "./HistoryItem.css";
import type { HistoryItemProps } from "../../../types/historyItemProps";

const HistoryItem = ({
  from,
  to,
  time,
  fromPrice,
  toPrice,
  fromImage,
  toImage,
}: HistoryItemProps) => {
  return (
    <div className="history-item">
      <div className="history-content">
        <div className="history-token-block">
          <img src={fromImage} alt={from} />
          <div>
            <span className="token-name">{from}</span>
            <span className="token-amount negative">-{fromPrice}</span>
          </div>
        </div>

        <span className="history-divider">→</span>

        <div className="history-token-block">
          <img src={toImage} alt={to} />
          <div>
            <span className="token-name">{to}</span>
            <span className="token-amount positive">+{toPrice}</span>
          </div>
        </div>
      </div>

      <div className="history-time">{time}</div>
    </div>
  );
};

export default HistoryItem;
