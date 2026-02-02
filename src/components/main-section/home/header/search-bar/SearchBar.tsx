import "./SearchBar.css";
import searchBarImg from "../img/icons8-search-30.png";

function SearchBar() {
  return (
    <div>
      <button className="searchBar-button">
        <img className="searchBar-img" src={searchBarImg} alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
