import React from 'react';
import _ from 'lodash';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { Steps, QuestionTypes } from '../config';
import CheckboxQuestion from './CheckboxQuestion';
import RadioQuestion from './RadioQuestion';
import Intro from './Intro';

const styles = {
    container: {
        maxWidth: '900px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
};

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

    render() {
        switch (this.state.currentStepIndex) {
            case 0:
                return <Intro currentStepIndex={this.state.currentStepIndex} />;
            case 1:
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
                        <div style={styles.container} >
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
                                        } else if (question.type === QuestionTypes.TEXTFEILD) {
                                            return (<TextField
                                                hintText=""
                                                floatingLabelText={question.prompt}
                                            />);
                                        }
                                        return null;
                                    })}
                                </div>),
                            )}
                            <RaisedButton className="right" label="Continue" primary onClick={this.onClick} />
                        </div>
                    </div>
                );
            case 3:
                return <Intro />;
            default:
                return <Intro />;
        }
        /*return (
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
                <div style={styles.container} >
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
                                } else if (question.type === QuestionTypes.TEXTFEILD) {
                                    return (<TextField
                                      hintText=""
                                      floatingLabelText={question.prompt}
                                    />);
                                }
                                return null;
                            })}
                        </div>),
                    )}
                    <RaisedButton className="right" label="Continue" primary onClick={this.onClick} />
                </div>
            </div>
        );*/
    }
}

Questions.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    selections: React.PropTypes.object.isRequired,
    onSelectionChange: React.PropTypes.func.isRequired,
};
