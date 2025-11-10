import React from "react";
import "./SelectValueDropBox.css";
import { useState } from "react";

function SelectValueDropBox() {
  const [open, setOpen] = useState(false);
  const [coins, setCoins] = useState([
    { name: "BTC", price: 100940, id: 1 },
    { name: "ETH", price: 3350, id: 2 },
    { name: "ARB", price: 0.38, id: 3 },
    { name: "FF", price: 0.17, id: 4 },
  ]);

  const [search, setSearch] = useState("");

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const filtered = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="select-parent">
      <div className="dropdown-container">
        <button onClick={handleOpen} className="dropdown-btn">
          ⚡ Select Currenct
        </button>
      </div>

      {open && (
        <div className="dropdown-child">
          <input
            type="text"
            onChange={handleChange}
            className="dropdown-input"
            name="coin-search"
            id="coin-search"
            placeholder="Search coin..."
          />
          <ul className="parent-li">
            {filtered.map((item) => (
              <li key={item.id} className="li-item">
                {item.name}:{item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectValueDropBox;
