import AvatarSection from "./avatar-section/AvatarSection";
import ChangeTheme from "./change-theme/ChangeTheme";
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
