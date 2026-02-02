import "./Footer.css";
import InvestButtonFooter from "./invest-button/InvestButtonFooter";
import PortfolioButton from "./portfolio-button/PortfolioButton";
import HomeButton from "./home-button/HomeButton";

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
