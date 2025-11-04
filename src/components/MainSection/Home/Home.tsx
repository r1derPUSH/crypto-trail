import Header from "./Header/Header";
import IncomeSection from "./IncomeSection/IncomeSection";
import InvestButtons from "./InvestFunctional/InvestButtons";
import RecentInvests from "./RecentInvests/RecentInvests";

function Home() {
  return (
    <>
      <Header />
      <IncomeSection />
      <InvestButtons />
      <RecentInvests />
    </>
  );
}

export default Home;
