import React from 'react';
import update from 'immutability-helper';
import _ from 'lodash';

import {Steps, QuestionTypes} from 'config.js';
import CheckboxQuestion from './CheckboxQuestion';
import RadioQuestion from './RadioQuestion';

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onClick');
        this.state = {
            currentStepIndex: 0,
        }
    }

    onClick(e) {
        this.setState({currentStepIndex: this.state.currentStepIndex + 1})
    }
    onChange(e) {
        this.setState({questions : update(this.state.questions, {
            [this.state.currentQuestionIndex] : {
                answer : { $set: e.target.value }
            }
        })});
    }
    render() {
        const currentStep = Steps[this.state.currentStepIndex];
        return (
            <div>
                <h1>{currentStep.title}</h1>
                {currentStep.questions.map(question => {
                    if (question.type === QuestionTypes.CHECKBOX) {
                        return <CheckboxQuestion key={question.id} {...question} />;
                    } else if (question.type === QuestionTypes.RADIO) {
                        return <RadioQuestion key={question.id} {...question} />;
                    }
                })}
                <button onClick={this.onClick}>Next Questions</button>
            </div>
        );
    }
}