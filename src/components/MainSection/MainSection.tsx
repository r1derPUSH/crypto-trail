import "./mainSection.css";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function MainSection({
  invests,
  setInvests,
  livePnL,
  totalPnL,
  setTotalPnL,
  resetTotalPnL,
}: any) {
  return (
    <>
      <Home
        invests={invests}
        setInvests={setInvests}
        livePnL={livePnL}
        totalPnL={totalPnL}
        setTotalPnL={setTotalPnL}
        resetTotalPnL={resetTotalPnL}
      />
      <Footer />
    </>
  );
}

export default MainSection;
