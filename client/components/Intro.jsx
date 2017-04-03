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
                <h2 style={{margin: 0 }} >Create Your Privacy Notice</h2>
                    <p>Help your users understand how your organization
                             collects and shares information. Answer a couple
                              questions about your privacy policy and make a
                               &quot;In Plain English&quot; policy to share. </p>
                    <p>This tool will help you generate a <a href="https://www.healthit.gov/sites/default/files/2016_model_privacy_notice.pdf">Model Privacy Notice (MPN)</a> for your company. After answering a few simple questions about your company’s privacy and security practices, you’ll be able to download HTML for your MPN to use on your website.</p>

                    <p>It’d be helpful to have your company’s full-length privacy policy on hand or assistance from your company's legal team to answer these questions.</p>
            </div>
        );
    }
}

Intro.propTypes = {

};
