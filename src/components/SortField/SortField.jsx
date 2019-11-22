import React from 'react';

const SortField = (props) => (
  <button type="button" id={props.id} onClick={props.sortField}>
    {props.nameButton}
  </button>
);

export default SortField;
