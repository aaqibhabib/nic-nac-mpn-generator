import React from 'react';
import _ from 'lodash';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    checkbox: {
        marginBottom: 16,
    },
};

class MPNCheckbox extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onCheck');
    }
    onCheck(e, isChecked) {
        this.props.onCheck(this.props.label, isChecked);
    }
    render() {
        return (<Checkbox
          label={this.props.label}
          style={styles.checkbox}
          onCheck={this.onCheck}
          checked={this.props.checked}
        />);
    }
}

MPNCheckbox.propTypes = {
    label: React.PropTypes.string.isRequired,
    onCheck: React.PropTypes.func.isRequired,
    checked: React.PropTypes.bool.isRequired,
};

// eslint-disable-next-line react/no-multi-comp
export default class CheckboxQuestion extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onChange');
    }
    onChange(label, isChecked) {
        const key = `${this.props.pageID}-${this.props.groupID}-${this.props.id}`;
        const selectionStates = {
            ...this.props.selection,
            [label]: isChecked,
        };
        this.props.onChange(key, selectionStates);
    }
    render() {
        return (
            <Card>
                <CardHeader
                  title={this.props.prompt}
                />
                <CardText>
                    {this.props.options.map(option => (<MPNCheckbox
                      key={option}
                      label={option}
                      style={styles.checkbox}
                      onCheck={this.onChange}
                      checked={!!this.props.selection[option]}
                    />),
                    )}
                </CardText>
            </Card>
        );
    }
}

CheckboxQuestion.propTypes = {
    id: React.PropTypes.string.isRequired,
    pageID: React.PropTypes.number.isRequired,
    groupID: React.PropTypes.number.isRequired,
    prompt: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    selection: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
};
