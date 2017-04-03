import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText, CardExpandable } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

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
    reviewCard: {
        marginBottom: 30,
    },
    root: {
        top: 0,
        bottom: 0,
        right: 4,
        margin: 'auto',
        position: 'absolute',
    },
};

export default class ReviewCards extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'setStep');
    }

    setStep(index) {
        this.props.setStep(index);
    }

    render() {
        const currentStep = Steps[this.props.currentStepIndex];
        return (
            <Card className="reviewCard" style={styles.reviewCard}>
                <CardTitle title={titles[this.props.currentStepIndex - 1]} titleStyle={{ fontSize: 20 }}>
                    <IconButton style={styles.root} touch tooltip="Edit" onClick={() => this.setStep(this.props.currentStepIndex)}><ModeEdit /></IconButton>
                </CardTitle>
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
    setStep: React.PropTypes.func.isRequired,
};
