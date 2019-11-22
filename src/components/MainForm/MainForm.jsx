import React from "react";
import uuid from "uuid";

import Input from "../Input/Input";
import Button from "../Button/Button";
import OutputItems from "../OutputItemOnPage/Output";
import Sort from "../Sort/Sort";

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

  SortField = (event) => {
    switch (event.target.id) {
      case 'button-increase__text':
        this.setState({
          list: this.state.list.sort((a, b) => {
            return (a.text.toLowerCase() < b.text.toLowerCase()) ? -1 : 1;
          })
        })
        break;
      case 'button-decrease__text':
        this.setState({
          list: this.state.list.sort((a, b) => {
            return (a.text.toLowerCase() > b.text.toLowerCase()) ? -1 : 1;
          })
        })
        break;
      case 'button-increase__date':
        this.setState({
          list: this.state.list.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          })
        })
        break;
      case 'button-decrease__date':
        this.setState({
          list: this.state.list.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
        })
        break;
      default: console.log('error'); break;
    }
  }

  render() {
    return (
      <>
        <div className="backGround-font">
          <label className="label-text">Добавьте задачу</label>
          <Input id="text" type="text" onChange={this.onChange} />
          <Input id="date" type="date" onChange={this.onChange} />
          <Button button="Добавить" listChange={this.listChange} />
        </div>
        <Sort SortField={this.SortField} />
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
