import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Intro extends React.Component {
    render() {
        return (
            <div>
                <section className='section container'>
                    <h2 className='notice-title'>Create Your Privacy Notice</h2>
                    <p>Help your users understand how your organization collects and shares information. Answer a couple questions about your privacy policy and make an "In Plain English" policy to share with users.</p>
                    <RaisedButton onClick={this.props.onNextStep} label="Get Started" primary />
                </section>

                <section className='grey lighten-2'>
                    <div className=' section container'>
                        <h2 className='notice-title'>What is the MPN Wizard?</h2>
                        <p>The Model Privacy Notice (MPN) is a voluntary, openly available resource designed to help health technology developers who collect digital health data clearly convey information about their privacy and security policies to their users.</p>
                        <div className='row'>
                            <div className='col s6'>
                                <h4>How it works</h4>
                                <p>This tool will help you generate a MPN for your company. After answering a few simple questions about your company’s privacy and security practices, you’ll be able to download HTML for your MPN to use on your website.</p>
                                <h4>Getting Started</h4>
                                <p>It’d be helpful to have your company’s full-length privacy policy on hand or assistance from your company's legal team to answer these questions.</p>
                            </div>
                            <img className='col s6' src='tool.png' alt='Policy Notice' />
                        </div>
                        <RaisedButton label="Sample Notice" primary />
                    </div>
                </section>

                <section className='section container'>
                    <h2 className='notice-title'>Developer Details</h2>
                    <p>The MPN Wizard is a web app that uses the React and Material-UI frameworks. The app source code is available on <a href='https://github.com/aaqibhabib/nic-nac-mpn-generator'>GitHub</a></p>
                </section>
            </div>
        );
    }
}

Intro.propTypes = {

};
