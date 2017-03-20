import React from 'react';
import TextField from 'material-ui/TextField';

export default class Intro extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'onEntityNameChange', 'onPrivacyPolicyLinkChange',
        'onCommentLinkChange', 'onEmailAddressChange', 'onPhoneNumberChange', 'onAddressChange');
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

    render() {
        return (
            <div>
                <TextField
                  fullWidth
                  floatingLabelText="Legal Entiry Name"
                  value={this.props.entityName}
                  onChange={this.onEntityNameChange}
                />
                <br />
                <TextField
                  fullWidth
                  floatingLabelText="Link to Full Privacy Policy"
                  value={this.props.privacyPolicyLink}
                  onChange={this.onPrivacyPolicyLinkChange}
                />
                <br />
                <TextField
                  fullWidth
                  floatingLabelText="Link to Online Comment/Contact Form"
                  value={this.props.commentLink}
                  onChange={this.onCommentLinkChange}
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  floatingLabelText="Email Address"
                  value={this.props.emailAddress}
                  onChange={this.onEmailAddressChange}
                />
                <br />
                <TextField
                  fullWidth
                  floatingLabelText="Phone Number"
                  value={this.props.phoneNumber}
                  onChange={this.onPhoneNumberChange}
                />
                <br />
                <TextField
                  fullWidth
                  floatingLabelText="Address, Country"
                  value={this.props.address}
                  onChange={this.onAddressChange}
                />
            </div>
        );
    }
}

Intro.propTypes = {
    onIntroChange: React.PropTypes.func.isRequired,
    entityName: React.PropTypes.string.isRequired,
    privacyPolicyLink: React.PropTypes.string.isRequired,
    commentLink: React.PropTypes.string.isRequired,
    emailAddress: React.PropTypes.string.isRequired,
    phoneNumber: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
};
