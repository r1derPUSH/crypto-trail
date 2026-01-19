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
import RecentInvestsHistory from "./components/RecentInvestsHistory/HistoryParent/RecentInvestsHistory";
import { useCoins } from "./context/CoinsContext";

function MainComponent() {
  const { coins } = useCoins();

  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);

  const [isRegistered, setIsRegistered] = useState(false);
  const [login, setLogin] = useState("");
  const [userAvatar, setUserAvatar] = useState<string | null>(null);
  const [registerDate, setRegisterDate] = useState<string | null>(null);
  const [invests, setInvests] = useState<any[]>(() => {
    const saved = localStorage.getItem("invests");
    return saved ? JSON.parse(saved) : [];
  });
  const [totalPnL, setTotalPnL] = useState<number>(() => {
    const saved = localStorage.getItem("totalPnL");
    return saved ? Number(saved) : 0;
  });
  const livePnL = invests.reduce((sum: number, item: any) => {
    const coin = coins.find(
      (c) => c.name.toLowerCase() === item.name.toLowerCase(),
    );

    const currentPrice = coin?.current_price ?? item.buyPrice;
    const currentValue = item.tokenAmount * currentPrice;

    return sum + (currentValue - item.investedValue);
  }, 0);

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
                livePnL={livePnL}
                totalPnL={totalPnL}
                setTotalPnL={setTotalPnL}
              />
            ) : (
              <Navigate to="/login-page-section" replace />
            )
          }
        />

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
