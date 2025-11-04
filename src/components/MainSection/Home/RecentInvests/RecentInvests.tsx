import React from "react";
import "./RecentInvests.css";
import RecentInvestsHeader from "./RecentInvestsHeader/RecentInvestsHeader";

function RecentInvests() {
  return (
    <div className="recent-invests-container">
      <div className="recent-invests-box-child">
        <RecentInvestsHeader />
      </div>
    </div>
  );
}

export default RecentInvests;
