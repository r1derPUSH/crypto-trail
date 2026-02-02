import type { InvestItem } from "../../../types/props";
import Header from "./header/Header";
import IncomeSection from "./income-section/IncomeSection";
import InvestButtons from "./invest-functional/InvestButtons";
import RecentInvests from "./recent-invests/RecentInvests";

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
