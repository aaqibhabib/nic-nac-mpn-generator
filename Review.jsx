import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';

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
};

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this);
    }

    render() {
        return (
            <div>
                <h3>Review</h3>
                <Card className="reviewCard">
                    <CardTitle ><div style={{ fontSize: 20 }}>Contact Info</div></CardTitle>
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
                    for (let i = 1; i < 6; i++) {
                        cards.push(<ReviewCards
                          currentStepIndex={i}
                          selections={this.props.selections}
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
};
