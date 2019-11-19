import React from "react";

class Input extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        id={this.props.id}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
