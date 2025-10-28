import React from "react";
import AvatarSection from "./AvatarSection/AvatarSection";
import SearchBar from "./SearchBar";
import ChangeTheme from "./ChangeTheme/ChangeTheme";

function Header() {
  return (
    <div>
      <AvatarSection />
      <SearchBar />
      <ChangeTheme />
    </div>
  );
}

export default Header;
