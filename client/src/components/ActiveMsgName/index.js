import React from "react";
import "./style.css";

function ActiveMsgName(props) {
  return (
    <div className="activeMsgName">
      {props.children}
    </div>
  );
}

export default ActiveMsgName;
