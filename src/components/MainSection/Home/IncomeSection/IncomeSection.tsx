import "./IncomeSection.css";

function IncomeSection() {
  return (
    <div className="income-parent-box">
      <div className="income-section-container">
        <div className="income-section-top">
          <span className="total-balance-text">Total Balance</span>
          <span className="total-balace-quantity">$17,894.02</span>
        </div>
        <div className="income-section-bottom">
          <div className="income-bottom-left-section">Income</div>
          <div className="outcome-bottom-right-section">Outcome</div>
        </div>
      </div>
    </div>
  );
}

export default IncomeSection;
