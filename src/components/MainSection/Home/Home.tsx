import Header from "./Header/Header";
import IncomeSection from "./IncomeSection/IncomeSection";
import InvestButtons from "./InvestFunctional/InvestButtons";
import RecentInvests from "./RecentInvests/RecentInvests";

function Home({ invests, setInvests, livePnL, totalPnL, setTotalPnL }: any) {
  return (
    <>
      <Header />
      <IncomeSection invests={invests} livePnL={livePnL} totalPnL={totalPnL} />
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
