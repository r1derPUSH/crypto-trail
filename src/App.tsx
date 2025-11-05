import { HashRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection/MainSection";
import InvestPage from "./components/InvestPageSection/Invest/InvestPage";
import "./components/MainSection/mainSection.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainSection />}></Route>
        <Route path="/invest-page-section" element={<InvestPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
