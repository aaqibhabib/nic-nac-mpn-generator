import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
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
                    {this.props.options.map((option, i) => {
                        return (
                            <Checkbox key={i}
                                label={option}
                                style={styles.checkbox}
                            />
                        );
                    })}
                </CardText>
            </Card>
        );
    }
}