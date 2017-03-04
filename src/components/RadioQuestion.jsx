import React from 'react';
import _ from 'lodash';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
    radio: {
        marginBottom: 16,
    },
};

export default class RadioQuestion extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onChange');
    }
    onChange(e, value) {
        const key = `${this.props.pageID}-${this.props.groupID}-${this.props.id}`;
        this.props.onChange(key, value);
    }
    render() {
        return (
            <Card title={this.props.prompt}>
                <CardHeader title={this.props.prompt} />
                <CardText>
                    <RadioButtonGroup name={this.props.id} onChange={this.onChange} valueSelected={this.props.selection}>
                        {this.props.options.map(option => (
                            <RadioButton
                              key={option}
                              value={option}
                              label={option}
                              style={styles.radio}
                            />
                            ))}
                    </RadioButtonGroup>
                </CardText>
            </Card>
        );
    }
}

RadioQuestion.propTypes = {
    id: React.PropTypes.string.isRequired,
    pageID: React.PropTypes.number.isRequired,
    groupID: React.PropTypes.number.isRequired,
    prompt: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
    selection: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
};
