import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", date: "" };

    this.сhangeText = this.сhangeText.bind(this);
    this.сhangeDate = this.сhangeDate.bind(this);
  }

  сhangeText(event) {
    this.setState({ text: event.target.value });
  }

  сhangeDate(event) {
    this.setState({ date: event.target.value });
  }

  render() {
    return (
      <>
        <input
          className="input text"
          value={this.state.text}
          onChange={this.сhangeText}
        />
        <input
          type="date"
          className="input date"
          value={this.state.date}
          onChange={this.сhangeDate}
        />
      </>
    );
  }
}

export default Input;
