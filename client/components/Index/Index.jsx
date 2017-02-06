import React from 'react';

import Questions from 'components/Questions/questions'

class IndexComponent extends React.Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <section>
        <h2>MPN Demo</h2>
        <Questions />
      </section>
    );
  }
}

export default IndexComponent;
