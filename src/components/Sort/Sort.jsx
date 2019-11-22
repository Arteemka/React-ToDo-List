import React from 'react';

import SortField from "../SortField/SortField";

class Sort extends React.Component {
    render() {
        return (
            <>
                <SortField
                    nameButton="по возрастанию текста"
                    id="button-increase__text"
                    SortField={this.props.SortField} />
                <SortField
                    nameButton="по убыванию текста"
                    id="button-decrease__text"
                    SortField={this.props.SortField} />
                <SortField nameButton="по возрастанию даты"
                    id="button-increase__date"
                    SortField={this.props.SortField} />
                <SortField
                    nameButton="по убыванию даты"
                    id="button-decrease__date"
                    SortField={this.props.SortField} />
            </>
        );
    }
}
export default Sort;