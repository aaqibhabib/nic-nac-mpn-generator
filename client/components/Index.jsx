import React from 'react';

import Questions from 'components/Questions'

class IndexComponent extends React.Component {
  render() {
    return (
      <section>
        <h2>MPN Demo</h2>
        <Questions />
      </section>
    );
  }
}

export default IndexComponent;
