import React from 'react';
import _ from 'lodash';
import assign from 'object-assign';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import Intro from './Intro';
import Hippa from './Hippa';

let fieldValues = {
    name: null,
    email: null,
    password: null,
    age: null,
    colors: [],
};

class App extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this,'nextStep');
        this.state = {
            step: 0,
        };
    }
    saveValues(value) {
        fieldValues = assign({}, fieldValues, value);
    }

    nextStep() {
        this.setState({ step: this.state.step + 1 });
    }

    previousStep() {
        this.setState({ step: this.state.step - 1 });
    }

    showStep() {
        console.log(this.state.step);
        console.log(this.nextStep);
        switch (this.state.step) {
            case 0:
                return (<Intro
                    nextStep={this.nextStep} />);
            case 1:
                return (<Hippa
                    nextStep={this.nextStep} />);
            /*case 2:
                return <Confirmation
                    fieldValues={fieldValues}
                    previousStep={this.previousStep}
                    submitRegistration={this.submitRegistration} />;
            case 3:
                return <Success fieldValues={fieldValues} />;*/
        }
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
                    {this.showStep()}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
