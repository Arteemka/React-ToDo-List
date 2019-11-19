import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

class MainForm extends React.Component {
  state = { text: "", date: "" };

  onChange = event => {
    let { id, value } = event.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <div className="backGround-font">
        <label className="label-text">Добавьте задачу</label>
        <Input id="text" type="text" onChange={this.onChange} />
        <Input id="date" type="date" onChange={this.onChange} />
        <Button button="Добавить" />
      </div>
    );
  }
}

export default MainForm;
