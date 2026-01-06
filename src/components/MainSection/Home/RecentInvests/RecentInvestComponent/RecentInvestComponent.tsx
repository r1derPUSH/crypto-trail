function RecentInvestComponent() {
  return (
    <div>
      <div className="name">
        <span>Name:</span>
        <span>BTC</span>
      </div>
      <div className="start-value">
        <span>Start Value:</span>
        <span>872$</span>
        <span>Buy Price:</span>
        <span>95402.4$</span>
      </div>
      <div className="current-value">
        <span>Current Value: </span>
        <span>892.5$ </span>
        <span>Current Price: </span>
        <span>96002.5$ </span>
      </div>
      <div className="current-profit-loss">
        <span>Current Profit/Loss:</span>
        <span>+20.5$</span>
        <span>+2.5%</span>
      </div>
      <div className="targetProfit">
        <span> Target Price: </span>
        <span> 101500$ </span>
        <span> Target Profit: </span>
        <span> +700$ </span>
        {/* here i want to add circle with progress of profit */}
        <span>8% / 100%</span>
      </div>
    </div>
  );
}

export default RecentInvestComponent;
