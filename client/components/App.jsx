import React from 'react';
import { Navbar, NavItem, Row, Col } from 'react-materialize';

import Steps from 'components/Steps';

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Navbar brand='MPN Generator' right>
            <NavItem href='#'>Home</NavItem>
            <NavItem href='#'>About</NavItem>
            <NavItem href='#'>Github</NavItem>
          </Navbar>
        </Row>
          <Steps />
      </div>
    );
  }
}

export default App;
