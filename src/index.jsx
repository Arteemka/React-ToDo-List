import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainForm from "./components/MainForm/MainForm";
import * as serviceWorker from "./serviceWorker";

const ToDoList = () => <MainForm />;

ReactDOM.render(<ToDoList />, document.getElementById("root"));

serviceWorker.unregister();
