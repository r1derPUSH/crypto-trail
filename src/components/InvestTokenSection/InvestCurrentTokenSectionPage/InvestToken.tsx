import "./InvestToken.css";
import Footer from "../../MainSection/Footer/Footer";
import { useState } from "react";

function InvestToken({ tokenInfo }: { tokenInfo: any }) {
  const [tokenValue, setTokenValue] = useState("");
  const [USDValue, setUSDValue] = useState("");

  const handleChangeToken = (e) => {
    const val = e.target.value;
    setTokenValue(val);
    const convertedPrice = val * tokenInfo.price;
    setUSDValue(convertedPrice.toFixed(2).toString());
  };

  const handleChangeUSD = (e) => {
    const val = e.target.value;
    setUSDValue(val);
    const convertedPrice = val / tokenInfo.price;
    setTokenValue(convertedPrice.toFixed(2).toString());
  };

  return (
    <div>
      <div className="token-invest-container">
        <div className="header">
          <div className="first-flex-header">
            <div className="img-flex-section-token">
              <img src={tokenInfo.image} alt={tokenInfo.name} />
              <h1 className="token-symbol-h1">
                {tokenInfo.shortName.toUpperCase()}
              </h1>
            </div>
            <span className="token-name-span">{tokenInfo.name}</span>
          </div>
          <div className="second-flex-header">
            <span>{tokenInfo.price}$</span>
          </div>
        </div>
        <div className="invest-token-functional">
          <div className="input-wrapper">
            <span className="input-label">You Invest (USD)</span>

            <div className="crypto-input-box">
              <input
                type="number"
                onChange={handleChangeUSD}
                placeholder="0.00"
                value={USDValue}
                className="crypto-input-field"
              />

              <div className="crypto-input-token">
                <span>$</span>
              </div>
            </div>
          </div>
          <span className="input-arrow">↕</span>
          <div className="input-wrapper">
            <span className="input-label">You Recieve</span>

            <div className="crypto-input-box">
              <input
                type="number"
                onChange={handleChangeToken}
                placeholder="0.00"
                value={tokenValue}
                className="crypto-input-field"
              />

              <div className="crypto-input-token">
                <img src={tokenInfo.image} alt="" />
                <span>{tokenInfo.shortName.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="advanced-invest-token-container">
          <div className="header-advanced-invest">
            <span>Advanced Invest</span>
          </div>
          <div className="advanced-invest-info">
            <span>You will Recieve: 3.74 ETH</span>
            <span>Your investment: 10650 $</span>
            <span>current: 3070 $</span>
          </div>
          <div className="advanced-section-multipliers">
            <div className="target-price">
              <span>Target Price</span>
              <span>20.09 $</span>
            </div>
            <div className="advanced-multipliers">
              <div className="advanced-quick-multipliers">
                <button>x0.7 (-30%)</button>
                <button>x1.05 (5%)</button>
                <button>x1.2 (20%)</button>
                <button>x1.5 (50%)</button>
                <button>x2 (100%)</button>
                <button>x3 (150%)</button>
                <button>x10 (500%)</button>
                <button>x100 (5000%)</button>
              </div>
              <div className="advanced-input-multiplier-container">
                <input
                  className="advanced-input-multiplier-by-amount"
                  type="text"
                />
              </div>
            </div>
            <div className="advanced-results">
              <div className="advanced-res-header">
                <span>If price reaches 20.90$ (+170%)</span>
              </div>
              <div className="advanced-res-profit">
                <div className="advanced-total-invest">
                  <span>Total Value: 794.80 $ </span>
                  <span>Profit/Loss: +197.84 $ (+25%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              {tokenInfo.priceChange24H.toFixed(2)} $
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
              {tokenInfo.price_change_24H_in_percentage.toFixed(2)} %
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default InvestToken;
