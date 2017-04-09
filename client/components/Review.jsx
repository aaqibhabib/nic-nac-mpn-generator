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
        fontSize: 16,
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
            <div style={{ flex: 3 }}>
                <h3 className='question-group-title'>Review</h3>
                <Card className="reviewCard" style={styles.reviewCard}>
                    <div className="cardPadding">
                    <CardTitle title="Contact Info" className="questionTitleText" style={{ paddingLeft: '35px', paddingBottom: '0em', paddingTop: '1.5em' }} >
                        <IconButton style={styles.root} touch tooltip="Edit" onClick={() => this.setStep(0)}><ModeEdit /></IconButton>
                    </CardTitle>
                    <CardText>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Company Name:</div>
                            <div style={styles.td}>{this.props.entityName}</div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Link to Privacy Policy:</div>
                            <div style={styles.td}><a href={this.props.privacyPolicyLink} target="_blank">{this.props.privacyPolicyLink}</a></div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Link to Comment/Contact Form:</div>
                            <div style={styles.td}><a href={this.props.commentLink} target="_blank">{this.props.commentLink}</a></div>
                        </div>
                        <div className="tr" style={styles.tr}>
                            <div style={styles.td}>Email Address:</div>
                            <div style={styles.td}><a href={'mailto:' + this.props.emailAddress} target="_blank">{this.props.emailAddress}</a></div>
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
                    </div>
                </Card>
                {(() => {
                    const cards = [];
                    for (let i = 1; i < 6; i++) {
                        cards.push(<ReviewCards
                          currentStepIndex={i}
                          selections={this.props.selections}
                          setStep={this.setStep}
                        />);
                    }
                    return <div>{cards}</div>;
                })()}
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
    setStep: React.PropTypes.func.isRequired,
};
