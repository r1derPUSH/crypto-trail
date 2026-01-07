import AvatarSection from "./AvatarSection/AvatarSection";
import SearchBar from "./SearchBar/SearchBar";
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
