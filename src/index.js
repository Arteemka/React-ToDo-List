import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainForm from "./components/MainForm/MainForm";
import * as serviceWorker from "./serviceWorker";

function ToDoList() {
  return <MainForm />;
}

ReactDOM.render(<ToDoList />, document.getElementById("root"));

serviceWorker.unregister();
