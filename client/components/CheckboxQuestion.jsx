import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

const styles = {
    checkbox: {
        marginBottom: '16px',
        fontSize: '16px',
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
        if (this.props.label === 'Other:') {
            return (<div className="other" styles={{display:'flex',flexDirection:'row'}}><Checkbox
              label={this.props.label}
              style={{marginBottom:'16px',fontSize:'16px',width:'auto',flex:'1'}}
              onCheck={this.onCheck}
              checked={this.props.checked}
            />
                <TextField
                  value={this.other}
                  onChange={this.onOther}
                  style={{height:'36px',marginLeft:'12px',flex:'1'}}
                />
            </div>
            );
        }
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
                <CardTitle ><div style={{ fontSize: 20 }}>{this.props.prompt}</div></CardTitle>
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
