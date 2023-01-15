import React from 'react';
import DataTypeLabel from './DataTypeLabel';

//theme
import Theme from './../../themes/getStyle';
import { getSensitiveDataClasses } from '../../helpers/matchSensitiveData';

export default class extends React.PureComponent {
    render() {
        const type_name = 'int';
        const { props } = this;

        const path = `${this.props.parent_stack.map(e => e[0]).join('.')}.${
            this.props.variable.name
        }`;
        const sensitiveData = getSensitiveDataClasses(
            path,
            props.regexToSensitiveData
        );

        return (
            <div {...Theme(props.theme, 'integer')}>
                <DataTypeLabel type_name={type_name} {...props} />
                {this.props.value}
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
