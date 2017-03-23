import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { black, cyan500 } from 'material-ui/styles/colors';

const styles = {
    floatingLabelStyle: {
        color: black,
    },
    floatingLabelFocusStyle: {
        color: cyan500, // change to pramry theme color
    },
};

export default class Intro extends React.Component {
    render() {
        return (
            <div>
                <Card style={{margin:'21.440 0'}}>
                    <CardTitle><h1 style={{margin: 0 }} >Create Your Privacy Notice</h1></CardTitle>
                    <CardText>
                        <p>Help your users understand how your organization
                             collects and shares information. Answer a couple
                              questions about your privacy policy and make a
                               &quot;In Plain English&quot; policy to share.</p>
                    </CardText>
                </Card>
            </div>
        );
    }
}

Intro.propTypes = {

};
