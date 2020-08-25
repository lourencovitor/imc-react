import React from "react";

function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
    >
      {props.label}
    </button>
  );
}

export default Button;
