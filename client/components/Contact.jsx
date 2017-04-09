import React from 'react';
import _ from 'lodash';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { grey700, cyan500 } from 'material-ui/styles/colors';

const styles = {
    floatingLabelStyle: {
        color: grey700,
    },
    floatingLabelFocusStyle: {
        color: cyan500, // change to pramry theme color
    },
};

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onEntityNameChange', 'onPrivacyPolicyLinkChange',
            'onCommentLinkChange', 'onEmailAddressChange', 'onPhoneNumberChange',
            'onAddressChange', 'onTechChange');
    }

    onEntityNameChange(e) {
        this.props.onIntroChange('entityName', e.target.value);
    }

    onPrivacyPolicyLinkChange(e) {
        this.props.onIntroChange('privacyPolicyLink', e.target.value);
    }

    onCommentLinkChange(e) {
        this.props.onIntroChange('commentLink', e.target.value);
    }

    onEmailAddressChange(e) {
        this.props.onIntroChange('emailAddress', e.target.value);
    }

    onPhoneNumberChange(e) {
        this.props.onIntroChange('phoneNumber', e.target.value);
    }

    onAddressChange(e) {
        this.props.onIntroChange('address', e.target.value);
    }
    onTechChange(e) {
        this.props.onIntroChange('techName', e.target.value);
    }

    render() {
        return (
            <div style={{ flex: 3 }}>
                <h3 className='question-group-title'>Contact Info</h3>
                <Card>
                    <div className="cardPadding">
                    <CardText>
                        <TextField
                          fullWidth
                          floatingLabelText="Legal Entity Name"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          value={this.props.entityName}
                          onChange={this.onEntityNameChange}
                        />
                        <TextField
                          fullWidth
                          floatingLabelText="Link to Full Privacy Policy"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          hintText="https://www.company.com/privacy"
                          value={this.props.privacyPolicyLink}
                          onChange={this.onPrivacyPolicyLinkChange}
                        />
                        <TextField
                          fullWidth
                          floatingLabelText="Link to Online Comment/Contact Form"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          hintText="https://www.company.com/contact"
                          value={this.props.commentLink}
                          onChange={this.onCommentLinkChange}
                        />
                        <br />
                        <br />
                        <TextField
                          floatingLabelText="Email Address"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          style={{ width: '48%', marginRight: '4%' }}
                          value={this.props.emailAddress}
                          onChange={this.onEmailAddressChange}
                        />
                        <TextField
                          floatingLabelText="Phone Number"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          hintText="(555) 555-1234"
                          style={{ width: '48%' }}
                          value={this.props.phoneNumber}
                          onChange={this.onPhoneNumberChange}
                        />
                        <TextField
                          fullWidth
                          floatingLabelText="Address (or country in which the company is located)"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          value={this.props.address}
                          onChange={this.onAddressChange}
                        />
                    </CardText>
                </div>
                </Card>
            </div>
        );
    }
}

Contact.propTypes = {
    onIntroChange: React.PropTypes.func.isRequired,
    entityName: React.PropTypes.string.isRequired,
    privacyPolicyLink: React.PropTypes.string.isRequired,
    commentLink: React.PropTypes.string.isRequired,
    emailAddress: React.PropTypes.string.isRequired,
    phoneNumber: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
};
