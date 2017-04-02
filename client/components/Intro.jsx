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
                        <p>This tool will help you generate a <a href="https://www.healthit.gov/sites/default/files/2016_model_privacy_notice.pdf">Model Privacy Notice (MPN)</a> for your company. After answering a few simple questions about your company’s privacy and security practices, you’ll be able to download HTML for your MPN to use on your website.</p>

                        <p>It’d be helpful to have your company’s full-length privacy policy on hand or assistance from your company's legal team to answer these questions.</p>
                    </CardText>
                </Card>
            </div>
        );
    }
}

Intro.propTypes = {

};
