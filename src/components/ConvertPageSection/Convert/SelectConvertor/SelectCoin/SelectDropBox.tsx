import React from "react";
import "./SelectDropBox.css";
import { useState } from "react";

function SelectDropBox() {
  const [open, setOpen] = useState(false);
  const coins = [
    { name: "BTC", price: 100940, id: 1 },
    { name: "ETH", price: 3350, id: 2 },
    { name: "ARB", price: 0.38, id: 3 },
    { name: "FF", price: 0.17, id: 4 },
  ];

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

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
            className="dropdown-input"
            name="coin-search"
            id="coin-search"
            placeholder="Search coin..."
          />
          <ul className="parent-li">
            {coins.map((item) => (
              <li key={Math.random()} className="li-item">
                {item.name}:{item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectDropBox;
