import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Overview.css";
import Header from "../Home/Header/Header";

function Overview() {
  const navigate = useNavigate();

  const investHistory = JSON.parse(
    localStorage.getItem("investHistory") || "[]",
  );

  const totalPnL = Number(localStorage.getItem("totalPnL") || 0);

  return (
    <>
      <Header />

      <div className="wallet-container">
        {/* BALANCE */}
        <div className="wallet-header">
          <span>Balance</span>
          <span className={totalPnL >= 0 ? "positive" : "negative"}>
            {totalPnL.toFixed(2)} $
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="wallet-buttons">
          <button onClick={() => navigate("/invest-page-section")}>
            Invest
          </button>
          <button onClick={() => navigate("/convert-page-section")}>
            Convert
          </button>
          <button>Check PNL</button>
        </div>

        {/* HISTORY PREVIEW */}
        <div className="wallet-history">
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

          {investHistory.slice(0, 5).map((item: any) => (
            <div key={item.id} className="wallet-history-row">
              {/* LEFT */}
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

              {/* RIGHT */}
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

          {/* SEE MORE */}
          {investHistory.length > 5 && (
            <button
              className="wallet-history-see-more"
              onClick={() => navigate("/wallet-history")}
            >
              See more →
            </button>
          )}
        </div>

        {/* BACK */}
        <div className="flexbox-for-back-to-home-btb">
          <button className="back-home-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>

      <div className="margin" />
      <Footer />
    </>
  );
}

export default Overview;
