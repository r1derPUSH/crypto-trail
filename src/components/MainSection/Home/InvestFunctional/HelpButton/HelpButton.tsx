import { useNavigate } from "react-router-dom";
import helpImg from "../imgs/icons8-help-100.png";
import "./HelpButton.css";

function HelpButton() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/help-page-section");
  };

  return (
    <button className="help-btn" onClick={handleNavigate}>
      <div className="img-holder-help">
        <img className="img" src={helpImg} alt="invest" />
      </div>
      <span>Help</span>
    </button>
  );
}

export default HelpButton;
