import React from 'react';
import _ from 'lodash';
import { Step, Stepper as ST, StepButton } from 'material-ui/Stepper';


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
                <Step completed={this.props.visited.indexOf(0) !== -1}>
                    <StepButton onClick={() => this.setStep(0)}>Contact Info</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(1) !== -1}>
                    <StepButton onClick={() => this.setStep(1)}>HIPPA Policy</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(2) !== -1}>
                    <StepButton onClick={() => this.setStep(2)}>Data Usage</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(3) !== -1}>
                    <StepButton onClick={() => this.setStep(3)}>Data Sharing</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(4) !== -1}>
                    <StepButton onClick={() => this.setStep(4)}>User Options</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(5) !== -1}>
                    <StepButton onClick={() => this.setStep(5)}>Notification</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(6) !== -1}>
                    <StepButton onClick={() => this.setStep(6)}>Review</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(7) !== -1}>
                    <StepButton onClick={() => this.setStep(7)}>Export Notice</StepButton>
                </Step>
            </ST>
        );
    }
}
Stepper.propTypes = {
    currentStepIndex: React.PropTypes.number.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    visited: React.PropTypes.array.isRequired,
    setStep: React.PropTypes.func.isRequired,
};
