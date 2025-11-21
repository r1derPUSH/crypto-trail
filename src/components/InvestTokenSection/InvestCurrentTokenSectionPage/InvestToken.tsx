import "./InvestToken.css";
import Footer from "../../MainSection/Footer/Footer";

function InvestToken({ tokenInfo }: { tokenInfo: any }) {
  return (
    <div>
      <span>Invest in Token</span>

      <div className="token-invest-container">
        <div className="header">
          <div className="first-flex-header">
            <img src={tokenInfo.image} alt={tokenInfo.name} />
            <h1 className="token-symbol-h1">{tokenInfo.symbol}</h1>
            <span className="token-name-span">{tokenInfo.name}</span>
          </div>
          <div className="second-flex-header">
            <span>{tokenInfo.price}$</span>
          </div>
        </div>
        <div className="invest-token-functional">
          <input type="text" className="invest-token" />
          <input type="text" className="recive-token" />
        </div>
        <div className="other-token-info">
          <span>ATH: {tokenInfo.ath}$ </span>
          <span>ATH 24H: {tokenInfo.ath_today}$ </span>
          <span>ATL 24H: {tokenInfo.atl_today}$ </span>
          <span>Priche Change 24H: {tokenInfo.price_change_24h}$ </span>
          <span>
            Price Change 24H %: {tokenInfo.price_change_24H_in_percentage}%
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default InvestToken;
