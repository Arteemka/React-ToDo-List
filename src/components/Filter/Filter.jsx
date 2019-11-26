import React from "react";

import Input from "../Input/Input";

const Filter = props => (
  <>
    <div className="filter-title">{props.title}</div>
    <Input
      placeholder="Текст"
      id="textFilter"
      type="text"
      onChange={props.filterList}
    />
    <Input
      placeholder="Дата"
      id="dateFilter"
      type="text"
      onChange={props.filterList}
    />
  </>
);

export default Filter;
