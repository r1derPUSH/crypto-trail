import { FiChevronRight } from "react-icons/fi";
import "./RecetInvestsHeader.css";
import { useNavigate } from "react-router-dom";

function RecentInvestsHeader() {
  const navigate = useNavigate();

  return (
    <div className="header-recent-invests">
      <span className="main-span-recent-invests">Recent Invests</span>
      <button
        onClick={() => navigate("/recent-invests-history")}
        className="small-span-recent-invests"
      >
        See More
        <FiChevronRight
          size={18}
          color="#8a93b1"
          style={{ marginLeft: "4px", transition: "transform 0.2s ease" }}
        />
      </button>
    </div>
  );
}

export default RecentInvestsHeader;
