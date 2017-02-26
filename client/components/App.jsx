import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import Steps from './Steps';

class App extends React.Component {
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
                    <Steps />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
