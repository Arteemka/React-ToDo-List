import React from "react";

const Input = (props) => (
  <input
    type={props.type}
    id={props.id}
    onChange={props.onChange}
  />
);

export default Input;
