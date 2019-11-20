import React from "react";

const Button = props => (
  <button type="button" className="button-add" onClick={props.listChange}>
    {props.button}
  </button>
);

export default Button;
