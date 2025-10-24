import "../MainSection/mainSection.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Overview from "./Overview/Overview";
import Footer from "./Footer/Footer";

export interface fnProps {
  currentSection: string;
  setCurrentSection?: React.Dispatch<React.SetStateAction<string>>;
}

function MainSection() {
  const [currentSection, setCurrentSection] = useState("");

  return (
    <>
      <Home />
      <Overview />
      <Footer />
    </>
  );
}

export default MainSection;
