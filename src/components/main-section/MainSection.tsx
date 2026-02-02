import "./mainSection.css";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import type { InvestItem } from "../../types/props";

type Props = {
  invests: InvestItem[];
  setInvests: React.Dispatch<React.SetStateAction<InvestItem[]>>;
  totalPnL: number;
  setTotalPnL: React.Dispatch<React.SetStateAction<number>>;
  resetTotalPnL: () => void;
};

function MainSection({
  invests,
  setInvests,
  totalPnL,
  setTotalPnL,
  resetTotalPnL,
}: Props) {
  return (
    <>
      <Home
        invests={invests}
        setInvests={setInvests}
        totalPnL={totalPnL}
        setTotalPnL={setTotalPnL}
        resetTotalPnL={resetTotalPnL}
      />
      <Footer />
    </>
  );
}

export default MainSection;
