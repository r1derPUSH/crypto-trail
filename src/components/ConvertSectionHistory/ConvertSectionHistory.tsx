import { useEffect, useState } from "react";
import "./ConvertSectionHistory.css";
import type { SwapHistoryItem } from "../../types/swapHistory";
import {
  getSwapHistory,
  removeSwapFromHistory,
} from "../../functions/swapHistory";
import HistoryItem from "./HistoryOfSwapsItem/HistoryItem";

function ConvertSectionHistory() {
  const [history, setHistory] = useState<SwapHistoryItem[]>([]);

  useEffect(() => {
    setHistory(getSwapHistory());
  }, []);

  const handleRemove = (id: string) => {
    setHistory(removeSwapFromHistory(id));
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
          inputValue={item.inputValue}
          inputValueTo={item.inputValueTo}
          fromImage={item.fromImage}
          toImage={item.toImage}
          onRemove={handleRemove}
        />
      ))}
      <div className="back-to-home-container">
        <button className="back-to-home-btn">Back To Home</button>
        <button className="back-to-wallet-btn">Back To Wallet</button>
      </div>
    </>
  );
}

export default ConvertSectionHistory;
