import React from "react";
import "./style.css";

function ActiveMsgBar(props) {
  return (
    <div className="activeMsgBar">
      <li>{props.children}</li>
    </div>
  );
}

export default ActiveMsgBar;
