import { useNavigate } from "react-router-dom";
import "./HelpPageSection.css";

function HelpPageSection() {
  const navigate = useNavigate();

  return (
    <div className="help-section">
      <div className="help-card">
        <h1>Help & Support</h1>

        <p className="help-intro">
          Crypto Trail is a personal crypto portfolio tracker designed to help
          you stay in control of your investments and understand your financial
          performance at a glance.
        </p>

        <div className="help-block">
          <h3>🚀 Key Features</h3>
          <ul>
            <li>
              <strong>Investment tracking</strong> — add crypto assets manually
              and monitor their current value based on market prices.
            </li>
            <li>
              <strong>Profit & Loss analysis</strong> — instantly see how much
              you’ve gained or lost overall and per asset.
            </li>
            <li>
              <strong>Portfolio overview</strong> — view total balance, asset
              distribution, and live portfolio value.
            </li>
            <li>
              <strong>Transaction history</strong> — keep a clear record of all
              your investment actions.
            </li>
            <li>
              <strong>User profile</strong> — register locally, get a random
              avatar, and manage your session securely.
            </li>
            <li>
              <strong>Theme customization</strong> — switch between light and
              dark themes for a comfortable experience.
            </li>
          </ul>
        </div>

        <div className="help-block">
          <h3>🔒 Data & Privacy</h3>
          <p>
            Crypto Trail does not use any external servers. All your data is
            stored locally in your browser and remains fully under your control.
          </p>
        </div>

        <div className="help-footer">
          <button className="back-home-btn" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpPageSection;
