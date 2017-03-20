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

export default class Intro extends React.Component {
    nextStep() {
        console.log(this.props.nextStep.apply);
        this.props.nextStep.apply;
    }

    render() {
        return (
            <div style={styles.container} >
                <h1>Create Your Privacy Notice</h1>
                <p>Help your users understand how your organization collects and shares information. Answer a couple questions about your privacy policy and make a "In Plain English" policy to share. </p>
                <RaisedButton style={styles.right} label="Begin" primary onClick={this.nextStep()} />
            </div>
        );
    }
}

Intro.propTypes = {
    nextStep: React.PropTypes.func.isRequired,
};
