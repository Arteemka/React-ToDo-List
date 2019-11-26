import React from 'react';

import SortField from "../SortField/SortField";

const Sort = (props) => (
    <>
        <SortField
            nameButton="по возрастанию текста"
            id="button-increase__text"
            sortField={props.sortField} />
        <SortField
            nameButton="по убыванию текста"
            id="button-decrease__text"
            sortField={props.sortField} />
        <SortField nameButton="по возрастанию даты"
            id="button-increase__date"
            sortField={props.sortField} />
        <SortField
            nameButton="по убыванию даты"
            id="button-decrease__date"
            sortField={props.sortField} />
    </>
);

export default Sort;