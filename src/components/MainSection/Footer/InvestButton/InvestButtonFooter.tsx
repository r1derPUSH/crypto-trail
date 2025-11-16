import { useState } from "react";
import "./InvestButton.css";
import investImg from "./imgInvest.png";

function InvestButtonFooter() {
  return (
    <button className="invest-img">
      <img src={investImg} alt="Invest" />
    </button>
  );
}

export default InvestButtonFooter;
