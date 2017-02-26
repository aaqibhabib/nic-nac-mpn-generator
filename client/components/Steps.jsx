import React from 'react';
import update from 'immutability-helper';
import _ from 'lodash';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';

import { Steps, QuestionTypes } from '../config';
import CheckboxQuestion from './CheckboxQuestion';
import RadioQuestion from './RadioQuestion';

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onClick');
        this.state = {
            currentStepIndex: 0,
        };
    }

    onClick() {
        this.setState({ currentStepIndex: this.state.currentStepIndex + 1 });
    }
    onChange(e) {
        this.setState({
            questions: update(this.state.questions, {
                [this.state.currentQuestionIndex]: {
                    answer: { $set: e.target.value },
                },
            }),
        });
    }
    render() {
        const currentStep = Steps[this.state.currentStepIndex];
        return (
            <div>
                <Stepper linear activeStep={this.state.currentStepIndex}>
                    <Step>
                        <StepLabel>Contact Info</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>HIPPA Policy</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Data Usage</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Data Sharing</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>User Options</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Policy Changes</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Review</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Export Notice</StepLabel>
                    </Step>
                </Stepper>
                <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto' }} >
                    <h4>{currentStep.title}</h4>
                    {currentStep.questions.map((question) => {
                        if (question.type === QuestionTypes.CHECKBOX) {
                            return <CheckboxQuestion key={question.id} {...question} />;
                        } else if (question.type === QuestionTypes.RADIO) {
                            return <RadioQuestion key={question.id} {...question} />;
                        }
                        return null;
                    })}
                    <RaisedButton className="right" label="Continue" primary onClick={this.onClick} />
                </div>
            </div>
        );
    }
}
