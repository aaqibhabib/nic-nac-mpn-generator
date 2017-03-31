import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import { Steps, QuestionTypes } from '../config';

const titles = ['HIPPA Policy', 'Data Usage', 'Data Sharing', 'User Options', 'Policy Changes'];
const styles = {
    tr: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '24px 0px',
        borderBottom: '1px solid rgb(224, 224, 224)',
    },
    td: {
        flex: 1,
        fontSize: 13,
        paddingLeft: 24,
        paddingRight: 24,
    },
};

export default class ReviewCards extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this);
    }

    render() {
        const currentStep = Steps[this.props.currentStepIndex];
        return (
            <Card className="reviewCard">
                <CardTitle ><div style={{ fontSize: 20 }}>{titles[this.props.currentStepIndex - 1]}</div></CardTitle>
                <CardText>
                    {currentStep.values.map(questionGroup =>
                        (<div key={questionGroup.key}>
                            {questionGroup.values.map((question) => {
                                const key = `${Steps[this.props.currentStepIndex].key}-${questionGroup.key}-${question.id}`;
                                if (question.type === QuestionTypes.CHECKBOX) {
                                    return (<div key={question.id} className="tr" style={styles.tr}>
                                        <div style={styles.td}>{question.prompt}</div>
                                        <div style={styles.td}>
                                            {(() => {
                                                const items = [];
                                                const checkBox = this.props.selections[key];
                                                // eslint-disable-next-line no-restricted-syntax
                                                for (const selection in checkBox) {
                                                    if (checkBox[selection]) items.push(<li>{selection === 'Other:' ? checkBox[selection] : selection}</li>);
                                                }
                                                return <ul style={{ paddingLeft: 0 }}>{items}</ul>;
                                            })()}
                                        </div>
                                    </div>);
                                } else if (question.type === QuestionTypes.RADIO) {
                                    return (<div key={question.id} className="tr" style={styles.tr}>
                                        <div style={styles.td}>{question.prompt}</div>
                                        <div style={styles.td}>{this.props.selections[key]}</div>
                                    </div>);
                                }
                                return null;
                            })}
                        </div>))
                    }
                </CardText>
            </Card>
        );
    }
}

ReviewCards.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    selections: React.PropTypes.object.isRequired,
    currentStepIndex: React.PropTypes.number.isRequired,
};
