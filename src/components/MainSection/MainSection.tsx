import "../MainSection/mainSection.css";
import { useState } from "react";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Overview from "./Overview/Overview";

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
