import React from 'react';
import { Step, Stepper as ST, StepLabel } from 'material-ui/Stepper';

export default class Stepper extends React.Component {
    render() {
        return (
            <ST linear={true} activeStep={this.props.currentStepIndex}>
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
            </ST>
        );
    }
}
Stepper.propTypes = {
    currentStepIndex: React.PropTypes.number.isRequired,
};
