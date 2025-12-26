import { HashRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection/MainSection";
import InvestPage from "./components/InvestPageSection/Invest/InvestPage";
import "./components/MainSection/mainSection.css";
import ConvertPage from "./components/ConvertPageSection/Convert/ConvertPage";
import HelpPageSection from "./components/HelpPageSection/Help/HelpPageSection";
import LoginSection from "./components/LoginPageSection/LoginSection";
import Overview from "./components/MainSection/Overview/Overview";
import InvestToken from "./components/InvestTokenSection/InvestCurrentTokenSectionPage/InvestToken";
import ScrollToTop from "./components/CustomComponents/ScrollToTop";
import ConvertSectionHistory from "./components/ConvertSectionHistory/ConvertSectionHistory";
import { useState, useEffect } from "react";
import type { TokenInfo } from "./types/tokenInfo";

function MainComponent() {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [userAvatar, setUserAvatar] = useState<string | null>(null);
  const [registerDate, setRegisterDate] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const isSignedIn = sessionStorage.getItem("isSignedIn");

    if (user && isSignedIn === "true") {
      const parsedUser = JSON.parse(user);

      setLogin(parsedUser.email);
      setUserAvatar(parsedUser.avatar);
      setRegisterDate(parsedUser.registerDate);
      setIsRegistered(true);
    }
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainSection />}></Route>
        <Route
          path="/invest-page-section"
          element={<InvestPage setTokenInfo={setTokenInfo} />}
        />
        <Route path="/convert-page-section" element={<ConvertPage />} />
        <Route path="/help-page-section" element={<HelpPageSection />} />
        <Route
          path="/login-page-section"
          element={
            <LoginSection
              login={login}
              isRegistered={isRegistered}
              setIsRegistered={setIsRegistered}
              setLogin={setLogin}
              setPassword={setPassword}
              userAvatar={userAvatar}
              registerDate={registerDate}
              setUserAvatar={setUserAvatar}
              setRegisterDate={setRegisterDate}
            />
          }
        />
        <Route path="/wallet-section" element={<Overview />} />
        <Route
          path="/invest-unique-token"
          element={<InvestToken tokenInfo={tokenInfo} />}
        />
        <Route
          path="/convert-section-history"
          element={<ConvertSectionHistory />}
        />
      </Routes>
    </HashRouter>
  );
}

export default MainComponent;
