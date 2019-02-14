import React from "react";
import "./style.css";

function ActiveMsg(props) {
  return (
    <div className="activeMsg">
        {props.children}
    </div>
  );
}

export default ActiveMsg;
