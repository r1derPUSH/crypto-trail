import React from "react";
import "./InvestButton.css";
import investImg from "./imgInvest.png";

function InvestButtonFooter() {
  return (
    <div className="invest-img">
      <img src={investImg} alt="Invest" />
    </div>
  );
}

export default InvestButtonFooter;
