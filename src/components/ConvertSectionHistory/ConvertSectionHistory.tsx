import { useEffect, useState } from "react";
import "./ConvertSectionHistory.css";
import type { SwapHistoryItem } from "../../types/swapHistory";
import {
  getSwapHistory,
  removeSwapFromHistory,
} from "../../functions/swapHistory";
import HistoryItem from "./HistoryOfSwapsItem/HistoryItem";
import { useNavigate } from "react-router-dom";

function ConvertSectionHistory() {
  const [history, setHistory] = useState<SwapHistoryItem[]>([]);

  const navigate = useNavigate();

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
          inputValue={String(item.inputValue ?? "0")}
          inputValueTo={String(item.inputValueTo ?? "0")}
          fromImage={item.fromImage ?? ""}
          toImage={item.toImage ?? ""}
          onRemove={handleRemove}
        />
      ))}
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
