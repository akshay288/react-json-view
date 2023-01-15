import React from 'react';
import DataTypeLabel from './DataTypeLabel';

//theme
import Theme from './../../themes/getStyle';
import { getSensitiveDataClasses } from '../../helpers/matchSensitiveData';

export default class extends React.PureComponent {
    render() {
        const type_name = 'date';
        const { props } = this;
        const display_options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };

        const path = `${this.props.parent_stack.map(e => e[0]).join('.')}.${
            this.props.variable.name
        }`;
        const sensitiveData = getSensitiveDataClasses(
            path,
            props.regexToSensitiveData
        );

        return (
            <div {...Theme(props.theme, 'date')}>
                <DataTypeLabel type_name={type_name} {...props} />
                <span class="date-value" {...Theme(props.theme, 'date-value')}>
                    {props.value.toLocaleTimeString('en-us', display_options)}
                </span>
                {sensitiveData.length > 0 ? (
                    <span
                        class="sensitive-data-classes"
                        {...Theme(props.theme, 'sensitive-data-classes')}
                    >
                        {sensitiveData.join(' ')}
                    </span>
                ) : null}
            </div>
        );
    }
}
