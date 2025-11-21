import "./InvestToken.css";
import Footer from "../../MainSection/Footer/Footer";

function InvestToken() {
  return (
    <div>
      <span>Invest in Token</span>

      <div className="token-invest-container">
        <div className="header">
          <div className="first-flex-header">
            <h1 className="token-symbol-h1">BTC</h1>
            <span className="token-name-span">Bitcoin</span>
          </div>
          <div className="second-flex-header">
            <span>89,902.05$</span>
          </div>
        </div>
        <div className="invest-token-functional">
          <input type="text" className="invest-token" />
          <input type="text" className="recive-token" />
        </div>
        <div className="other-token-info">
          <span>Price change 24H: -0.87%</span>
          <span>TVL: 25,004,259$</span>
          <span>ATH: 124,245.95$</span>
          <span>ATH 24H: 84,942.94$</span>
          <span>ATL 24H: 81,492.92$</span>
          <span>Priche Change 24H: -2789.45$</span>
          <span>Price Change 24H %: -4.09%</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default InvestToken;
