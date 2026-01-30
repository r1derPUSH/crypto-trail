import { useNavigate } from "react-router-dom";
import Header from "../MainSection/Home/Header/Header";
import Footer from "../MainSection/Footer/Footer";
import type { InvestHistoryItem } from "../../types/props";
import "../MainSection/Overview/Overview.css";

function WalletHistory() {
  const navigate = useNavigate();

  const investHistory: InvestHistoryItem[] = JSON.parse(
    localStorage.getItem("investHistory") || "[]",
  );

  return (
    <>
      <Header />

      <div className="wallet-container">
        <div className="wallet-header-flex">
          <span className="wallet-history-title">History of invests</span>

          {investHistory.length > 0 && (
            <button
              className="wallet-history-reset"
              onClick={() => {
                localStorage.removeItem("investHistory");
                window.location.reload();
              }}
            >
              Reset
            </button>
          )}
        </div>

        {investHistory.length === 0 && (
          <span className="wallet-history-empty">No closed invests yet</span>
        )}

        {investHistory.map((item) => (
          <div key={item.id} className="wallet-history-row">
            <div className="wallet-history-token">
              <img
                src={item.img}
                alt={item.name}
                className="wallet-history-token-img"
              />

              <div className="wallet-history-token-info">
                <span className="wallet-history-token-name">{item.name}</span>
                <span className="wallet-history-token-date">
                  {item.closedAt
                    ? new Date(item.closedAt).toLocaleDateString()
                    : ""}
                </span>
              </div>
            </div>

            <div className="wallet-history-pnl">
              <span
                className={`wallet-history-profit ${
                  item.profit >= 0 ? "positive" : "negative"
                }`}
              >
                {item.profit >= 0 ? "+" : ""}
                {item.profit.toFixed(2)}$
              </span>

              <span
                className={`wallet-history-percent ${
                  item.percent >= 0 ? "positive" : "negative"
                }`}
              >
                {item.percent >= 0 ? "+" : ""}
                {item.percent.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}

        <div className="flexbox-for-back-to-home-btb">
          <button className="back-home-btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>

      <div className="margin" />
      <Footer />
    </>
  );
}

export default WalletHistory;
