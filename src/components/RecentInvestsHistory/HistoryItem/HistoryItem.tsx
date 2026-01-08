import { useNavigate } from "react-router-dom";
import "./HistoryItem.css";
import Footer from "../../MainSection/Footer/Footer";
import Header from "../../MainSection/Home/Header/Header";

function HistoryItem() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="invest-details">
        <div className="name">
          <span>BTC</span>
          <img src="" alt="img" />
        </div>
        <div className="current-profit">
          <span>+74.5$</span>
        </div>
        <div className="creation-date">
          <span>08.02.2026 | 16:42</span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HistoryItem;
