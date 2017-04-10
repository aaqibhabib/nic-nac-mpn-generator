import React from 'react';
import _ from 'lodash';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';


import Stepper from './Stepper';
import Steps from './Steps';
import Contact from './Contact';
import Intro from './Intro';
import Review from './Review';
import Notice from './Notice';
import { HelpfulTips } from '../config';

class App extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onSelectionChange', 'onIntroChange', 'setStep', 'nextStep', 'previousStep', 'onHomeClick', 'onGeneratorClick');
        this.state = {
            currentStepIndex: -1,
            visited: [],
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
        this.setState({
            selections: {
                ...this.state.selections,
                [id]: state,
            } }, () => {
            console.log(this.state.selections);
        });
    }

    onIntroChange(id, state) {
        this.setState({
            [id]: state,
        });
    }

    onPageChanged() {
        window.scrollTo(0, 0);
    }

    onHomeClick() {
        this.setStep(-1);
    }

    onGeneratorClick() {
        this.setStep(0);
    }

    setStep(index) {
        this.setState({
            currentStepIndex: index,
            visited: _.uniq(this.state.visited.concat(this.state.currentStepIndex)),
        }, () => {
            this.onPageChanged();
        });
    }

    nextStep() {
        this.setState({
            currentStepIndex: this.state.currentStepIndex + 1,
            visited: _.uniq(this.state.visited.concat(this.state.currentStepIndex)),
        }, () => {
            this.onPageChanged();
        });
    }

    previousStep() {
        this.setState({
            currentStepIndex: this.state.currentStepIndex - 1,
            vistied: _.uniq(this.state.visited.concat(this.state.currentStepIndex)),
        }, () => {
            this.onPageChanged();
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="npm-generator">
                    <AppBar
                      title="MPN Wizard"
                      className="grad"
                      showMenuIconButton={false}
                      iconElementRight={
                          <div style={{ marginTop: '6px' }}>
                              <FlatButton style={{ color: 'white' }} hoverColor="rgba(255,255,255,0.4)" rippleColor="white" label="Home" onClick={this.onHomeClick} />
                              <FlatButton style={{ color: 'white' }} hoverColor="rgba(255,255,255,0.4)" rippleColor="white" label="Generator Tool" onClick={this.onGeneratorClick} />
                              <FlatButton style={{ color: 'white' }} hoverColor="rgba(255,255,255,0.4)" rippleColor="white" label="Github" href="https://github.com/aaqibhabib/nic-nac-mpn-generator" target='_blank' />
                          </div>}
                    />
                    <div style={{ minHeight: 'calc(100vh - 119px)' }}>
                        {this.state.currentStepIndex >= 0 ? <div className="container">
                            <Stepper
                              currentStepIndex={this.state.currentStepIndex}
                              visited={this.state.visited}
                              setStep={this.setStep}
                            />
                        </div> : null}
                        <div
                          style={this.state.currentStepIndex >= 0 && this.state.currentStepIndex !== 7 ? { display: 'flex' } : {}}
                          className={this.state.currentStepIndex < 0 ? '' : 'container'}
                        >
                            {this.state.currentStepIndex >= 0 && this.state.currentStepIndex !== 7 ? <div style={{ flex: 1, marginRight: '15px', marginTop: '20px' }}>
                                <Card>
                                    <Toolbar>
                                        <ToolbarTitle style={{ margin: '0px auto', color: 'rgba(0, 0, 0, 0.4)' }} text={HelpfulTips[this.state.currentStepIndex].title} />
                                    </Toolbar>
                                    <CardText style={{ fontSize: 16 }}>
                                        {HelpfulTips[this.state.currentStepIndex].text}
                                    </CardText>
                                </Card>
                            </div> : null}
                            {(() => {
                                if (this.state.currentStepIndex < 0) {
                                    return (<Intro
                                      onNextStep={this.nextStep}
                                    />);
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
                        </div>
                        <div className="section container">
                            <div className="right">
                                {this.state.currentStepIndex > 0 ? <RaisedButton
                                  label="Back"
                                  onClick={this.previousStep}
                                /> : null}
                                {this.state.currentStepIndex >= 0 && this.state.currentStepIndex < 7 ? <RaisedButton
                                  label={this.state.currentStepIndex >= 0 ? 'Continue' : 'Begin'}
                                  style={{marginLeft:15}}
                                  primary
                                  onClick={this.nextStep}
                                /> : null}
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <footer className="page-footer grad">
                        <div className="container footer-copyright"></div>
                    </footer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
