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
import Policy from './Policy';
import Review from './Review';
import Notice from './Notice';

const styles = {
    container: {
        maxWidth: '1200px',
        marginRight: 'auto',
        marginLeft: 'auto',
        // padding: '0 24px',
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
        _.bindAll(this, 'onSelectionChange', 'onIntroChange', 'nextStep', 'previousStep');
        // this.state = {
        //     currentStepIndex: -1,
        //     selections: {},
        //     entityName: '',
        //     privacyPolicyLink: '',
        //     commentLink: '',
        //     emailAddress: '',
        //     phoneNumber: '',
        //     address: '',
        //     policyText: '',
        //     changeSectionLink: '',
        //     breachText: '',
        //     breachSectionLink: '',
        // };

        this.state = {
            currentStepIndex: 7,
            selections: {
                '1-HIPAA COVERED ENTITY-p-2 g-1 q-1': "Please note that the health data we collect as part of this [insert name of technology] are not protected by HIPAA and our company's HIPAA Notice of Privacy Practices does not apply",
                '2-Use: How we use your data internally-p-3 g-1 q-1': {
                    'To provide the primary service of the app or technology': true,
                },
                '2-Share: How we share your data externally with other companies or entities-p-3 g-2 q-2': {
                    'To provide the primary service of the app or technology': true,
                    'To develop marketing materials for our products': true,
                },
                '2-Sell: Who we sell your data to-p-3 g-3 q-1': 'Yes; only with your permission',
                '2-Sell: Who we sell your data to-p-3 g-3 q-2': 'Yes',
                '3-Store: How we store your data-p-4 g-1 q-1': 'Yes',
                '3-Store: How we store your data-p-4 g-1 q-2': 'No',
                '3-Encryption: How we encrypt your data-p-4 g-2 q-1': 'Yes, by default',
                '3-Encryption: How we encrypt your data-p-4 g-2 q-2': 'Yes, when you take certain steps (click to learn how)',
                '3-Privacy: How this technology accesses other data -p-4 g-3 q-1': 'No',
                '3-Privacy: How this technology accesses other data -p-4 g-3 q-2': 'Yes',
                '4-User Options: What you can do with the data that we collect-p-5 g-1 q-1': 'Yes',
                '4-Deactivation: What happens to your data when your account is deactivated-p-5 g-2 q-1': 'Deleted after x years',
                '5-Policy Changes: How we will notify you if our privacy policy changes-p-6 g-1 q-1': 'Deleted immediately',
                '5-Breach: How we will notify you and protect your data in case of an improper disclosure-p-6 g-2 q-1': 'Permanently retained and used',
            },
            entityName: 'John Smith',
            privacyPolicyLink: 'www.google.com',
            commentLink: 'aaqib.com',
            emailAddress: 'myemailaddress@somehwere.com',
            phoneNumber: '412-123-1234',
            address: 'Pittsburgh, PA, USA',
            policyText: 'some text',
            changeSectionLink: 'some text',
            breachText: 'some text',
            breachSectionLink: 'some text',
        };
    }

    onSelectionChange(id, state) {
        this.setState({ selections: {
            ...this.state.selections,
            [id]: state,
        } }, () => {
            console.log(this.state.selections);
        });
    }

    onIntroChange(id, state) {
        this.setState({
            [id]: state,
        }, () => {
            console.log(this.state);
        });
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
                              <FlatButton style={{ color: 'white' }} hoverColor="rgba(255,255,255,0.4)" rippleColor="white" label="About" />
                              <FlatButton style={{ color: 'white' }} hoverColor="rgba(255,255,255,0.4)" rippleColor="white" label="Github" />
                          </div>}
                    />
                    <div style={styles.container}>
                        {this.state.currentStepIndex >= 0 ? <h1>Create Your Privacy Notice</h1> : null}
                        {this.state.currentStepIndex >= 0 ? <Stepper
                          currentStepIndex={this.state.currentStepIndex}
                        /> : null}
                        {(() => {
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
                            } else if (this.state.currentStepIndex > 0 && this.state.currentStepIndex < 5) {
                                return (<Steps
                                  currentStepIndex={this.state.currentStepIndex}
                                  selections={this.state.selections}
                                  onSelectionChange={this.onSelectionChange}
                                />);
                            } else if (this.state.currentStepIndex === 5) {
                                return (<Policy
                                  policyText={this.state.policyText}
                                  changeSectionLink={this.state.changeSectionLink}
                                  breachText={this.state.breachText}
                                  breachSectionLink={this.state.breachSectionLink}
                                  onIntroChange={this.onIntroChange}
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
                                  policyText={this.state.policyText}
                                  changeSectionLink={this.state.changeSectionLink}
                                  breachText={this.state.breachText}
                                  breachSectionLink={this.state.breachSectionLink}
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
