import React from 'react';
import _ from 'lodash';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Stepper from './Stepper';
import Steps from './Steps';
import Contact from './Contact';
import Intro from './Intro';
import Review from './Review';
import Notice from './Notice';

const styles = {
    container: {
        maxWidth: '1200px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    right: {
        float: 'right',
    },
    left: {
        float: 'left',
    },
};

class App extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onSelectionChange', 'onIntroChange', 'setStep', 'nextStep', 'previousStep');
        this.state = {
            currentStepIndex: -1,
            selections: {},
            entityName: '',
            privacyPolicyLink: '',
            commentLink: '',
            emailAddress: '',
            phoneNumber: '',
            address: '',
        };
    }

    onSelectionChange(id, state) {
        this.setState({ selections: {
            ...this.state.selections,
            [id]: state,
        } });
    }

    onIntroChange(id, state) {
        this.setState({
            [id]: state,
        });
    }

    setStep(index) {
        this.setState({ currentStepIndex: index });
    }

    nextStep() {
        this.setState({ currentStepIndex: this.state.currentStepIndex + 1 });
    }

    previousStep() {
        this.setState({ currentStepIndex: this.state.currentStepIndex - 1 });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <AppBar
                      title="MPN Generator"
                      showMenuIconButton={false}
                      iconElementRight={
                          <div style={{ marginTop: '6px' }}>
                              <FlatButton style={{ color: 'white' }} hoverColor="rgba(255,255,255,0.4)" rippleColor="white" label="Home" />
                              <FlatButton style={{ color: 'white' }} hoverColor="rgba(255,255,255,0.4)" rippleColor="white" label="Generator Tool" />
                              <FlatButton style={{ color: 'white' }} hoverColor="rgba(255,255,255,0.4)" rippleColor="white" label="Github" />
                          </div>}
                    />
                    <div style={styles.container}>
                        {this.state.currentStepIndex >= 0 ? <h2>Privacy Notice Generator</h2> : null}
                        {this.state.currentStepIndex >= 0 ? <Stepper
                          currentStepIndex={this.state.currentStepIndex}
                          setStep={this.setStep}
                        /> : null}
                        {(() => {
                            console.log(this.state.currentStepIndex);
                            if (this.state.currentStepIndex < 0) {
                                return (<Intro />);
                            } else if (this.state.currentStepIndex === 0) {
                                return (<Contact
                                  entityName={this.state.entityName}
                                  privacyPolicyLink={this.state.privacyPolicyLink}
                                  commentLink={this.state.commentLink}
                                  emailAddress={this.state.emailAddress}
                                  phoneNumber={this.state.phoneNumber}
                                  address={this.state.address}
                                  onIntroChange={this.onIntroChange}
                                />);
                            } else if (this.state.currentStepIndex > 0 && this.state.currentStepIndex < 6) {
                                return (<Steps
                                  currentStepIndex={this.state.currentStepIndex}
                                  selections={this.state.selections}
                                  onSelectionChange={this.onSelectionChange}
                                />);
                            } else if (this.state.currentStepIndex === 6) {
                                return (<Review
                                  entityName={this.state.entityName}
                                  privacyPolicyLink={this.state.privacyPolicyLink}
                                  commentLink={this.state.commentLink}
                                  emailAddress={this.state.emailAddress}
                                  phoneNumber={this.state.phoneNumber}
                                  address={this.state.address}
                                  selections={this.state.selections}

                                  setStep={this.setStep}
                                />);
                            } else if (this.state.currentStepIndex === 7) {
                                return (<Notice
                                  entityName={this.state.entityName}
                                  privacyPolicyLink={this.state.privacyPolicyLink}
                                  commentLink={this.state.commentLink}
                                  emailAddress={this.state.emailAddress}
                                  phoneNumber={this.state.phoneNumber}
                                  address={this.state.address}
                                  selections={this.state.selections}
                                />);
                            }
                            return null;
                        })()}
                        <div style={{ height: '42px', margin: '30px 0%' }}>
                            {this.state.currentStepIndex > 0 ? <RaisedButton
                              style={styles.left}
                              label="Back"
                              onClick={this.previousStep}
                            /> : null}
                            {this.state.currentStepIndex === 7 ? null : <RaisedButton
                              style={styles.right}
                              label={this.state.currentStepIndex >= 0 ? 'Continue' : 'Begin'}
                              primary
                              onClick={this.nextStep}
                            />}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
