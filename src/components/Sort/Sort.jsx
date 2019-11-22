import React from 'react';

import SortField from "../SortField/SortField";

const Sort = () => (
    <>
        <SortField
            nameButton="по возрастанию текста"
            id="button-increase__text"
            sortField={this.props.sortField} />
        <SortField
            nameButton="по убыванию текста"
            id="button-decrease__text"
            sortField={this.props.sortField} />
        <SortField nameButton="по возрастанию даты"
            id="button-increase__date"
            sortField={this.props.sortField} />
        <SortField
            nameButton="по убыванию даты"
            id="button-decrease__date"
            sortField={this.props.sortField} />
    </>
);

export default Sort;