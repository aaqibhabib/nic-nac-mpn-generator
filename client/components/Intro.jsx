import React from 'react';

export default class Intro extends React.Component {
    render() {
        return (
            <div>
                <div className="section no-pad-bot" id="index-banner" style={{}}>
                <div className="container">
                    <div className="col s12 m6">
                    <div className="icon-block">
                        <h4 className="header center text-darken-3" style={{paddingTop: 35, fontSize: '2em'}}>Create Your Privacy Notice</h4>
                        <h5 className="header col s16 light " style={{lineHeight: '1.2em', fontSize: '1.2em'}}>Help your users understand how your organization collects and shares information. Answer a couple questions about your privacy policy and make an "In Plain English" policy to share with users.</h5>
                        <button className="button btn-large waves-effect waves-light">Get Started</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="grey lighten-2">
                <div className="container">
                    <div className="section">
                    <br /><br />
                    <h4 className="header center text-darken-3" style={{paddingTop: 35, fontSize: '2em'}}>What is the MPN Wizard?</h4>
                    <div className="row">
                        <br /><br />
                        <div className="row center grey-text text-darken-3" style={{marginLeft: '10%', marginRight: '10%', textAlign: 'left'}}>
                        <h5 className="header col s16 light " style={{lineHeight: '1.2em', fontSize: '1.2em'}}>The <a href="https://www.healthit.gov/sites/default/files/2016_model_privacy_notice.pdf">Model Privacy Notice (MPN)</a> is a voluntary, openly available resource designed to help health technology developers who collect digital health data clearly convey information about their privacy and security policies to their users.</h5>
                        </div>
                        <div className="col s12 m6">
                        <div className="icon-block">
                            <h5 className="center black-text">How it works </h5>
                            <p className="light">This tool will help you generate a MPN for your company. After answering a few simple questions about your company’s privacy and security practices, you’ll be able to download HTML for your MPN to use on your website.</p>
                            <h5 className="center black-text">Getting Started</h5>
                            <p className="light">It’d be helpful to have your company’s full-length privacy policy on hand or assistance from your company's legal team to answer these questions.</p>
                        </div>
                        </div>
                        <div className="col s12 m6">
                        <div className="icon-block">
                            <img src="tool.png" style={{width: '100%'}} />
                        </div>
                        </div>
                        <a href="i" d="download-button" className="button btn-large waves-effect waves-light" style={{fontWeight: 300, fontSize: '1.3em'}}>Sample Notice</a>
                        <br /><br />
                    </div>
                    <br /><br />
                    </div>
                </div>
                </div>
                <div className="white">
                <div className="container">
                    <div className="section">
                    <br /><br />
                    <h4 className="header center text-darken-3" style={{paddingTop: 35, fontSize: '2em'}}>Developer Details</h4>
                    <div className="row">
                        <br /><br />
                        <div className="icon-block">
                        <p className="light">The MPN Wizard is a web app that uses the React and Material-UI frameworks. The app source code is available on <a href="https://github.com/aaqibhabib/nic-nac-mpn-generator">GitHub</a>. </p>
                        </div>
                    </div>
                    <br /><br />
                    </div>
                </div>
                </div>
                <footer className="page-footer grad">
                <div className="footer-copyright">
                    <div className="container">
                    Made by <a className="white-text ">Amy Friedman, Aaqib Habib, and Hana Habib </a>
                    </div>
                </div>
                </footer>
            </div>
        );
    }
}

Intro.propTypes = {

};
