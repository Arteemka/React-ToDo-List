import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./Form";
import * as serviceWorker from "./serviceWorker";

class ToDoList extends React.Component {
  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

ReactDOM.render(<ToDoList />, document.getElementById("root"));

serviceWorker.unregister();
