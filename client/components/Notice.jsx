import React from 'react';
import _ from 'lodash';
import CodeExample from './CodeExample';
const beautifyHTML = require('js-beautify').html;

import { Steps, QuestionTypes } from '../config';

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
                                    if (question.type === QuestionTypes.CHECKBOX) {
                                        return (<div key={question.id} className="question-block">
                                            <h3 className="question-prompt">{question.prompt}</h3>
                                            <div className="question-answers">
                                                {(() => {
                                                    const items = [];
                                                    const checkBox = this.props.selections[key];
                                                    // eslint-disable-next-line no-restricted-syntax
                                                    for (const selection in checkBox) {
                                                        if (checkBox[selection]) items.push(<li>{selection === 'Other:' ? checkBox[selection] : selection}</li>);
                                                    }
                                                    return <ul>{items}</ul>;
                                                })()}
                                            </div>
                                        </div>);
                                    } else if (question.type === QuestionTypes.RADIO) {
                                        return (<div key={question.id} className="question-block">
                                            <h3 className="question-prompt">{question.prompt}</h3>
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
                            <h3>Privacy Officer, {this.props.entityName}</h3>
                            <h3>{this.props.privacyPolicyLink}</h3>
                            <h3>{this.props.commentLink}</h3>
                            <h3>{this.props.emailAddress}</h3>
                            <h3>{this.props.phoneNumber}</h3>
                            <h3>{this.props.address}</h3>
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
