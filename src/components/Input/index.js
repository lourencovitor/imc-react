import React from "react";

function Input(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}:</label>
      <input
        type={props.type}
        id={props.id}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        className="form-control"
      />
    </div>
  );
}

export default Input;
