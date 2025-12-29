import sunImg from "../img/icons8-sun-50.png";
import "./ChangeTheme.css";

function ChangeTheme() {
  const changeTheme = () => {
    const body = document.body;

    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    }
  };

  return (
    <div>
      <button onClick={changeTheme} className="changeTheme-button">
        <img className="change-theme-img" src={sunImg} alt="" />
      </button>
    </div>
  );
}

export default ChangeTheme;
