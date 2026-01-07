import AvatarSection from "./AvatarSection/AvatarSection";
import ChangeTheme from "./ChangeTheme/ChangeTheme";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <AvatarSection />
      <div className="icons-container">
        <ChangeTheme />
      </div>
    </div>
  );
}

export default Header;
