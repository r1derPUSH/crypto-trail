import { useNavigate } from "react-router-dom";
import "./PortfolioButton.css";

function PortfolioButton() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/wallet-section");
  };

  return (
    <button onClick={handleNavigate} className="portfolio-section">
      <span>Wallet</span>
    </button>
  );
}

export default PortfolioButton;
