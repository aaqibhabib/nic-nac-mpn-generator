import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    checkbox: {
        marginBottom: 16,
    },
};

export default class CheckboxQuestion extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                  title={this.props.prompt}
                />
                <CardText>
                    {this.props.options.map(option => (
                        <Checkbox
                          key={option}
                          label={option}
                          style={styles.checkbox}
                        />
                        ))}
                </CardText>
            </Card>
        );
    }
}

CheckboxQuestion.propTypes = {
    prompt: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
};
