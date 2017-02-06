import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value='',
        }
    }
    onChange(e) {
        this.setState({value: e.target.value})
    }
    render() {
        return <input value={this.state.value} onChange={this.onChange.bind(this)} />
    }
}