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
        const connector = (<div style={{ flex: '1 1 auto' }}><span style={{ display: 'block', borderColor: 'rgb(189, 189, 189)', marginLeft: '-30px', marginRight: '-20px', borderTopStyle: 'solid', borderTopWidth: 1, marginTop: '20px' }} /></div>);
        const stepStyle = { width: '120px', display: 'flex', justifyContent: 'center' };
        return (
            <ST linear={false} activeStep={this.props.currentStepIndex} connector={connector} style={{ margin: '10px 0' }}>
                <Step completed={this.props.visited.indexOf(0) !== -1} style={stepStyle}>
                    <StepButton className='step-button' onClick={() => this.setStep(0)}>Contact Info</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(1) !== -1} style={stepStyle}>
                    <StepButton className='step-button' onClick={() => this.setStep(1)}>HIPPA Policy</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(2) !== -1} style={stepStyle}>
                    <StepButton className='step-button' onClick={() => this.setStep(2)}>Data Usage</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(3) !== -1} style={stepStyle}>
                    <StepButton className='step-button' onClick={() => this.setStep(3)}>Data Sharing</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(4) !== -1} style={stepStyle}>
                    <StepButton className='step-button' onClick={() => this.setStep(4)}>User Options</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(5) !== -1} style={stepStyle}>
                    <StepButton className='step-button' onClick={() => this.setStep(5)}>Notification</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(6) !== -1} style={stepStyle}>
                    <StepButton className='step-button' onClick={() => this.setStep(6)}>Review</StepButton>
                </Step>
                <Step completed={this.props.visited.indexOf(7) !== -1} style={stepStyle}>
                    <StepButton className='step-button' onClick={() => this.setStep(7)}>Export Notice</StepButton>
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
