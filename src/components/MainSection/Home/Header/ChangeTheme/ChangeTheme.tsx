import { useState } from "react";
import sunImg from "../img/icons8-sun-50.png";
import moonImg from "../img/icons8-moon-50.png";
import "./ChangeTheme.css";

function ChangeTheme() {
  const [isDark, setIsDark] = useState(true);

  const changeTheme = () => {
    const body = document.body;
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      setIsDark(false);
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      setIsDark(true);
    }
  };

  return (
    <div>
      <button onClick={changeTheme} className="changeTheme-button">
        <img
          className="change-theme-img"
          src={isDark ? sunImg : moonImg}
          alt=""
        />
      </button>
    </div>
  );
}

export default ChangeTheme;
