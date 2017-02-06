import React from 'react';

export default class Results extends React.Component {
    render() {
        const results = this.props.results.map(item => {
            return `
            <div>
                <p>${item.message}</p>
                <p>${item.submessage}</p>
                <p>you ansered: ${item.answer}</p>
            </div>
            `;
        })
        results.unshift('<div>');
        results.push('</div>');
        return (
            <div>
                <h1>Copy and paste the following HTML of your custom MPN</h1>
                <code>
                    {results}
                </code>
            </div>
        );
    }
}