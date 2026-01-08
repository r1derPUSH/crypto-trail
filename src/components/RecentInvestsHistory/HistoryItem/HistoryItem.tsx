import "./HistoryItem.css";
import Footer from "../../MainSection/Footer/Footer";
import Header from "../../MainSection/Home/Header/Header";

function HistoryItem({ invests, setInvests }: any) {
  return (
    <div className="container">
      <Header />
      {invests.map((item: any) => (
        <>
          <div className="invest-details">
            <div className="top-row">
              <div className="token-info">
                <img src={item.tokenImage} alt={item.name} />
                <span className="token-name">{item.name}</span>
              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  setInvests((prev: any) =>
                    prev.filter((it: any) => it.id !== item.id)
                  )
                }
              >
                ✕
              </button>
            </div>

            <div className="current-profit">
              <span>
                {item.targetProfit >= 0 ? "+" : ""}
                {item.targetProfit.toFixed(2)}$
              </span>
            </div>

            <div className="creation-date">
              <span>{item.time}</span>
            </div>
          </div>
        </>
      ))}
      <Footer />
    </div>
  );
}

export default HistoryItem;
