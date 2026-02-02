import HistoryItem from "../history-item/HistoryItem";

function RecentInvestsHistory({ invests, setInvests }: any) {
  return (
    <div>
      <HistoryItem invests={invests} setInvests={setInvests} />
    </div>
  );
}

export default RecentInvestsHistory;
