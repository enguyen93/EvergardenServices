import React from "react";
import "./style.css";

function FullText(props) {
  return (
    <div className="fullText">
      {props.children}
    </div>
  );
}

export default FullText;
