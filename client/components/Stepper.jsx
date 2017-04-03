import React from 'react';
import _ from 'lodash';
import { Step, Stepper as ST, StepButton, StepLabel } from 'material-ui/Stepper';

export default class Stepper extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'setStep');
    }

    setStep(index) {
        this.props.setStep(index);
    }

    render() {
        return (
            <ST linear={false} activeStep={this.props.currentStepIndex}>
                <Step>
                    <StepButton onClick={() => this.setStep(0)}>Contact Info</StepButton>
                </Step>
                <Step>
                    <StepButton onClick={() => this.setStep(1)}>HIPPA Policy</StepButton>
                </Step>
                <Step>
                    <StepButton onClick={() => this.setStep(2)}>Data Usage</StepButton>
                </Step>
                <Step>
                    <StepButton onClick={() => this.setStep(3)}>Data Sharing</StepButton>
                </Step>
                <Step>
                    <StepButton onClick={() => this.setStep(4)}>User Options</StepButton>
                </Step>
                <Step>
                    <StepButton onClick={() => this.setStep(5)}>Notification</StepButton>
                </Step>
                <Step>
                    <StepButton onClick={() => this.setStep(6)}>Review</StepButton>
                </Step>
                <Step>
                    <StepLabel>Export Notice</StepLabel>
                </Step>
            </ST>
        );
    }
}
Stepper.propTypes = {
    currentStepIndex: React.PropTypes.number.isRequired,
    setStep: React.PropTypes.func.isRequired,
};
