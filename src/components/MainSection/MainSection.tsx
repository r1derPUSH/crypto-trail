import "./mainSection.css";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function MainSection({ invests, setInvests, livePnL, setTotalPnL }: any) {
  return (
    <>
      <Home
        invests={invests}
        setInvests={setInvests}
        livePnL={livePnL}
        setTotalPnL={setTotalPnL}
      />
      <Footer />
    </>
  );
}

export default MainSection;
