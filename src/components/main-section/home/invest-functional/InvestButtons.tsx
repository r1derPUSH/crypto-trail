import InvestButton from "./invest-button/InvestButton";
import ConvertButton from "./convert-button/ConvertButton";
import HelpButton from "./help-button/HelpButton";
import "./InvestButtons.css";

function InvestButtons() {
  return (
    <div className="invest-functional-container">
      <InvestButton />
      <ConvertButton />
      <HelpButton />
    </div>
  );
}

export default InvestButtons;
