import React from "react";
import "./style.css";

function FormWrapper(props) {
  return (
    <div className="formWrapper">
        {props.children}
    </div>
  );
}

export default FormWrapper;
