import React from 'react';
import { Card, Col, Row, Input } from 'react-materialize';

export default class RadioQuestion extends React.Component {
    render() {
        return (
            <Row>
                <Card className='' textClassName='' title={this.props.prompt}>
                    {this.props.options.map((option, i) => {
                        return (
                            <Row key={i}>
                                <Input name={this.props.id} type='radio' value={option} label={option} />
                            </Row>
                        );
                    })}
                </Card>
            </Row>
        );
    }
}