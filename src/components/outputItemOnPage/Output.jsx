import React from "react";

class Output extends React.Component {
  componentDidUpdate() {
    document.addEventListener("click", this.deletion, false);
  }

  deletion = event => {
    return event.target.parentNode.className === "output-item"
      ? event.target.parentNode.classList.add("checked")
      : event.target.parentNode.classList.remove("checked");
  };

  render() {
    return (
      <div className="output-title">
        <div className="output-item-title">
          <div className="output-item__title text-title">
            Поставленные задачи
          </div>
          <div className="output-item__title date-title">Дата</div>
        </div>
        {this.props.lists.map(item => (
          <div key={item.id} className="output-item">
            <div className="output-item__info text">{item.text}</div>
            <div className="output-item__info date">{item.date}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Output;
