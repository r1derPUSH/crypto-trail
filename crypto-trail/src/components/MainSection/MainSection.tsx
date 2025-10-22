import "../MainSection/mainSection.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Overview from "./Overview/Overview";
import Footer from "./Footer/Footer";

function MainSection() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </HashRouter>
  );
}

export default MainSection;
