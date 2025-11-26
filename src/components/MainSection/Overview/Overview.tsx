import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Overview.css";

function Overview() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="wallet-container">
        <div className="wallet-header">
          <span>Balance</span>
          <span>$1,257.98</span>
        </div>
        <div className="wallet-buttons">
          <button>Invest</button>
          <button>Convert</button>
          <button>Check PNL</button>
        </div>
        <div className="user-invests">
          <div className="token-invest-position">
            <span>ETH</span>
            <span>PNL</span>
          </div>
        </div>
        <button className="back-home-btn" onClick={handleNavigate}>
          Back to Home
        </button>
        {/* <button></button> */}
      </div>
      <Footer />
    </>
  );
}

export default Overview;
