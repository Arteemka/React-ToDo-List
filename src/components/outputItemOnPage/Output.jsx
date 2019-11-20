import React from "react";

function Output (props){
    return (
      <div className="output-title">
        <div className="output-item-title">
          <div className="output-item__title text-title">Поставленные задачи</div>
          <div className="output-item__title date-title">Дата</div>
        </div>
        {props.lists.map(item => (
          <div key={item.id} className="output-item">
            <div className="output-item__info text">{item.text}</div>
            <div className="output-item__info date">{item.date}</div>
          </div>
        ))}
      </div>
    );
}

export default Output;
