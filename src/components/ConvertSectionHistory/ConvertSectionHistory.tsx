import { useEffect, useState } from "react";
import type { SwapHistoryItem } from "../../types/swapHistory";
import { useNavigate } from "react-router-dom";
import "./ConvertSectionHistory.css";
import HistoryItem from "./HistoryOfSwapsItem/HistoryItem";

import {
  getSwapHistory,
  removeSwapFromHistory,
  clearSwapHistory,
} from "../../functions/swapHistoryFn";

function ConvertSectionHistory() {
  const [history, setHistory] = useState<SwapHistoryItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setHistory(getSwapHistory());
  }, []);

  const handleRemove = (id: string) => {
    setHistory(removeSwapFromHistory(id));
  };

  const handleClearHistory = () => {
    if (!history.length) return;

    const confirmed = window.confirm("Clear all swap history?");
    if (!confirmed) return;

    setHistory(clearSwapHistory());
  };

  return (
    <>
      {history.map((item) => (
        <HistoryItem
          key={item.id}
          id={item.id}
          from={item.from}
          to={item.to}
          time={item.time}
          inputValue={String(item.inputValue ?? "0")}
          inputValueTo={String(item.inputValueTo ?? "0")}
          fromImage={item.fromImage ?? ""}
          toImage={item.toImage ?? ""}
          onRemove={handleRemove}
        />
      ))}

      {history.length > 0 && (
        <div className="clear-history-container">
          <button onClick={handleClearHistory} className="clear-history-btn">
            Clear History
          </button>
        </div>
      )}

      <div className="back-to-home-container">
        <button onClick={() => navigate("/")} className="back-to-home-btn">
          Back To Home
        </button>
        <button
          onClick={() => navigate("/wallet-section")}
          className="back-to-wallet-btn"
        >
          Back To Wallet
        </button>
      </div>
    </>
  );
}

export default ConvertSectionHistory;
