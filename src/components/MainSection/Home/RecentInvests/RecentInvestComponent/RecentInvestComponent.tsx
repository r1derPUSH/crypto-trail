import "./RecentInvestComponent.css";

function RecentInvestComponent({ invests, setInvests }: any) {
  const closeCase = (id: number) => {
    setInvests((prev: any[]) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="recent-invests-container">
      {invests.map((item: any) => (
        <div key={item.id} className="recent-invest-card">
          <div className="name">
            <span>Name:</span>
            <span>{item.name}</span>
          </div>
          <div className="start-value">
            <span>Start Value:</span>
            <span>{item.totalValue}$</span>
            <span>Buy Price:</span>
            <span>{item.buyPrice}$</span>
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
            <span> {item.targetPrice}$ </span>
            <span> +{item.targetPriceInPercents}% </span>
            <span> Target Profit: </span>
            <span> +{item.targetProfit.toFixed(2)}$ </span>
            {/* here i want to add circle with progress of profit */}
            <span>8% / 100%</span>
          </div>
          <button className="btn-close" onClick={() => closeCase(item.id)}>
            Close Case
          </button>
        </div>
      ))}
    </div>
  );
}

export default RecentInvestComponent;
