import "./mainSection.css";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function MainSection({ invests }: any) {
  return (
    <>
      <Home invests={invests} />
      <Footer />
    </>
  );
}

export default MainSection;
