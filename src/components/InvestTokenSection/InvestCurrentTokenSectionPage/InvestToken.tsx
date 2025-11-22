import "./InvestToken.css";
import Footer from "../../MainSection/Footer/Footer";

function InvestToken({ tokenInfo }: { tokenInfo: any }) {
  return (
    <div>
      <span>Invest in Token</span>

      <div className="token-invest-container">
        <div className="header">
          <div className="first-flex-header">
            <div className="img-flex-section-token">
              <img src={tokenInfo.image} alt={tokenInfo.name} />
              <h1 className="token-symbol-h1">{tokenInfo.shortName}</h1>
            </div>
            <span className="token-name-span">{tokenInfo.name}</span>
          </div>
          <div className="second-flex-header">
            <span>{tokenInfo.price}$</span>
          </div>
        </div>
        <div className="invest-token-functional">
          <div className="input-wrapper">
            <span className="input-label">You invest</span>

            <div className="crypto-input-box">
              <input
                type="number"
                placeholder="0.00"
                className="crypto-input-field"
              />

              <div className="crypto-input-token">
                <img src={tokenInfo.image} alt="" />
                <span>{tokenInfo.shortName}</span>
              </div>
            </div>
          </div>
          <span className="input-arrow">↕</span>
          <div className="input-wrapper">
            <span className="input-label">You receive (USD)</span>

            <div className="crypto-input-box">
              <input
                type="number"
                placeholder="0.00"
                className="crypto-input-field"
              />

              <div className="crypto-input-token">
                <span>$</span>
              </div>
            </div>
          </div>
        </div>
        <div className="other-token-info">
          <div className="other-token-info">
            <div className="token-stat-card">
              <span className="token-stat-title">ATH:</span>
              <span className="token-stat-value">{tokenInfo.ath} $</span>
            </div>

            <div className="token-stat-card">
              <span className="token-stat-title">Market Cap:</span>
              <span className="token-stat-value">
                {(tokenInfo.market_cap / 1e9).toFixed(1)} M $
              </span>
            </div>

            <div className="token-stat-card">
              <span className="token-stat-title">ATH 24H:</span>
              <span className="token-stat-value">{tokenInfo.ath_today} $</span>
            </div>

            <div className="token-stat-card">
              <span className="token-stat-title">ATL 24H:</span>
              <span className="token-stat-value">{tokenInfo.atl_today} $</span>
            </div>

            <div className="token-stat-card">
              <span className="token-stat-title">Price Change 24H:</span>
              <span
                className={
                  tokenInfo.priceChange24H > 0
                    ? "token-stat-value price-green"
                    : "token-stat-value price-red"
                }
              >
                {tokenInfo.priceChange24H} $
              </span>
            </div>

            <div className="token-stat-card">
              <span className="token-stat-title">Price Change 24H %:</span>
              <span
                className={
                  tokenInfo.price_change_24H_in_percentage > 0
                    ? "token-stat-value price-green"
                    : "token-stat-value price-red"
                }
              >
                {tokenInfo.price_change_24H_in_percentage} %
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default InvestToken;
