import sunImg from "../img/icons8-sun-50.png";
import "./ChangeTheme.css";

function ChangeTheme() {
  return (
    <div>
      <button className="changeTheme-button">
        <img className="change-theme-img" src={sunImg} alt="" />
      </button>
    </div>
  );
}

export default ChangeTheme;
