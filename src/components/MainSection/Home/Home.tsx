import type { InvestItem } from "../../../types/props";
import Header from "./Header/Header";
import IncomeSection from "./IncomeSection/IncomeSection";
import InvestButtons from "./InvestFunctional/InvestButtons";
import RecentInvests from "./RecentInvests/RecentInvests";

type HomeProps = {
  invests: InvestItem[];
  setInvests: React.Dispatch<React.SetStateAction<InvestItem[]>>;
  totalPnL: number;
  setTotalPnL: React.Dispatch<React.SetStateAction<number>>;
  resetTotalPnL: () => void;
};

function Home({
  invests,
  setInvests,
  totalPnL,
  setTotalPnL,
  resetTotalPnL,
}: HomeProps) {
  return (
    <>
      <Header />
      <IncomeSection
        invests={invests}
        totalPnL={totalPnL}
        resetTotalPnL={resetTotalPnL}
      />
      <InvestButtons />
      <RecentInvests
        invests={invests}
        setInvests={setInvests}
        setTotalPnL={setTotalPnL}
      />
    </>
  );
}

export default Home;
