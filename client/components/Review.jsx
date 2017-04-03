import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

import ReviewCards from './ReviewCards';

const styles = {
    tr: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '24px 0px',
        borderBottom: '1px solid rgb(224, 224, 224)',
    },
    td: {
        flex: 1,
        fontSize: 13,
        paddingLeft: 24,
        paddingRight: 24,
    },
    reviewCard: {
        marginBottom: 30,
    },
    root: {
        top: 0,
        bottom: 0,
        right: 4,
        margin: 'auto',
        position: 'absolute',
    },
};

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, 'setStep');
    }

    setStep(index) {
        this.props.setStep(index);
    }

    render() {
        return (
            <div>
                <h3>Review</h3>
                <Card className="reviewCard" style={styles.reviewCard}>
                    <CardTitle title="Contact Info" titleStyle={{ fontSize: 20 }} >
                        <IconButton style={styles.root} touch tooltip="Edit" onClick={() => this.setStep(0)}><ModeEdit /></IconButton>
                    </CardTitle>
                    <CardText>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Company Name:</div>
                            <div style={styles.td}>{this.props.entityName}</div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Link to Privacy Policy:</div>
                            <div style={styles.td}><a href={this.props.privacyPolicyLink}>{this.props.privacyPolicyLink}</a></div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Link to Comment/Contact Form:</div>
                            <div style={styles.td}><a href={this.props.commentLink}>{this.props.commentLink}</a></div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Privacy Officer&quot;s Email Address:</div>
                            <div style={styles.td}><a href={this.props.emailAddress}>{this.props.emailAddress}</a></div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Phone Number:</div>
                            <div style={styles.td}>{this.props.phoneNumber}</div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Address, Country:</div>
                            <div style={styles.td}>{this.props.address}</div>
                        </div>
                    </CardText>
                </Card>
                {(() => {
                    const cards = [];
                    for (let i = 1; i < 5; i++) {
                        cards.push(<ReviewCards
                          currentStepIndex={i}
                          selections={this.props.selections}
                          setStep={this.setStep}
                        />);
                    }
                    return <div>{cards}</div>;
                })()}
                <Card className="reviewCard">
                    <CardTitle title="Notification" titleStyle={{ fontSize: 20 }} >
                        <IconButton style={styles.root} touch tooltip="Edit" onClick={() => this.setStep(5)}><ModeEdit /></IconButton>
                    </CardTitle>
                    <CardText>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Describe how/if the company will notify consumers of privacy policy changes (e.g. merger or acquisition):</div>
                            <div style={styles.td}>{this.props.policyText}</div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Link to section in privacy policy:</div>
                            <div style={styles.td}><a href={this.props.changeSectionLink}>{this.props.changeSectionLink}</a></div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Describe how the company will protect consumers’ data in the case of a breach:</div>
                            <div style={styles.td}>{this.props.breachText}</div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Link to section in privacy policy:</div>
                            <div style={styles.td}><a href={this.props.breachSectionLink}>{this.props.breachSectionLink}</a></div>
                        </div>

                    </CardText>
                </Card>
            </div>
        );
    }
}

Review.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    selections: React.PropTypes.object.isRequired,
    entityName: React.PropTypes.string.isRequired,
    privacyPolicyLink: React.PropTypes.string.isRequired,
    commentLink: React.PropTypes.string.isRequired,
    emailAddress: React.PropTypes.string.isRequired,
    phoneNumber: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    policyText: React.PropTypes.string.isRequired,
    changeSectionLink: React.PropTypes.string.isRequired,
    breachText: React.PropTypes.string.isRequired,
    breachSectionLink: React.PropTypes.string.isRequired,
    setStep: React.PropTypes.func.isRequired,
};
