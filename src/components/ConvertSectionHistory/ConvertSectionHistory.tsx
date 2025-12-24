import "./ConvertSectionHistory.css";
import { getSwapHistory } from "../../functions/swapHistory";
import type { SwapHistoryItem } from "../../types/swapHistory";
import HistoryItem from "./HistoryOfSwapsItem/HistoryItem";

function ConvertSectionHistory() {
  const history: SwapHistoryItem[] = getSwapHistory();

  return (
    <>
      {history.map((item) => (
        <HistoryItem
          from={item.from}
          to={item.to}
          time={item.time}
          fromPrice={item.fromPrice}
          toPrice={item.toPrice}
          fromImage={item.fromImage}
          toImage={item.toImage}
        />
      ))}
    </>
  );
}

export default ConvertSectionHistory;
