import { useNavigate } from "react-router-dom";
import "./HistoryItem.css";
import Footer from "../../MainSection/Footer/Footer";
import Header from "../../MainSection/Home/Header/Header";

function HistoryItem({ invests, setInvests }: any) {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      {invests.map((item: any) => (
        <>
          <div className="invest-details">
            <div className="name">
              <span>{item.name}</span>
              <img src={item.tokenImage} alt="img" />
            </div>
            <div className="current-profit">
              <span>+74.5$</span>
            </div>
            <div className="creation-date">
              <span>{item.time}</span>
            </div>
          </div>
          <div className="delete-button">
            <button></button>
          </div>
        </>
      ))}
      <Footer />
    </>
  );
}

export default HistoryItem;
