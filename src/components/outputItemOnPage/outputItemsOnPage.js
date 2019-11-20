import React from "react";

class OutputItems extends React.Component {
  render() {
    return (
      <div className="output-on-page">
        <div className="flex-container-title">
          <div className="flex-item">Поставленные задачи</div>
          <div className="flex-item">Дата</div>
        </div>
        {this.props.lists.map(item => (
          <div key={item.id} className="flex-container-info">
            <div className="flex-item-info">{item.text}</div>
            <div className="flex-item-info">{item.date}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default OutputItems;
