import helpImg from "../imgs/icons8-help-100.png";
import "./HelpButton.css";

function HelpButton() {
  return (
    <button className="help-btn">
      <div className="img-holder-help">
        <img className="img" src={helpImg} alt="invest" />
      </div>
      <span>Convert</span>
    </button>
  );
}

export default HelpButton;
