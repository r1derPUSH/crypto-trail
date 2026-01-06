import "./mainSection.css";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function MainSection({ invests, setInvests }: any) {
  return (
    <>
      <Home invests={invests} setInvests={setInvests} />
      <Footer />
    </>
  );
}

export default MainSection;
