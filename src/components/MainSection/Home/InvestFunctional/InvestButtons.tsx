import InvestButton from "./InvestButton/InvestButton";
import ConvertButton from "./ConvertButton/ConvertButton";
import HelpButton from "./HelpButton/HelpButton";
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
