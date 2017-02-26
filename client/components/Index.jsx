import React from 'react';

import Questions from 'components/Questions'
import { Navbar, NavItem, Row, Col } from 'react-materialize'

class IndexComponent extends React.Component {
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
        <Row>
          <Questions />
        </Row>
      </div>
    );
  }
}

export default IndexComponent;
