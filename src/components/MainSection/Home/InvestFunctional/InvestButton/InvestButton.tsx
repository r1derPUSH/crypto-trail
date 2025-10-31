import React from "react";
import investImg from "../imgs/icons8-invest-100.png";
import "./InvestButton.css";

function InvestButton() {
  return (
    <button className="send-btn">
      <div className="img-holder">
        <img className="img" src={investImg} alt="invest" />
      </div>
      <span>Invest</span>
    </button>
  );
}

export default InvestButton;
