import React from 'react';
import {Row, Input} from 'react-materialize';

export default class CheckboxQuestion extends React.Component {
    render() {
        return (
            <Row>
                <h3>{this.props.prompt}</h3>
                {this.props.options.map((option, i) => {
                    return (
                        <Row key={i}>
                            <Input name={this.props.id} type='checkbox' value={option} label={option} />
                        </Row>);
                })}
            </Row>
        );
    }
}