import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
    radio: {
        marginBottom: '24px',
        fontSize: '1.4em',
        fontWeight: 'lighter',
        color: '#546E7A',
    },
};

export default class RadioQuestion extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onChange');
    }
    onChange(e, value) {
        const key = `${this.props.pageID}-${this.props.groupID}-${this.props.id}`;
        this.props.onChange(key, value);
    }
    render() {
        return (
            <Card title={this.props.prompt} >
                <div className="cardPadding">

                    <CardTitle ><div className="questionTitleText">{this.props.prompt}</div></CardTitle>
                    <CardText>
                        <RadioButtonGroup name={this.props.id} onChange={this.onChange} valueSelected={this.props.selection}>
                            {this.props.options.map((op) => {
                                const key = `${this.props.pageID}-${this.props.groupID}-${this.props.id}`;
                                let option = op;
                                if (key === '1-HIPAA Covered Entity-p-2 g-1 q-1') { option = _.template(option)({ 'techName': this.props.techName || 'our product' }); }
                                return (<RadioButton
                                  key={option}
                                  value={option}
                                  label={option}
                                  style={styles.radio}
                                />);
                            })}
                        </RadioButtonGroup>
                    </CardText>
                </div>
            </Card>
        );
    }
}

RadioQuestion.propTypes = {
    id: React.PropTypes.string.isRequired,
    pageID: React.PropTypes.number.isRequired,
    groupID: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]).isRequired,
    prompt: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
    selection: React.PropTypes.string.isRequired,
    techName: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
};
