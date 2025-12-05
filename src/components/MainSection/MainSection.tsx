import "../MainSection/mainSection.css";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

export interface fnProps {
  currentSection: string;
  setCurrentSection?: React.Dispatch<React.SetStateAction<string>>;
}

function MainSection() {
  return (
    <>
      <Home />
      <Footer />
    </>
  );
}

export default MainSection;
