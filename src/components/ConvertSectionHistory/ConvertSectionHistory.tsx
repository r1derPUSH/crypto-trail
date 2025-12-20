import "./ConvertSectionHistory.css";
import { getSwapHistory } from "../../functions/swapHistory";
import type { SwapHistoryItem } from "../../types/swapHistory";

function ConvertSectionHistory() {
  const history: SwapHistoryItem[] = getSwapHistory();

  return (
    <>
      {/* {history.map((item) => (
        <HistoryItem itemFrom={item.from} itemTo={item.to} />
      ))} */}
    </>
  );
}

export default ConvertSectionHistory;
