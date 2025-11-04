import React from "react";
import { FiChevronRight } from "react-icons/fi";
import "./RecetInvestsHeader.css";

function RecentInvestsHeader() {
  return (
    <div className="header-recent-invests">
      <span className="main-span-recent-invests">Recent Invests</span>
      <button className="small-span-recent-invests">
        See More
        <FiChevronRight
          size={18}
          color="#8a93b1" // той самий сіро-блакитний як у “See more”
          style={{ marginLeft: "4px", transition: "transform 0.2s ease" }}
        />
      </button>
    </div>
  );
}

export default RecentInvestsHeader;
