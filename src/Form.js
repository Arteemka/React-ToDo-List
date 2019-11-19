import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="backGround-font">
        <label className="label-text">Добавьте задачу</label>
        <input className="input text" />
        <input type="date" className="input date" />
        <button type="button" className="button-add">
          Добавить
        </button>
      </div>
    );
  }
}

export default Form;
