import React from "react";

const Input = props => (
  <input
    type={props.type}
    id={props.id}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
);

export default Input;
