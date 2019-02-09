import React from "react";
import "./style.css";

function Button(props) {
    return (
        <div className="buttonMain">
            <button>{props.children}</button>
        </div>
    )
}

export default Button;
