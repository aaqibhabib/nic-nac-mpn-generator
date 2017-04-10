import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { grey100 } from 'material-ui/styles/colors';

export default class Intro extends React.Component {
    render() {
        return (
            <div>
                <section className='section container'>
                    <h4 className='intro-title'>Create Your Model Privacy Notice</h4>
                    <h5 className='intro-secondary-title'>Help your users understand how your organization collects and shares information. You can generate an "In Plain English" notice to share with users by answering a few questions about your company's privacy policy.</h5>
                    
                        
                    <RaisedButton onClick={this.props.onNextStep} label="Get Started" primary halfWidth />
                </section>

                <section style={{ backgroundColor: grey100 }}>
                    <div className=' section container'>
                        <h4 className='intro-title'>What is the MPN Wizard?</h4>
                        <h5 className='secondary-title'>The <a href='https://www.healthit.gov/sites/default/files/2016_model_privacy_notice.pdf'>Model Privacy Notice (MPN)</a> is a voluntary, openly available resource designed to help health technology developers who collect digital health data clearly convey information about their privacy and security policies to their users.</h5>
                        <div className='row'>
                            <div className='col m4'>
                                <h4>How it works</h4>
                                <p className='homepage'>This tool will help you generate a MPN for your company. After answering a few simple questions about your company’s privacy and security practices, you’ll be able to download HTML for your MPN to use on your website.</p>
                                <h4>Final Design</h4>
                                <p>Your final notice will be usable in any HTML environment. Easily export your generated MPN by downloading the HTML file or copying it directly from the Export Notice section of the generator.</p>
                                <RaisedButton label="See Sample Notice" primary fullWidth href='privacy-notice.html' />
                            </div>
                            <div className='col m8'>
                                <img style={{ width: '100%', marginTop: '10px', marginBottom: '20px' }} src='notice-preview.png' alt='Policy Notice' />
                            
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section className='section container'>
                    <h4 className='intro-title'>Developer Details</h4>
                    <h5 className='secondary-title'>The MPN Wizard is a web app which uses the React and Material-UI frameworks. The app source code is available on <a href='https://github.com/aaqibhabib/nic-nac-mpn-generator'>GitHub</a>.</h5>
                    <img style={{ width: '100%' }} src="export-notice.png" alt="Export Notice"/>
                </section>
            </div>
        );
    }
}

Intro.propTypes = {

};
