import React from 'react';
import _ from 'lodash';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { black, cyan500 } from 'material-ui/styles/colors';

const styles = {
    floatingLabelStyle: {
        color: black,
    },
    floatingLabelFocusStyle: {
        color: cyan500, // change to pramry theme color
    },
};

export default class Policy extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onPolicyChange', 'onChangeSectionLinkChange', 'onBreachChange', 'onBreachSectionLinkChange');
    }

    onPolicyChange(e) {
        this.props.onIntroChange('policyText', e.target.value);
    }

    onChangeSectionLinkChange(e) {
        this.props.onIntroChange('changeSectionLink', e.target.value);
    }

    onBreachChange(e) {
        this.props.onIntroChange('breachText', e.target.value);
    }

    onBreachSectionLinkChange(e) {
        this.props.onIntroChange('breachSectionLink', e.target.value);
    }

    render() {
        return (
            <div>
                <h3>Policy Changes: How the company will notify users if the privacy policy changes</h3>
                <Card>
                    <CardText>
                        <TextField
                          fullWidth
                          multiLine 
                          floatingLabelText="Describe how/if the company will notify consumers of privacy policy changes (e.g. merger or acquisition)"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          value={this.props.policyText}
                          onChange={this.onPolicyChange}
                        />
                        <TextField
                          fullWidth
                          floatingLabelText="Link to section in privacy policy"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          value={this.props.changeSectionLink}
                          onChange={this.onChangeSectionLinkChange}
                        />
                    </CardText>
                </Card>
                <h3>Breach: How the company will notify users and protect data in case of an improper disclosure</h3>
                <Card>
                    <CardText>
                        <TextField
                          fullWidth
                          multiLine
                          floatingLabelText="Describe how the company will protect consumers’ data in the case of a breach"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          value={this.props.breachText}
                          onChange={this.onBreachChange}
                        />
                        <TextField
                          fullWidth
                          floatingLabelText="Link to section in privacy policy"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          value={this.props.breachSectionLink}
                          onChange={this.onBreachSectionLinkChange}
                        />
                    </CardText>
                </Card>
            </div>
        );
    }
}

Policy.propTypes = {
    onIntroChange: React.PropTypes.func.isRequired,
    policyText: React.PropTypes.string.isRequired,
    changeSectionLink: React.PropTypes.string.isRequired,
    breachText: React.PropTypes.string.isRequired,
    breachSectionLink: React.PropTypes.string.isRequired,
};
