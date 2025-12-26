import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MainSection from "./components/MainSection/MainSection";
import InvestPage from "./components/InvestPageSection/Invest/InvestPage";
import ConvertPage from "./components/ConvertPageSection/Convert/ConvertPage";
import HelpPageSection from "./components/HelpPageSection/Help/HelpPageSection";
import LoginSection from "./components/LoginPageSection/LoginSection";
import Overview from "./components/MainSection/Overview/Overview";
import InvestToken from "./components/InvestTokenSection/InvestCurrentTokenSectionPage/InvestToken";
import ConvertSectionHistory from "./components/ConvertSectionHistory/ConvertSectionHistory";
import ScrollToTop from "./components/CustomComponents/ScrollToTop";

import type { TokenInfo } from "./types/tokenInfo";

function MainComponent() {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);

  const [isRegistered, setIsRegistered] = useState(false);
  const [login, setLogin] = useState("");
  const [userAvatar, setUserAvatar] = useState<string | null>(null);
  const [registerDate, setRegisterDate] = useState<string | null>(null);

  const [authChecked, setAuthChecked] = useState(false);

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

    // ⬅️ КЛЮЧОВИЙ МОМЕНТ
    setAuthChecked(true);
  }, []);

  // ❗ ПОКИ НЕ ВІДНОВИЛИ AUTH — НІЧОГО НЕ РЕНДЕРИМО
  if (!authChecked) {
    return null; // або Loader
  }

  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
        {/* ROOT */}
        <Route
          path="/"
          element={
            isRegistered ? (
              <MainSection />
            ) : (
              <Navigate to="/login-page-section" replace />
            )
          }
        />

        {/* LOGIN — ЗАВЖДИ ДОСТУПНИЙ */}
        <Route
          path="/login-page-section"
          element={
            <LoginSection
              login={login}
              isRegistered={isRegistered}
              setIsRegistered={setIsRegistered}
              setLogin={setLogin}
              setPassword={() => {}}
              userAvatar={userAvatar}
              registerDate={registerDate}
              setUserAvatar={setUserAvatar}
              setRegisterDate={setRegisterDate}
            />
          }
        />

        {/* PROTECTED */}
        <Route
          path="/wallet-section"
          element={
            isRegistered ? <Overview /> : <Navigate to="/login-page-section" />
          }
        />

        <Route
          path="/invest-page-section"
          element={
            isRegistered ? (
              <InvestPage setTokenInfo={setTokenInfo} />
            ) : (
              <Navigate to="/login-page-section" />
            )
          }
        />

        <Route
          path="/convert-page-section"
          element={
            isRegistered ? (
              <ConvertPage />
            ) : (
              <Navigate to="/login-page-section" />
            )
          }
        />

        <Route
          path="/convert-section-history"
          element={
            isRegistered ? (
              <ConvertSectionHistory />
            ) : (
              <Navigate to="/login-page-section" />
            )
          }
        />

        <Route
          path="/invest-unique-token"
          element={
            isRegistered ? (
              <InvestToken tokenInfo={tokenInfo} />
            ) : (
              <Navigate to="/login-page-section" />
            )
          }
        />

        <Route path="/help-page-section" element={<HelpPageSection />} />
      </Routes>
    </HashRouter>
  );
}

export default MainComponent;
