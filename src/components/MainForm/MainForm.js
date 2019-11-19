import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

function MainForm() {
  return (
    <div className="backGround-font">
      <label className="label-text">Добавьте задачу</label>
      <Input />
      <Button button="Добавить" />
    </div>
  );
}

export default MainForm;
