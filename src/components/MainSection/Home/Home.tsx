import Header from "./Header/Header";
import IncomeSection from "./IncomeSection/IncomeSection";
import InvestButtons from "./InvestFunctional/InvestButtons";
import RecentInvests from "./RecentInvests/RecentInvests";

function Home({ invests }: any) {
  return (
    <>
      <Header />
      <IncomeSection />
      <InvestButtons />
      <RecentInvests invests={invests} />
    </>
  );
}

export default Home;
