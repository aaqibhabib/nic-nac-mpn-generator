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
            <Card title={this.props.prompt}>
                <div className="cardPadding">

                    <CardTitle ><div className="questionTitleText">{this.props.prompt}</div></CardTitle>
                    <CardText>
                        <RadioButtonGroup name={this.props.id} onChange={this.onChange} valueSelected={this.props.selection}>
                            {this.props.options.map((option) => {
                                const key = `${this.props.pageID}-${this.props.groupID}-${this.props.id}`;
                                let label = option;
                                if (key === '1-HIPAA Covered Entity-p-2 g-1 q-1') {
                                    label = _.template(option)({
                                        techName: this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-2'] || 'our product',
                                        privacyLink: this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-3'] || 'Link to HIPPA Notice',
                                    });
                                }
                                return (<RadioButton
                                  key={option}
                                  value={option}
                                  label={label}
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
    // eslint-disable-next-line react/forbid-prop-types
    selections: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
};
