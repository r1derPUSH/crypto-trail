import "./Footer.css";
import InvestButtonFooter from "./InvestButton/InvestButtonFooter";
import PortfolioButton from "./PortfolioButton/PortfolioButton";
import HomeButton from "./HomeButton/HomeButton";

function Footer() {
  return (
    <footer className="footer">
      <HomeButton />
      <InvestButtonFooter />
      <PortfolioButton />
    </footer>
  );
}

export default Footer;
