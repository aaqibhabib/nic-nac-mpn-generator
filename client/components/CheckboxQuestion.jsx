import React from 'react';
import { Card, Col, Row, Input } from 'react-materialize';

export default class CheckboxQuestion extends React.Component {
    render() {
        return (
            <Row>
                <Card className='' textClassName='' title={this.props.prompt}>
                    {this.props.options.map((option, i) => {
                        return (
                            <Row key={i}>
                                <Input name={this.props.id} type='checkbox' value={option} label={option} />
                            </Row>
                        );
                    })}
                </Card>
            </Row>
        );
    }
}