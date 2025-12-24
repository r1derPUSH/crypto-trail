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
      <div className="history-tokens">
        <div className="history-token">
          <img src={fromImage} alt={from} />
          <div>
            <span className="token-name">{from}</span>
            <span className="token-price">-{fromPrice}</span>
          </div>
        </div>

        <span className="history-arrow">→</span>

        <div className="history-token">
          <img src={toImage} alt={to} />
          <div>
            <span className="token-name">{to}</span>
            <span className="token-price">+{toPrice}</span>
          </div>
        </div>
      </div>

      <div className="history-time">{time}</div>
    </div>
  );
};

export default HistoryItem;
