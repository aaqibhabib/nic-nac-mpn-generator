import React from 'react';
import update from 'immutability-helper';

import Results from 'components/Results/results';

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionIndex: 0,
            questions: [
                {
                    message: 'hey',
                    submessage: 'foo',
                    answer: '',
                },
                {
                    message: 'q2',
                    submessage: 'foo2',
                    answer: '',
                }
            ],
        }
    }

    onClick(e) {
        this.setState({currentQuestionIndex: this.state.currentQuestionIndex + 1})
    }
    onChange(e) {
        this.setState({questions : update(this.state.questions, {
            [this.state.currentQuestionIndex] : {
                answer : { $set: e.target.value }
            }
        })});
    }
    render() {
        const currentQuesiton = this.state.questions[this.state.currentQuestionIndex];
        if (this.state.currentQuestionIndex >= this.state.questions.length) {
            return <Results results={this.state.questions} />;
        }
        return (
            <div>
                <h1>{currentQuesiton.message}</h1>
                <h5>{currentQuesiton.submessage}</h5>
                <input type='text' value={currentQuesiton.answer} onChange={this.onChange.bind(this)} />
                <button onClick={this.onClick.bind(this)}>Next Questions</button>
            </div>
        );
    }
}