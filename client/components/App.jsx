import React from 'react';
import _ from 'lodash';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Stepper from './Stepper';
import Steps from './Steps';
import Intro from './Intro';

class App extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onSelectionChange', 'onIntroChange', 'onClick');
        this.state = {
            currentStepIndex: 0,
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
        } }, () => {
            console.log(this.state.selections);
        });
    }

    onIntroChange(id, state) {
        this.setState({
            [id]: state,
        });
    }

    onClick() {
        this.setState({ currentStepIndex: this.state.currentStepIndex + 1 });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <AppBar
                      title="MPN Generator"
                      showMenuIconButton={false}
                      iconElementRight={
                          <IconMenu
                            iconButtonElement={<IconButton iconClassName="material-icons">more_vert</IconButton>}
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                          >
                              <MenuItem primaryText="Home" />
                              <MenuItem primaryText="About" />
                              <MenuItem primaryText="Github" />
                          </IconMenu>}
                    />
                    <Stepper
                      currentStepIndex={this.state.currentStepIndex}
                    />
                    {(() => {
                        if (this.state.currentStepIndex === 0) {
                            return (<Intro
                              entityName={this.state.entityName}
                              privacyPolicyLink={this.state.privacyPolicyLink}
                              commentLink={this.state.commentLink}
                              emailAddress={this.state.emailAddress}
                              phoneNumber={this.state.phoneNumber}
                              address={this.state.address}
                              onIntroChange={this.onIntroChange}
                            />);
                        }
                        return (<Steps
                          currentStepIndex={this.state.currentStepIndex}
                          selections={this.state.selections}
                          onSelectionChange={this.onSelectionChange}
                        />);
                    })()}
                    <RaisedButton className="right" label="Continue" primary onClick={this.onClick} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
