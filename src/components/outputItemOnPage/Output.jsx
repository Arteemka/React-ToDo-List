import React from "react";

class Output extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.toggleItemCheckStatus, false);
  }

  toggleItemCheckStatus = event => {
    if (event.target.textContent === "X") {
      event.target.parentNode.remove();
    } else if (event.target.parentNode.className === "output-item") {
      event.target.parentNode.classList.add("checked");
    } else {
    event.target.parentNode.classList.remove("checked");
    }
  };

  render() {
    return (
      <div className="output-title">
        <div className="output-item-title">
          <div className="output-item__title text-title">
            Поставленные задачи
          </div>
          <div className="output-item__title date-title">Дата</div>
          <div className="output-item__title close-title">&#10007;</div>
        </div>
        {this.props.lists.map(item => (
          <div key={item.id} className="output-item">
            <div className="output-item__info text">{item.text}</div>
            <div className="output-item__info date">{item.date}</div>
            <div className="output-item__info close">X</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Output;
