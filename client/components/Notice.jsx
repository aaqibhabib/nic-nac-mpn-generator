import React from 'react';
import _ from 'lodash';
import CodeExample from './CodeExample';
import NoticeCSS from '!raw!../styles/notice.css';
const beautifyHTML = require('js-beautify').html;
const beautifyCSS = require('js-beautify').css;

import { Steps, QuestionTypes, HelpText, Backgrounds } from '../config';

export default class Notice extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this);

        this.state = {
            code: '',
        };
    }

    componentDidMount() {
        const notice = document.getElementById('mpn-notice');
        const html = beautifyHTML(notice.outerHTML.replace(/<!--[\s\S]*?-->/g, ''));
        const css = beautifyCSS(NoticeCSS);
        const code = `
        <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Privacy Notice</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
                <style>
                ${css}
                </style>
            </head>
            <body>
            ${html}
            </body>
        </html>
        `;
        this.setState({ code: beautifyHTML(code) });
    }

    render() {
        return (
            <div>
                <CodeExample
                  title="Export Notice"
                  code={this.state.code}
                >
                    <div id="mpn-notice">
                        <div className="intro">
                            <div className="container">
                            <h1 className="notice-title text-center">Learn About Our Privacy Policy</h1>
                            <h2 className="text-center">We want you to know our privacy and security policies to encourage transparency and help you make informed choices when using our products. Learn everything you need to know in one quick summary.</h2>
                            <h4 className="text-center">If you want more information, you can peruse our <a href={this.props.privacyPolicyLink}>full privacy policy</a>. And, if you have any questions, comments or concerns, email us at {this.props.emailAddress}.</h4>
                            </div>
                        </div>
                        {(() => {
                            const sections = [];
                            let headerCounter = 0;
                            for (let i = 1; i < 6; i++) {
                                const currentStep = Steps[i];
                                sections.push(currentStep.values.map(questionGroup =>
                                    (<section key={questionGroup.key}>
                                        <div className="question-header">
                                            <img className={headerCounter % 2 === 0 ? 'bg-style-1' : 'bg-style-2'} src={Backgrounds[headerCounter % 4]} />
                                            <h1 className="text-center container">{questionGroup.key}</h1>
                                            {(() => {
                                                headerCounter++;
                                            })()}
                                        </div>
                                        {questionGroup.values.map((question) => {
                                            const key = `${Steps[i].key}-${questionGroup.key}-${question.id}`;
                                            const values = this.props.selections[key];
                                            if (!values || _.isEmpty(values)) return null; // skip questions with no answers
                                            if (question.type === QuestionTypes.CHECKBOX) {
                                                return (<div key={question.id} className="question-block container">
                                                    <h3 className="question-prompt">{question.helpText ? <abbr title={question.helpText}>{question.noticeText || question.prompt}</abbr> : question.noticeText || question.prompt}</h3>
                                                    <div className="question-answers">
                                                        {(() => {
                                                            const items = [];
                                                            const checkBox = this.props.selections[key];
                                                            // eslint-disable-next-line no-restricted-syntax
                                                            for (const selection in checkBox) {
                                                                const helpText = HelpText[selection];
                                                                if (checkBox[selection]) {
                                                                    items.push(<li>{selection === 'Other:' ? checkBox[selection] : helpText ? <abbr title={helpText}>{selection}</abbr> : selection}</li>);
                                                                }
                                                            }
                                                            return <ul>{items}</ul>;
                                                        })()}
                                                    </div>
                                                </div>);
                                            } else if (question.type === QuestionTypes.RADIO) {
                                                let selection = this.props.selections[key];
                                                const helpText = HelpText[selection];
                                                if (key === '1-HIPAA Covered Entity-p-2 g-1 q-1') {
                                                    selection = _.template(selection)({
                                                        techName: this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-2'] || 'our product',
                                                        privacyLink: this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-3'] || 'Link to HIPPA Notice',
                                                    });
                                                    if (_.startsWith(selection, 'Some')) {
                                                        return (<div key={question.id} className="question-block container">
                                                            <h3 className="question-prompt">{question.helpText ? <abbr title={question.helpText}>{question.noticeText || question.prompt}</abbr> : question.noticeText || question.prompt}</h3>
                                                            <div className="question-answers">{helpText ? <abbr title={helpText}>{selection}</abbr> : selection} Read our <a href={this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-3' || 'Link to HIPPA Notice']}>HIPAA Notice of Privacy Practices</a> for more information.</div>
                                                        </div>
                                                        );
                                                    }
                                                }
                                                return (<div key={question.id} className="question-block container">
                                                    <h3 className="question-prompt">{question.helpText ? <abbr title={question.helpText}>{question.noticeText || question.prompt}</abbr> : question.noticeText || question.prompt}</h3>
                                                    <div className="question-answers">{helpText ? <abbr title={helpText}>{selection}</abbr> : selection}</div>
                                                </div>);
                                            } else if (question.type === QuestionTypes.TEXT) {
                                                const prompt = _.template(question.noticeText || question.prompt)({ entityName: this.props.entityName || 'The Company' });
                                                if (key === '5-Policy Changes: How the company will notify users if the privacy policy changes-p-6 g-1 q-2' || key === '5-Breach: How the company will notify users and protect data in case of an improper disclosure-p-6 g-2 q-2') {
                                                    return (<div key={question.id} className="question-block container">
                                                        <h3 className="question-prompt">{prompt}</h3>
                                                        <div className="question-answers"><a href={this.props.selections[key]}>{this.props.selections[key]}</a></div>
                                                    </div>);
                                                }
                                                return (<div key={question.id} className="question-block container">
                                                    <h3 className="question-prompt">{prompt}</h3>
                                                    <div className="question-answers">{this.props.selections[key]}</div>
                                                </div>);
                                            }
                                            return null;
                                        })
                                        }
                                    </section>)));
                            }
                            return sections;
                        })()}

                        <div className="footer">
                            <div className="container">
                            <h1 className="text-center">Contact Us</h1>
                            <div>
                                <h3>{this.props.entityName}</h3>
                                <h3><a href={this.props.privacyPolicyLink} target="_blank">Full Privacy Policy</a></h3>
                                <h3><a href={this.props.commentLink} target="_blank">Help Forum</a></h3>
                                <h3>Email Address: <a href={`mailto:${this.props.emailAddress}`} target="_blank">{this.props.emailAddress}</a></h3>
                                <h3>Phone Number: {this.props.phoneNumber}</h3>
                                <h3>{this.props.address}</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                </CodeExample>
            </div>
        );
    }
}

Notice.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    selections: React.PropTypes.object.isRequired,
    entityName: React.PropTypes.string.isRequired,
    privacyPolicyLink: React.PropTypes.string.isRequired,
    commentLink: React.PropTypes.string.isRequired,
    emailAddress: React.PropTypes.string.isRequired,
    phoneNumber: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
};
