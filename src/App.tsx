import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import MainComponent from "./MainComponent";

function App() {
  const [tokenInfo, setTokenInfo] = useState([]);

  return <MainComponent />;
}

export default App;
