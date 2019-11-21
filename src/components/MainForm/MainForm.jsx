import React from "react";
import uuid from "uuid";

import Input from "../Input/Input";
import Button from "../Button/Button";
import OutputItems from "../OutputItemOnPage/Output";

class MainForm extends React.Component {
  state = { text: "", date: "", list: [] };

  onChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  listChange = () => {
    this.setState(prevState => {
      return {
        list: [
          ...prevState.list,
          {
            id: uuid.v4(),
            text: prevState.text,
            date: prevState.date,
            check: false
          }
        ],
        text: "",
        date: ""
      };
    });
  };

  deleteItem = (event, id) => {
    event.stopPropagation();
    let newList = this.state.list.filter(function(num) {
      return num.id !== id;
    });
    
    this.setState({ list: newList });
  };

  toggleItemCheck = id => {
    let items = this.state.list.map(num => {
      return num;
    });
    let status = items.find(item => item.id === id);

    status.check = !status.check;
    this.setState({ list: items });
  };

  render() {
    return (
      <>
        <div className="backGround-font">
          <label className="label-text">Добавьте задачу</label>
          <Input id="text" type="text" onChange={this.onChange} />
          <Input id="date" type="date" onChange={this.onChange} />
          <Button button="Добавить" listChange={this.listChange} />
        </div>
        <OutputItems
          lists={this.state.list}
          deleteItem={this.deleteItem}
          toggleItemCheck={this.toggleItemCheck}
        />
      </>
    );
  }
}

export default MainForm;
