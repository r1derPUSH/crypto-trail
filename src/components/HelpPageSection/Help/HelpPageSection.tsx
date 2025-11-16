import { useNavigate } from "react-router-dom";

import "./HelpPageSection.css";

function HelpPageSection() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="help-section">
      <h1>Help & Support</h1>
      <p>Here you can find information about how to use Crypto Trail...</p>

      <button className="back-home-btn" onClick={handleBack}>
        ← Back to Home
      </button>
    </div>
  );
}

export default HelpPageSection;
