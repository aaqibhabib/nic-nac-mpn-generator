import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

const styles = {
    radio: {
        marginBottom: '24px',
        fontSize: '1.4em',
        fontWeight: 'lighter',
        color: '#546E7A'
    },
};

export default class TextQuestion extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onChange');
    }
    onChange(e) {
        const key = `${this.props.pageID}-${this.props.groupID}-${this.props.id}`;
        const value = e.target.value;
        this.props.onChange(key, value);
    }
    render() {
        return (
            <Card title={this.props.prompt}>
                <div className ='cardPadding'>
                <CardTitle ><div className="questionTitleText">{this.props.prompt}</div></CardTitle>
                <CardText>
                    <TextField
                      id={this.props.id}
                      hintText={this.props.hintText}
                      value={this.props.selection}
                      onChange={this.onChange}
                      fullWidth
                    />
                </CardText>
                </div>
            </Card>
        );
    }
}

TextQuestion.defaultProps = {
    hintText: '',
};

TextQuestion.propTypes = {
    id: React.PropTypes.string.isRequired,
    pageID: React.PropTypes.number.isRequired,
    groupID: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]).isRequired,
    prompt: React.PropTypes.string.isRequired,
    selection: React.PropTypes.string.isRequired,
    hintText: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
};
