import React from 'react';
import _ from 'lodash';

import { Steps, QuestionTypes } from '../config';
import CheckboxQuestion from './CheckboxQuestion';
import RadioQuestion from './RadioQuestion';

export default class Questions extends React.Component {
    render() {
        const currentStep = Steps[this.props.currentStepIndex];
        return (
            <div>
                <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto' }} >
                    <h4>{currentStep.title}</h4>
                    {currentStep.values.map(questionGroup =>
                        (<div key={questionGroup.key}>
                            <h5>{questionGroup.key}</h5>
                            {questionGroup.values.map((question) => {
                                const key = `${currentStep.key}-${questionGroup.key}-${question.id}`;
                                const selection = _.get(this.props.selections, [key], {});
                                if (question.type === QuestionTypes.CHECKBOX) {
                                    return (<CheckboxQuestion
                                      {...question}
                                      key={question.id}
                                      selection={selection}
                                      onChange={this.props.onSelectionChange}
                                    />);
                                } else if (question.type === QuestionTypes.RADIO) {
                                    return (<RadioQuestion
                                      {...question}
                                      key={question.id}
                                      selection={selection}
                                      onChange={this.props.onSelectionChange}
                                    />);
                                }
                                return null;
                            })}
                        </div>),
                    )}
                </div>
            </div>
        );
    }
}

Questions.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    selections: React.PropTypes.object.isRequired,
    onSelectionChange: React.PropTypes.func.isRequired,
    currentStepIndex: React.PropTypes.number.isRequired,
};
