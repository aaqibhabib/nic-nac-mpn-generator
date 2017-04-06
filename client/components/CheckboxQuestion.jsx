import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

const styles = {
    checkbox: {
        marginBottom: '24px',
        fontSize: '1.4em',
        fontWeight: 'lighter',
        color: '#546E7A',
    },
};

class MPNCheckbox extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onCheck', 'onOther');
    }
    onCheck(e, isChecked) {
        this.props.onCheck(this.props.label, isChecked);
    }
    onOther(e) {
        const value = e.target.value;
        this.props.onCheck(this.props.label, value);
    }
    render() {
        if (this.props.label === 'Other:') {
            return (<div className="other" style={{ display: 'flex', flexDirection: 'row' }}>
                <Checkbox
                  label={this.props.label}
                  style={{ marginBottom: '24px', fontSize: '1.4em', fontWeight: 'lighter', color: '#546E7A', width: 'auto', flex: '1' }}
                  checked={!!this.props.checked}
                />
                <TextField
                  id={`${this.props.label}-other`}
                  value={this.props.checked || ''}
                  onChange={this.onOther}
                  style={{ height: '36px', marginLeft: '12px', flex: '1' }}
                />
            </div>
            );
        }
        return (<Checkbox
          label={this.props.label}
          style={styles.checkbox}
          onCheck={this.onCheck}
          checked={!!this.props.checked}
        />);
    }
}

MPNCheckbox.defaultProps = {
    checked: false,
};

MPNCheckbox.propTypes = {
    label: React.PropTypes.string.isRequired,
    onCheck: React.PropTypes.func.isRequired,
    checked: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]).isRequired,
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
                <div className="cardPadding">
                    <CardTitle ><div className="questionTitleText">{this.props.prompt}</div></CardTitle>
                    <CardText>
                        {this.props.options.map(option => (<MPNCheckbox
                          key={option}
                          label={option}
                          style={styles.checkbox}
                          onCheck={this.onChange}
                          checked={this.props.selection[option]}
                        />),
                        )}
                    </CardText>
                </div>
            </Card>
        );
    }
}

CheckboxQuestion.propTypes = {
    id: React.PropTypes.string.isRequired,
    pageID: React.PropTypes.number.isRequired,
    groupID: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]).isRequired,
    prompt: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    selection: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
};
