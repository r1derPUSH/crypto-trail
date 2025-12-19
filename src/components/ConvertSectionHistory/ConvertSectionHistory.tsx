import "./ConvertSectionHistory.css";
import HistoryItem from "./HistoryOfSwapsItem/HistoryItem";
import { getSwapHistory } from "../../functions/swapHistory";

const history = getSwapHistory();

function ConvertSectionHistory() {
  return <HistoryItem />;
}

export default ConvertSectionHistory;
