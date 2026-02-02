import RecentInvestComponent from "./recent-invests-component/RecentInvestComponent";
import "./RecentInvests.css";
import RecentInvestsHeader from "./RecentInvestsHeader/RecentInvestsHeader";

function RecentInvests({ invests, setInvests, setTotalPnL }: any) {
  return (
    <div className="recent-invests-container">
      <div className="recent-invests-box-child">
        <RecentInvestsHeader />
        <RecentInvestComponent
          invests={invests}
          setInvests={setInvests}
          setTotalPnL={setTotalPnL}
        />
      </div>
    </div>
  );
}

export default RecentInvests;
