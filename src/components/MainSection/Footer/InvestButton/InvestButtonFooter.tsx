import { useState } from "react";
import "./InvestButton.css";
import investImg from "./imgInvest.png";

function InvestButtonFooter() {
  const [homeSection, setHomeSection] = useState(false);

  return (
    <button className="invest-img">
      <img src={investImg} alt="Invest" />
    </button>
  );
}

export default InvestButtonFooter;
