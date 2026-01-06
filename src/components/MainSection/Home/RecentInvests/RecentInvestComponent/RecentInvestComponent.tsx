import React from "react";

function RecentInvestComponent() {
  return (
    <div>
      <div className="name">
        <span>Name:</span>
        <span>BTC:</span>
      </div>
      <div className="start-value">
        <span>Start Value:</span>
        <span>872$</span>
      </div>
      <div className="current-value">
        <span>Current Value: </span>
        <span>892.5$ </span>
      </div>
      <div className="current-profit-loss">
        <span>Current Profit/Loss:</span>
        <span>+20.5$</span>
        <span>+2.5%</span>
      </div>
    </div>
  );
}

export default RecentInvestComponent;
