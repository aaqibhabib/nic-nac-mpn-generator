import React, {Component, PropTypes} from 'react';
import MarkdownElement from './MarkdownElement';
import transitions from 'material-ui/styles/transitions';
import CodeBlockTitle from './CodeBlockTitle';

const styles = {
  root: {
    background: '#f8f8f8',
    borderTop: 'solid 1px #e0e0e0',
  },
  markdown: {
    overflow: 'auto',
    maxHeight: 1400,
    transition: transitions.create('max-height', '800ms', '0ms', 'ease-in-out'),
    marginTop: 0,
    marginBottom: 0,
  },
  markdownRetracted: {
    maxHeight: 0,
  },
  description: {
    background: '#ffffff',
    overflow: 'auto',
    padding: '10px 20px',
    marginTop: 0,
    marginBottom: 0,
  },
  codeBlockTitle: {
    cursor: 'pointer',
  },
};

class CodeBlock extends Component {
  static propTypes = {
    children: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  };

  state = {
    expand: false,
  };

  handleTouchTap = () => {
    this.setState({
      expand: !this.state.expand,
    });
  };
  onCopy = e => {
    debugger;
  };
  onDownload = e => {
    const blob = new Blob([this.props.children], {type : 'text/html'});
    const url = window.URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "privacy-notice.html");
    document.body.appendChild(link); // Required for FF

    link.click();
  };

  render() {
    const text = `\`\`\`js
${this.props.children}
    \`\`\``;

    const descriptionStyle = styles.description;
    let codeStyle = styles.markdown;
    let tooltip = 'Hide source';

    if (this.state.expand) {
      codeStyle = Object.assign({}, styles.markdown, styles.markdownRetracted);
      tooltip = 'Show source';
    }

    return (
      <div style={styles.root}>
        <div style={styles.codeBlockTitle}>
          <CodeBlockTitle title={this.props.title} tooltip={tooltip} onCopy={this.onCopy} onDownload={this.onDownload} onOpenClose={this.handleTouchTap}/>
        </div>
        <MarkdownElement style={codeStyle} text={text} />
        <MarkdownElement style={descriptionStyle} text={this.props.description} />
      </div>
    );
  }
}

export default CodeBlock;