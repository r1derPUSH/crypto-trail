import { HashRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection/MainSection";
import InvestPage from "./components/InvestPageSection/Invest/InvestPage";
import "./components/MainSection/mainSection.css";
import ConvertPage from "./components/ConvertPageSection/Convert/ConvertPage";
import HelpPageSection from "./components/HelpPageSection/Help/HelpPageSection";
import LoginSection from "./components/LoginPageSection/LoginSection";
import Overview from "./components/MainSection/Overview/Overview";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainSection />}></Route>
        <Route path="/invest-page-section" element={<InvestPage />} />
        <Route path="/convert-page-section" element={<ConvertPage />} />
        <Route path="/help-page-section" element={<HelpPageSection />} />
        <Route path="/login-page-section" element={<LoginSection />} />
        <Route path="/wallet-section" element={<Overview />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
