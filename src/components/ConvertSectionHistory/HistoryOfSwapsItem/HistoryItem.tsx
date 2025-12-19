import "./HistoryItem.css";

function HistoryItem() {
  return (
    <div className="history-item">
      <div className="history-left">
        <span className="history-pair">BTC → ETH</span>
        <span className="history-cost">$923</span>
      </div>

      <div className="history-time">02.12 · 12:42</div>
    </div>
  );
}

export default HistoryItem;
