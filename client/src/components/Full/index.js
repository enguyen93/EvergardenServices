import React from "react";
import "./style.css";

function Full(props) {
  return (
    <div className="full">
      {props.children}
    </div>
  );
}

export default Full;
