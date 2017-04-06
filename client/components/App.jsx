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

const styles = {
    container: {
        maxWidth: '1200px',
        marginRight: 'auto',
        marginLeft: 'auto',
        background: '#fdfdfd',
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
        _.bindAll(this, 'onSelectionChange', 'onIntroChange', 'setStep', 'nextStep', 'previousStep');
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
            },
        });
    }

    onIntroChange(id, state) {
        this.setState({
            [id]: state,
        });
    }

    setStep(index) {
        this.setState({ currentStepIndex: index, visited: _.uniq(this.state.visited.concat(this.state.currentStepIndex)) });
    }

    nextStep() {
        this.setState({ currentStepIndex: this.state.currentStepIndex + 1, visited: _.uniq(this.state.visited.concat(this.state.currentStepIndex)) });
    }

    previousStep() {
        this.setState({ currentStepIndex: this.state.currentStepIndex - 1, vistied: _.uniq(this.state.visited.concat(this.state.currentStepIndex)) });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className='npm-generator'>
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
                        {this.state.currentStepIndex >= 0 ? <h2 className="notice-title">Privacy Notice Generator</h2> : null}
                        {this.state.currentStepIndex >= 0 ? <Stepper
                          currentStepIndex={this.state.currentStepIndex}
                          visited={this.state.visited}
                          setStep={this.setStep}
                        /> : null}
                        <div style={this.state.currentStepIndex >= 0 && this.state.currentStepIndex !== 7 ? { display: 'flex' } : {}}>
                            {this.state.currentStepIndex >= 0 && this.state.currentStepIndex !== 7 ? <div style={{ flex: 1, marginRight: '15px', marginTop: '20px' }}>
                                <Card>
                                    <Toolbar>
                                        <ToolbarTitle style={{ margin: '0px auto' }} text={HelpfulTips[this.state.currentStepIndex].title} />
                                    </Toolbar>
                                    <CardText>
                                        {HelpfulTips[this.state.currentStepIndex].text}
                                    </CardText>
                                </Card>
                            </div> : null}
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
                        </div>
                        <div style={{ height: '42px', margin: '30px 0%', float: 'right' }}>
                            {this.state.currentStepIndex > 0 ? <RaisedButton
                              label="Back"
                              onClick={this.previousStep}
                            /> : null}
                            {this.state.currentStepIndex === 7 ? null : <RaisedButton
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
