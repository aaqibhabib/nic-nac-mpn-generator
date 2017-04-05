import React from 'react';
import _ from 'lodash';
import CodeExample from './CodeExample';
const beautifyHTML = require('js-beautify').html;

import { Steps, QuestionTypes, HelpText } from '../config';

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
        const code = beautifyHTML(notice.outerHTML);
        this.setState({ code });
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
                            <h1 className="text-center">Learn About Our Privacy Policy</h1>
                            <h2 className="text-center">We want you to know our privacy and security policies to encourage transparency and help you make informed choices when using out products. Learn everything you need to know in one quick summary</h2>
                            <h4 className="text-center">If you want more information, you can peruse out full privacy policy. And, if you have any questions, comments or concerns, email us at {this.props.emailAddress}.</h4>
                        </div>
                        {(() => {
                            const sections = [];
                            for (let i = 1; i < 6; i++) {
                                const currentStep = Steps[i];
                                sections.push(currentStep.values.map(questionGroup =>
                            (<section key={questionGroup.key}>
                                <h1 className="text-center">{questionGroup.key}</h1>
                                {questionGroup.values.map((question) => {
                                    const key = `${Steps[i].key}-${questionGroup.key}-${question.id}`;
                                    const values = this.props.selections[key];
                                    if (!values || !values.length > 0) return null; // skip questions with no answers
                                    if (question.type === QuestionTypes.CHECKBOX) {
                                        return (<div key={question.id} className="question-block">
                                            <h4 className="question-prompt">{question.helpText ? <abbr title={question.helpText}>{question.noticeText || question.prompt}</abbr> : question.noticeText || question.prompt}</h4>
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
                                        const selection = this.props.selections[key];
                                        const helpText = HelpText[selection];
                                        return (<div key={question.id} className="question-block">
                                            <h4 className="question-prompt">{question.helpText ? <abbr title={question.helpText}>{question.noticeText || question.prompt}</abbr> : question.noticeText || question.prompt}</h4>
                                            <div className="question-answers">{helpText ? <abbr title={helpText}>{selection}</abbr> : selection}</div>
                                        </div>);
                                    } else if (question.type === QuestionTypes.TEXT) {
                                        return (<div key={question.id} className="question-block">
                                            <h4 className="question-prompt">{question.noticeText || question.prompt}</h4>
                                            <div className="question-answers">{this.props.selections[key]}</div>
                                        </div>);
                                    }
                                    return null;
                                })}
                            </section>)));
                            }
                            return sections;
                        })()}

                        <div className="footer">
                            <h1 className='text-center'>Contact Us</h1>
                            <div>
                                <h4>Privacy Officer, {this.props.entityName}</h4>
                                <h4>{this.props.privacyPolicyLink}</h4>
                                <h4>{this.props.commentLink}</h4>
                                <h4>{this.props.emailAddress}</h4>
                                <h4>{this.props.phoneNumber}</h4>
                                <h4>{this.props.address}</h4>
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
