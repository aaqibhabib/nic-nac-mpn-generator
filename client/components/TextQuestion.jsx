import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { grey900, cyan500 } from 'material-ui/styles/colors';

const styles = {
    floatingLabelStyle: {
        color: grey900,
    },
    floatingLabelFocusStyle: {
        color: cyan500, // change to pramry theme color
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
                <div className="cardPadding">
                    {this.props.prompt ? <CardTitle ><div className="questionTitleText">{this.props.prompt}</div></CardTitle> : null}
                    <CardText>
                        <TextField
                          fullWidth
                          id={this.props.id}
                          floatingLabelText={this.props.floatingLabelText}
                          hintText={this.props.hintText}
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          value={this.props.selection}
                          onChange={this.onChange}
                          multiLine={!!this.props.multiLine}
                          rows={this.props.rows}
                          textareaStyle={this.props.textareaStyle}
                        />
                    </CardText>
                </div>
            </Card>
        );
    }
}

TextQuestion.defaultProps = {
    hintText: '',
    floatingLabelText: null,
    multiLine: false,
    prompt: null,
};

TextQuestion.propTypes = {
    id: React.PropTypes.string.isRequired,
    pageID: React.PropTypes.number.isRequired,
    groupID: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]).isRequired,
    prompt: React.PropTypes.string,
    selection: React.PropTypes.string.isRequired,
    hintText: React.PropTypes.string,
    floatingLabelText: React.PropTypes.string,
    multiLine: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
};
