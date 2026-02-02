import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../functions/format";
import { useState, useRef } from "react";
import "./InvestToken.css";
import Footer from "../../main-section/footer/Footer";
import Header from "../../main-section/home/header/Header";
import type { TokenInfo } from "../../../types/tokenInfo";
import type { InvestItem } from "../../../types/props";

function InvestToken({
  tokenInfo,
  setInvests,
}: {
  tokenInfo: TokenInfo;
  setInvests: React.Dispatch<React.SetStateAction<InvestItem[]>>;
}) {
  const navigate = useNavigate();

  const [order, setOrder] = useState(true);

  const [tokenValue, setTokenValue] = useState("");
  const [USDValue, setUSDValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [isInvesting, setIsInvesting] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateDebouncedValue = (value: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000);
  };

  const handleChangeToken = (e: any) => {
    const val = e.target.value;
    setTokenValue(val);
    updateDebouncedValue(val);
    const convertedPrice = val * tokenInfo.price;
    setUSDValue(convertedPrice.toFixed(2).toString());
  };

  const handleChangeUSD = (e: any) => {
    const val = e.target.value;
    setUSDValue(val);
    updateDebouncedValue(val);
    const convertedPrice = val / tokenInfo.price;
    setTokenValue(convertedPrice.toFixed(2).toString());
  };

  const tokenName = tokenInfo.name;
  const currentPrice = tokenInfo.price;
  const [targetPrice, setTargetPrice] = useState<number | null>(null);
  const [targetPriceInPercents, setTargetPriceInPercents] = useState("");
  const [totalValue, setTotalValue] = useState(0);
  const [profit, setProfit] = useState(0);

  const investCurrentToken = () => {
    if (isInvesting) return;

    const investedValue = Number(USDValue);
    const tokenAmount = investedValue / currentPrice;

    setIsInvesting(true);

    setInvests((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: tokenName,
        investedValue,
        tokenAmount,
        buyPrice: Number(currentPrice),
        targetPrice: Number(targetPrice) || 0,
        targetPriceInPercents: Number(targetPriceInPercents) || 0,
        tokenImage: tokenInfo.image,
      },
    ]);

    setTimeout(() => {
      setIsInvesting(false);
    }, 900);
  };

  const recalcByTargetPrice = (newPrice: number) => {
    const percent = ((newPrice - currentPrice) / currentPrice) * 100;

    const multiplier = newPrice / currentPrice;
    const newTotalValue = Number(USDValue) * multiplier;
    const newProfit = newTotalValue - Number(USDValue);

    setTargetPrice(newPrice);
    setTargetPriceInPercents(percent.toFixed(2));
    setTotalValue(newTotalValue);
    setProfit(newProfit);
  };

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div className="token-invest-container">
        <div className="back-icon-container">
          <button
            onClick={() => navigate("/invest-page-section")}
            className="back-icon"
          >
            ←
          </button>
        </div>
        <div className="header">
          <div className="first-flex-header">
            <div className="img-flex-section-token">
              <img src={tokenInfo.image} alt={tokenName} />
              <h1 className="token-symbol-h1">
                {tokenInfo.shortName.toUpperCase()}
              </h1>
            </div>
            <span className="token-name-span">{tokenName}</span>
          </div>
          <div className="second-flex-header">
            <span>{formatPrice(currentPrice)} $</span>
          </div>
        </div>
        <div className="invest-token-functional">
          <div className="invest-token-functional">
            {order ? (
              <>
                {/* USD INPUT */}
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
                    <div className="crypto-input-token">$</div>
                  </div>
                </div>

                {/* SWAP BUTTON */}
                <span
                  className="input-arrow"
                  onClick={() => setOrder((prev) => !prev)}
                >
                  ↕
                </span>

                {/* TOKEN INPUT */}
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
                      {tokenInfo.shortName.toUpperCase()}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* TOKEN INPUT */}
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
                      {tokenInfo.shortName.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* SWAP BUTTON */}
                <span
                  className="input-arrow"
                  onClick={() => setOrder((prev) => !prev)}
                >
                  ↕
                </span>

                {/* USD INPUT */}
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
                    <div className="crypto-input-token">$</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className={`advanced-wrapper ${
            Number(debouncedValue) >= 1 ? "open" : "closed"
          }`}
        >
          <div
            className={
              Number(debouncedValue) >= 1
                ? "advanced-invest-token-container smooth-appear"
                : "advanced-invest-token-container smooth-disappear"
            }
          >
            <div className="flex-token-info-section">
              <div className="header-advanced-invest">
                <span>Advanced Invest</span>
              </div>

              <div className="advanced-invest-info">
                <span>Your investment: {USDValue} $</span>
                <span>
                  You will Recieve: {tokenValue} {tokenName.toUpperCase()}
                </span>
                <span>Token Price: {currentPrice} $</span>
              </div>
            </div>
            <div className="advanced-section-multipliers">
              <div className="flex-target-price">
                <div className="target-price">
                  <span>Target: </span>
                  <span>
                    {targetPrice !== null ? formatPrice(targetPrice) : "0"} $
                  </span>
                </div>
              </div>
              <div className="advanced-multipliers">
                <div className="advanced-quick-multipliers">
                  <div className="first-section-of-multipliers">
                    <div className="first-section-of-multipliers-first-part">
                      <button
                        onClick={() => recalcByTargetPrice(currentPrice * 0.7)}
                      >
                        x0.7 (-30%)
                      </button>
                      <button
                        onClick={() => recalcByTargetPrice(currentPrice * 1)}
                      >
                        x1
                      </button>
                    </div>
                    <div className="first-section-of-multipliers-second-part">
                      <button
                        onClick={() => recalcByTargetPrice(currentPrice * 1.05)}
                      >
                        x1.05 (5%)
                      </button>
                      <button
                        onClick={() => recalcByTargetPrice(currentPrice * 1.2)}
                      >
                        x1.2 (20%)
                      </button>
                    </div>
                  </div>
                  <div className="second-section-of-multipliers">
                    <div className="second-section-of-multipliers-first-part">
                      <button
                        onClick={() => recalcByTargetPrice(currentPrice * 1.5)}
                      >
                        x1.5 (50%)
                      </button>
                      <button
                        onClick={() => recalcByTargetPrice(currentPrice * 2)}
                      >
                        x2 (100%)
                      </button>
                    </div>
                    <div className="second-section-of-multipliers-second-part">
                      <button
                        onClick={() => recalcByTargetPrice(currentPrice * 3)}
                      >
                        x3 (150%)
                      </button>
                      <button
                        onClick={() => recalcByTargetPrice(currentPrice * 10)}
                      >
                        x10 (500%)
                      </button>
                    </div>
                  </div>
                </div>

                <div className="advanced-input-multiplier-container">
                  <input
                    className={`advanced-input-multiplier-by-amount ${
                      Number(targetPriceInPercents) > 0
                        ? "positive"
                        : Number(targetPriceInPercents) < 0
                          ? "negative"
                          : ""
                    }`}
                    type="number"
                    value={
                      targetPrice !== null
                        ? targetPrice < 1
                          ? Number(targetPrice.toFixed(6))
                          : Number(targetPrice.toFixed(2))
                        : ""
                    }
                    placeholder="Enter future price"
                    onChange={(e) => {
                      const newPrice = Number(e.target.value);
                      setTargetPrice(isNaN(newPrice) ? null : newPrice);

                      // % CHANGE
                      const percent = (
                        ((Number(newPrice) - currentPrice) / currentPrice) *
                        100
                      ).toFixed(2);
                      setTargetPriceInPercents(percent);

                      // MULTIPLIER
                      const multiplier = Number(newPrice) / currentPrice;

                      // TOTAL VALUE
                      const newTotalValue = Number(USDValue) * multiplier;
                      setTotalValue(newTotalValue);

                      // PROFIT
                      const newProfit = newTotalValue - Number(USDValue);
                      setProfit(newProfit);
                    }}
                  />
                </div>
              </div>

              <div className="flex-container-advanced-results">
                <div className="advanced-res-profit">
                  <div className="advanced-total-invest">
                    <div className="advanced-res-header">
                      <span>
                        {targetPrice !== null ? formatPrice(targetPrice) : "0"}$
                      </span>
                    </div>
                    <span>Total Value: {formatPrice(totalValue)} $</span>
                    <div className="flex-profit-spans">
                      <span className="profit-span">Profit/Loss:</span>
                      <span
                        className={
                          Number(targetPriceInPercents) > 0
                            ? "positive"
                            : Number(targetPriceInPercents) < 0
                              ? "negative"
                              : "neutral"
                        }
                      >
                        {profit >= 0 ? "+" : ""}
                        {profit.toFixed(2)}$ ({targetPriceInPercents}%)
                      </span>
                    </div>

                    {/* invest button */}
                    <button
                      className={`btn-invest ${isInvesting ? "loading" : ""}`}
                      onClick={investCurrentToken}
                      disabled={isInvesting}
                    >
                      {isInvesting ? <span className="loader" /> : "Invest"}
                    </button>
                  </div>
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
