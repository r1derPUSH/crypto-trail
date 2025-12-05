import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Overview.css";

function Overview() {
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <>
      <div className="wallet-container">
        <div className="wallet-header">
          <span>Balance</span>
          <span>$1,257.98</span>
        </div>
        <div className="wallet-buttons">
          <button onClick={() => handleNavigate("/invest-page-section")}>
            Invest
          </button>
          <button onClick={() => handleNavigate("/convert-page-section")}>
            Convert
          </button>
          <button>Check PNL</button>
        </div>
        <div className="user-invests">
          <div className="token-invest-position">
            <span>ETH</span>
            <span>PNL</span>
          </div>
        </div>
        <div className="flexbox-for-back-to-home-btb">
          <button className="back-home-btn" onClick={() => handleNavigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
      <div className="margin"></div>
      <Footer />
    </>
  );
}

export default Overview;
