import HistoryItem from "../HistoryItem/HistoryItem";
import "./RecentInvestsHistory.css";

function RecentInvestsHistory({ invests, setInvests }: any) {
  return (
    <div>
      <HistoryItem invests={invests} setInvests={setInvests} />
    </div>
  );
}

export default RecentInvestsHistory;
