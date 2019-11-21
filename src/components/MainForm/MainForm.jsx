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

    this.setState({
      list: this.state.list.filter(num => {
        return num.id !== id;
      })
    });
  };

  toggleItemCheck = id => {
    this.setState(state => ({
      list: state.list.map(item => {
        if (item.id === id) {
          return { ...item, check: !item.check };
        }
        return item;
      })
    }));
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
