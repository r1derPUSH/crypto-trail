import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MainSection from "./components/main-section/MainSection";
import InvestPage from "./components/invest-page-section/invest/InvestPage";
import ConvertPage from "./components/convert-page-section/convert/ConvertPage";
import HelpPageSection from "./components/help-page-section/help/HelpPageSection";
import LoginSection from "./components/login-page-section/LoginSection";
import Overview from "./components/main-section/Overview/Overview";
import InvestToken from "./components/invest-token-section/invest-current-token-section-page/InvestToken";
import ConvertSectionHistory from "./components/convert-section-history/ConvertSectionHistory";
import ScrollToTop from "./components/custom-components/ScrollToTop";
import WalletHistory from "./components/wallet-history-section/WalletHistory";
import RecentInvestsHistory from "./components/recent-invests-history/history-parent/RecentInvestsHistory";

import type { TokenInfo } from "./types/tokenInfo";
import type { InvestItem } from "./types/props";

function MainComponent() {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);

  const [isRegistered, setIsRegistered] = useState(false);
  const [login, setLogin] = useState("");
  const [userAvatar, setUserAvatar] = useState<string | null>(null);
  const [registerDate, setRegisterDate] = useState<string | null>(null);
  const [invests, setInvests] = useState<InvestItem[]>(() => {
    const saved = localStorage.getItem("invests");
    return saved ? JSON.parse(saved) : [];
  });
  const [totalPnL, setTotalPnL] = useState<number>(() => {
    const saved = localStorage.getItem("totalPnL");
    return saved ? Number(saved) : 0;
  });

  const resetTotalPnL = () => {
    if (!confirm("Reset total PnL?")) return;

    setTotalPnL(0);
    localStorage.setItem("totalPnL", "0");
  };

  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    localStorage.setItem("invests", JSON.stringify(invests));
  }, [invests]);

  useEffect(() => {
    localStorage.setItem("totalPnL", totalPnL.toString());
  }, [totalPnL]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const isSignedIn = localStorage.getItem("isSignedIn");

    if (user && isSignedIn === "true") {
      const parsedUser = JSON.parse(user);

      setLogin(parsedUser.username);
      setUserAvatar(parsedUser.avatar);
      setRegisterDate(parsedUser.registerDate);
      setIsRegistered(true);
    }

    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    return null;
  }

  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            isRegistered ? (
              <MainSection
                invests={invests}
                setInvests={setInvests}
                totalPnL={totalPnL}
                setTotalPnL={setTotalPnL}
                resetTotalPnL={resetTotalPnL}
              />
            ) : (
              <Navigate to="/login-page-section" replace />
            )
          }
        />

        <Route path="/wallet-history" element={<WalletHistory />}></Route>

        <Route
          path="/recent-invests-history"
          element={
            <RecentInvestsHistory
              invests={invests}
              setInvests={setInvests}
              setTotalPnL={setTotalPnL}
            />
          }
        ></Route>

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
            isRegistered && tokenInfo ? (
              <InvestToken tokenInfo={tokenInfo} setInvests={setInvests} />
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
