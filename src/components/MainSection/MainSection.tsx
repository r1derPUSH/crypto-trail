import "../MainSection/mainSection.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Overview from "./Overview/Overview";
import Footer from "./Footer/Footer";

function MainSection() {
  return (
    <>
      <Home />
      <Overview />
      <Footer />
    </>
  );
}

export default MainSection;
