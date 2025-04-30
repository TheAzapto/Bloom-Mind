import React from "react";
import "../css/bnt.css";

function Bnt({ text, action }) {
  return (
    <div>
      <button type="submit" onClick={action}>
        {text}
      </button>
    </div>
  );
}

export default Bnt;
