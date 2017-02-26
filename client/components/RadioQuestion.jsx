import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
    radio: {
        marginBottom: 16,
    },
};

export default class RadioQuestion extends React.Component {
    render() {
        return (
            <Card className='' title={this.props.prompt}>
                <CardHeader title={this.props.prompt} />
                <CardText>
                    <RadioButtonGroup name={this.props.id}>
                        {this.props.options.map((option, i) => {
                            return (
                                <RadioButton key={i}
                                    value={option}
                                    label={option}
                                    style={styles.radio}
                                />
                            );
                        })}
                    </RadioButtonGroup>
                </CardText>
            </Card>
        );
    }
}