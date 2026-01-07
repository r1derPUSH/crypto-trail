import RecentInvestComponent from "./RecentInvestComponent/RecentInvestComponent";
import "./RecentInvests.css";
import RecentInvestsHeader from "./RecentInvestsHeader/RecentInvestsHeader";

function RecentInvests({ invests, setInvests }: any) {
  return (
    <div className="recent-invests-container">
      <div className="recent-invests-box-child">
        <RecentInvestsHeader />
        <RecentInvestComponent invests={invests} setInvests={setInvests} />
      </div>
    </div>
  );
}

export default RecentInvests;
