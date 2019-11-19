import React from "react";

function Button(props) {
  return (
    <button type="button" className="button-add">
      {props.button}
    </button>
  );
}

export default Button;
