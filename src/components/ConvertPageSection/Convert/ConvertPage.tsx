import React from "react";

function ConvertPage() {
  return (
    <div className="convert-header">
      <div className="convert-header-section">
        <img src="" alt="Swap" />
        <span>Crypto Trail</span>
        <span>Convert</span>
      </div>
      <div className="convert-section">
        <div className="convert-from"></div>
        <div className="convert-to"></div>
      </div>
      <button>Convert</button>
      <span>Instant convertion with live rates</span>
    </div>
  );
}

export default ConvertPage;
