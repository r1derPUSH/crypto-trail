import React from "react";
// import sunImg from "./img/icons8-sun-50.png";
import sunImg from "../img/icons8-sun-50.png";
import moonImg from "../img/icons8-moon-50.png";
// import moonImg from "./img/icons8-moon-50.png";
import "./ChangeTheme.css";

function ChangeTheme() {
  return (
    <div>
      <button className="changeTheme-button">
        <img src={sunImg} alt="" />
      </button>
    </div>
  );
}

export default ChangeTheme;
