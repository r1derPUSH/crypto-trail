import investImg from "../imgs/icons8-invest-100.png";
import "./InvestButton.css";
import { useNavigate } from "react-router-dom";

function InvestButton() {
  const navigaion = useNavigate();

  const handleNavigate = () => {
    navigaion("/invest-page-section");
  };

  return (
    <button className="send-btn" onClick={handleNavigate}>
      <div className="img-holder">
        <img className="img" src={investImg} alt="invest" />
      </div>
      <span>Invest</span>
    </button>
  );
}

export default InvestButton;
