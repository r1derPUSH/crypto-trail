import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainSection from "./components/MainSection/MainSection";
import InvestPage from "./components/InvestPageSection/Invest/InvestPage";
import "./components/MainSection/mainSection.css";
import ConvertPage from "./components/ConvertPageSection/Convert/ConvertPage";
import HelpPageSection from "./components/HelpPageSection/Help/HelpPageSection";
import LoginSection from "./components/LoginPageSection/LoginSection";
import Overview from "./components/MainSection/Overview/Overview";
import InvestToken from "./components/InvestTokenSection/InvestCurrentTokenSectionPage/InvestToken";

function App() {
  const [tokenInfo, setTokenInfo] = useState([]);
  useEffect(() => {
    console.log(tokenInfo);
  });

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainSection />}></Route>
        <Route
          path="/invest-page-section"
          element={<InvestPage setTokenInfo={setTokenInfo} />}
        />
        <Route path="/convert-page-section" element={<ConvertPage />} />
        <Route path="/help-page-section" element={<HelpPageSection />} />
        <Route path="/login-page-section" element={<LoginSection />} />
        <Route path="/wallet-section" element={<Overview />} />
        <Route
          path="/invest-unique-token"
          element={<InvestToken tokenInfo={tokenInfo} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
