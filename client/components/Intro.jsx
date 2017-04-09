import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { grey300 } from 'material-ui/styles/colors';

export default class Intro extends React.Component {
    render() {
        return (
            <div>
                <section className='section container'>
                    <h4 className='intro-title'>Create Your Privacy Notice</h4>
                    <h5 className='intro-secondary-title'>Help your users understand how your organization collects and shares information. Answer a couple questions about your privacy policy and make an "In Plain English" policy to share with users.</h5>
                    <div className='row'>
                        <div className='col s8 offset-s4'>
                            <RaisedButton onClick={this.props.onNextStep} label="Get Started" primary fullWidth />
                        </div>
                    </div>
                </section>

                <section style={{ backgroundColor: grey300 }}>
                    <div className=' section container'>
                        <h4 className='intro-title'>What is the MPN Wizard?</h4>
                        <h5 className='intro-secondary-title'>The <a href='https://www.healthit.gov/sites/default/files/2016_model_privacy_notice.pdf'>Model Privacy Notice (MPN)</a> is a voluntary, openly available resource designed to help health technology developers who collect digital health data clearly convey information about their privacy and security policies to their users.</h5>
                        <div className='row'>
                            <div className='col s4'>
                                <h4>How it works</h4>
                                <p>This tool will help you generate a MPN for your company. After answering a few simple questions about your company’s privacy and security practices, you’ll be able to download HTML for your MPN to use on your website.</p>
                                <h4>Getting Started</h4>
                                <p>It’d be helpful to have your company’s full-length privacy policy on hand or assistance from your company's legal team to answer these questions.</p>
                            </div>
                            <img className='col s8' src='notice-preview.png' alt='Policy Notice' />
                        </div>
                        <div className='row'>
                            <div className='col s8 offset-s4'>
                                <RaisedButton label="See Sample Notice" primary fullWidth href='privacy-notice.html' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section container'>
                    <h4 className='intro-title'>Developer Details</h4>
                    <h5 className='intro-secondary-title'>Easily export your generated notice by downloading the HTML file or copying it directly.</h5>
                    <p>The MPN Wizard is a web app that uses the React and Material-UI frameworks. The app source code is available on <a href='https://github.com/aaqibhabib/nic-nac-mpn-generator'>GitHub</a>.</p>
                    <img src="export-notice.png" alt="Export Notice"/>
                </section>
            </div>
        );
    }
}

Intro.propTypes = {

};
