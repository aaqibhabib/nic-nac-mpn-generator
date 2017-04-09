import React from 'react';
import _ from 'lodash';

import { Steps, QuestionTypes } from '../config';
import CheckboxQuestion from './CheckboxQuestion';
import RadioQuestion from './RadioQuestion';
import TextQuestion from './TextQuestion';

export default class Questions extends React.Component {
    render() {
        const currentStep = Steps[this.props.currentStepIndex];
        return (
            <div style={{ flex: 3 }}>
                {currentStep.values.map(questionGroup =>
                    (<div key={questionGroup.key}>
                        <h3 className='question-group-title'>{questionGroup.key}</h3>
                        {questionGroup.values.map((question) => {
                            const key = `${currentStep.key}-${questionGroup.key}-${question.id}`;
                            //Conditinal Questions
                            //HIPPA Policy Page
                            if (key === '1-HIPAA Covered Entity-p-2 g-1 q-2' &&
                            (_.startsWith(this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-1'], 'The company') ||
                             _.isEmpty(this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-1']))) { return null; }
                            if (key === '1-HIPAA Covered Entity-p-2 g-1 q-3' &&
                            (_.startsWith(this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-1'], 'The company') ||
                            _.startsWith(this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-1'], 'The health') ||
                             _.isEmpty(this.props.selections['1-HIPAA Covered Entity-p-2 g-1 q-1']))) { return null; }
                            //Data Usage Page
                            if (key === '2-Share: How data is shared externally with other companies or entities-p-3 g-2 q-3') {
                                if (!_.isEmpty(this.props.selections['2-Share: How data is shared externally with other companies or entities-p-3 g-2 q-2'])) {
                                    if (!!this.props.selections['2-Share: How data is shared externally with other companies or entities-p-3 g-2 q-2']['To provide the primary service of the app or technology']) {
                                        {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                    }
                                }
                                if (!_.isEmpty(this.props.selections['2-Share: How data is shared externally with other companies or entities-p-3 g-2 q-1'])) {
                                    if (!!this.props.selections['2-Share: How data is shared externally with other companies or entities-p-3 g-2 q-1']['To provide the primary service of the app or technology']) {
                                        {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                    } return null;
                                } return null;
                            }

                            if (key === '2-Sell: How data is sold-p-3 g-3 q-2') {
                                if (_.endsWith(this.props.selections['2-Sell: How data is sold-p-3 g-3 q-1'], 'permission'))
                                    {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            if (key === '2-Sell: How data is sold-p-3 g-3 q-4') {
                                if (_.endsWith(this.props.selections['2-Sell: How data is sold-p-3 g-3 q-3'], 'permission'))
                                    {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            //Data Sharing Page
                            if (key === '3-Encryption: How data is encrypted-p-4 g-2 q-2') {
                                if (_.endsWith(this.props.selections['3-Encryption: How data is encrypted-p-4 g-2 q-1'], 'taken'))
                                    {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            if (key === '3-Encryption: How data is encrypted-p-4 g-2 q-4') {
                                if (_.endsWith(this.props.selections['3-Encryption: How data is encrypted-p-4 g-2 q-3'], 'taken'))
                                    {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            if (key === '3-Encryption: How data is encrypted-p-4 g-2 q-6') {
                                if (_.endsWith(this.props.selections['3-Encryption: How data is encrypted-p-4 g-2 q-5'], 'taken'))
                                    {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            if (key === '3-Privacy: How this technology accesses other data -p-4 g-3 q-2') {
                                if (_.startsWith(this.props.selections['3-Privacy: How this technology accesses other data -p-4 g-3 q-1'], 'Yes'))
                                    {const selection = _.get(this.props.selections, [key], {}); return (<CheckboxQuestion {...question} key={question.id} selection={selection} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            if (key === '3-Privacy: How this technology accesses other data -p-4 g-3 q-4') {
                                if (_.startsWith(this.props.selections['3-Privacy: How this technology accesses other data -p-4 g-3 q-1'], 'Yes'))
                                    {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            if (key === '3-Privacy: How this technology accesses other data -p-4 g-3 q-5') {
                                if (_.startsWith(this.props.selections['3-Privacy: How this technology accesses other data -p-4 g-3 q-3'], 'Yes'))
                                    {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            //User Options
                            if (key === '4-User Options: What can a user do with the data that is collected-p-5 g-1 q-2') {
                                if (_.startsWith(this.props.selections['4-User Options: What can a user do with the data that is collected-p-5 g-1 q-1'], 'Yes'))
                                    {const selection = _.get(this.props.selections, [key], {}); return (<CheckboxQuestion {...question} key={question.id} selection={selection} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            if (key === '4-User Options: What can a user do with the data that is collected-p-5 g-1 q-3') {
                                if (_.startsWith(this.props.selections['4-User Options: What can a user do with the data that is collected-p-5 g-1 q-1'], 'Yes'))
                                    {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            if (key === '4-Deactivation: What happens to data when an account is deactivated-p-5 g-2 q-2') {
                                if (_.startsWith(this.props.selections['4-Deactivation: What happens to data when an account is deactivated-p-5 g-2 q-1'], 'Deleted after'))
                                    {const selection = _.get(this.props.selections, [key], ''); return (<TextQuestion {...question} key={question.id} selection={selection} hintText={question.hintText} onChange={this.props.onSelectionChange}/>);}
                                return null;
                            }
                            //Default Questions
                            if (question.type === QuestionTypes.CHECKBOX) {
                                const selection = _.get(this.props.selections, [key], {});
                                return (<CheckboxQuestion
                                  {...question}
                                  key={question.id}
                                  selection={selection}
                                  onChange={this.props.onSelectionChange}
                                />);
                            } else if (question.type === QuestionTypes.RADIO) {
                                const selection = _.get(this.props.selections, [key], '');
                                return (<RadioQuestion
                                  {...question}
                                  key={question.id}
                                  selections={this.props.selections}
                                  selection={selection}
                                  onChange={this.props.onSelectionChange}
                                />);
                            } else if (question.type === QuestionTypes.TEXT) {
                                const selection = _.get(this.props.selections, [key], '');
                                return (<TextQuestion
                                  {...question}
                                  key={question.id}
                                  selection={selection}
                                  hintText={question.hintText}
                                  onChange={this.props.onSelectionChange}
                                />);
                            }
                            return null;
                        })}
                    </div>),
                )}
            </div>
        );
    }
}

Questions.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    selections: React.PropTypes.object.isRequired,
    onSelectionChange: React.PropTypes.func.isRequired,
    currentStepIndex: React.PropTypes.number.isRequired,
};
