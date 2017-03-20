import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    container: {
        maxWidth: '900px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    right: {
        float: 'right !important',
    },
};

export default class Hippa extends React.Component {
    nextStep() {
        this.props.nextStep();
    }

    render() {
        return (
            <div style={styles.container} >
                <h1>Page 2</h1>
                <p>Help your users understand how your organization collects and shares information. Answer a couple questions about your privacy policy and make a "In Plain English" policy to share. </p>
                <RaisedButton label="Back" primary onClick={this.nextStep()} />
                <RaisedButton style={styles.right} label="Continue" primary onClick={this.nextStep()} />
            </div>
        );
    }
}

Hippa.propTypes = {
    nextStep: React.PropTypes.func.isRequired,
};
