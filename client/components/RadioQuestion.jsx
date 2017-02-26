import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
    radio: {
        marginBottom: 16,
    },
};

export default class RadioQuestion extends React.Component {
    render() {
        return (
            <Card className="" title={this.props.prompt}>
                <CardHeader title={this.props.prompt} />
                <CardText>
                    <RadioButtonGroup name={this.props.id}>
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
    prompt: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
};
