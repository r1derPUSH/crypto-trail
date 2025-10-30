import "./IncomeSection.css";

function IncomeSection() {
  return (
    <div className="income-parent-box">
      <div className="income-section-container">
        <div className="income-section-top">
          <span className="total-balance-text">Total Balance</span>
          <span className="total-balance-quantity">$17,894.02</span>
        </div>
        <div className="income-section-bottom">
          <div className="income-bottom-left-section">
            <div className="income-bottom-span-container">
              <span>Income</span>
              <span>$1.034,1</span>
            </div>
          </div>
          <div className="outcome-bottom-right-section">
            <div className="income-bottom-span-container">
              <span>Outcome</span>
              <span>$0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeSection;
